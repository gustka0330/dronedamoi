import { NextResponse } from 'next/server';
import { ALLOWED_ADMIN_EMAILS, signAdminToken } from '@/lib/auth';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state') || '/admin';
  const error = searchParams.get('error');

  const origin = new URL(request.url).origin;

  if (error || !code) {
    return NextResponse.redirect(
      new URL(`/admin/login?error=${encodeURIComponent(error || 'no_code')}`, origin)
    );
  }

  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = `${origin}/api/auth/callback/google`;

    if (!clientId || !clientSecret) {
      return NextResponse.redirect(
        new URL('/admin/login?error=missing_credentials', origin)
      );
    }

    // 1. Exchange auth code for access token
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      console.error('Google token exchange error:', tokenData);
      return NextResponse.redirect(
        new URL('/admin/login?error=token_exchange_failed', origin)
      );
    }

    // 2. Fetch Google User Profile
    const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const userData = await userRes.json();

    if (!userRes.ok || !userData.email) {
      return NextResponse.redirect(
        new URL('/admin/login?error=fetch_user_failed', origin)
      );
    }

    const userEmail = userData.email.toLowerCase();

    // 3. Strict Admin Email check (gustka0330@gmail.com)
    if (!ALLOWED_ADMIN_EMAILS.some((e) => e.toLowerCase() === userEmail)) {
      return NextResponse.redirect(
        new URL(
          `/admin/login?error=unauthorized_email&email=${encodeURIComponent(userEmail)}`,
          origin
        )
      );
    }

    // 4. Sign JWT session
    const sessionToken = await signAdminToken({
      email: userEmail,
      name: userData.name || '윤현삼 관리자',
      picture: userData.picture,
      role: 'super_admin',
    });

    // 5. Create response with HTTP-only secure cookie
    const response = NextResponse.redirect(new URL(state, origin));
    response.cookies.set('dronedamoi_admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('OAuth callback exception:', err);
    return NextResponse.redirect(
      new URL('/admin/login?error=server_error', origin)
    );
  }
}
