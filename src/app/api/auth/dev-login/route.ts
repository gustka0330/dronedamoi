import { NextResponse } from 'next/server';
import { signAdminToken, ADMIN_EMAIL } from '@/lib/auth';

export async function POST() {
  const sessionToken = await signAdminToken({
    email: ADMIN_EMAIL,
    name: '윤현삼 (관리자)',
    role: 'super_admin',
  });

  const response = NextResponse.json({
    success: true,
    redirectUrl: '/admin',
  });

  response.cookies.set('dronedamoi_admin_session', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return response;
}
