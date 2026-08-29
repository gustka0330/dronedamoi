import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      inquiryType,
      organization,
      name,
      email,
      phone,
      targetGroup,
      studentCount,
      preferredDate,
      sessionCount,
      location,
      message,
      privacyAgreed,
    } = body;

    // Basic validation
    if (!name || !email || !phone || !organization || !privacyAgreed) {
      return NextResponse.json(
        { error: '필수 입력 항목이 누락되었습니다.' },
        { status: 400 }
      );
    }

    // In a production setup with Supabase / Email service:
    // e.g. await supabase.from('inquiries').insert([body])
    // or send email via Resend / Nodemailer
    console.log('[DRONEDAMOI Inquiry Received]:', {
      timestamp: new Date().toISOString(),
      inquiryType,
      organization,
      name,
      email,
      phone,
      targetGroup,
      studentCount,
      preferredDate,
      sessionCount,
      location,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: '교육 문의가 성공적으로 접수되었습니다.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: '서버 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
