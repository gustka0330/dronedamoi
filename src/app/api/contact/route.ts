import { NextResponse } from 'next/server';
import { sendInquiryNotification, TARGET_EMAIL } from '@/lib/mail';

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
        { error: '필수 입력 항목(기관명, 이름, 이메일, 연락처, 개인정보 동의)이 누락되었습니다.' },
        { status: 400 }
      );
    }

    // Send real email notification
    const emailResult = await sendInquiryNotification({
      inquiryType: inquiryType || '학생 드론교육',
      organization,
      name,
      email,
      phone,
      targetGroup: targetGroup || '초등학생',
      studentCount,
      preferredDate,
      sessionCount,
      location,
      message,
    });

    console.log('[DRONEDAMOI Inquiry Received & Dispatched]:', {
      timestamp: new Date().toISOString(),
      organization,
      name,
      email,
      phone,
      recipient: TARGET_EMAIL,
      emailResult,
    });

    return NextResponse.json(
      {
        success: true,
        message: '교육 문의가 성공적으로 접수되어 담당자에게 이메일로 발송되었습니다.',
        delivery: emailResult,
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
