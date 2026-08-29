import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'gustka0330@gmail.com';
export const ALLOWED_ADMIN_EMAILS = [ADMIN_EMAIL, 'gustka0330@gmail.com'];

const SECRET_KEY = new TextEncoder().encode(
  process.env.ADMIN_SESSION_SECRET || 'dronedamoi-super-secret-jwt-key-2026-yoon-hyun-sam-secure'
);

export interface AdminUser {
  email: string;
  name: string;
  picture?: string;
  role: 'super_admin';
}

export async function signAdminToken(user: AdminUser): Promise<string> {
  return new SignJWT({
    email: user.email,
    name: user.name,
    picture: user.picture,
    role: user.role,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET_KEY);
}

export async function verifyAdminToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    const email = payload.email as string;

    if (!ALLOWED_ADMIN_EMAILS.includes(email)) {
      return null;
    }

    return {
      email,
      name: (payload.name as string) || '윤현삼 관리자',
      picture: payload.picture as string | undefined,
      role: 'super_admin',
    };
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('dronedamoi_admin_session');

  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  return verifyAdminToken(sessionCookie.value);
}
