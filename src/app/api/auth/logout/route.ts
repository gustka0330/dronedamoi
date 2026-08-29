import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const response = NextResponse.redirect(new URL('/admin/login?logged_out=1', origin));

  response.cookies.delete('dronedamoi_admin_session');
  return response;
}

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('dronedamoi_admin_session');
  return response;
}
