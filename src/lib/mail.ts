import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export interface InquiryPayload {
  inquiryType: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  targetGroup: string;
  studentCount?: string;
  preferredDate?: string;
  sessionCount?: string;
  location?: string;
  message?: string;
}

export const TARGET_EMAIL = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'gustka0330@gmail.com';

function generateHtmlEmail(data: InquiryPayload): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', 'Segoe UI', sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background-color: #f8fafc; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { background: linear-gradient(135deg, #081526, #0e223d); padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0 0 6px; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 0; font-size: 12px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .badge { display: inline-block; background: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
    .content { padding: 32px 24px; }
    .section-title { font-size: 14px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; }
    .table-info { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table-info th { width: 32%; text-align: left; padding: 10px 12px; background: #f8fafc; color: #64748b; font-size: 12px; font-weight: 600; border-bottom: 1px solid #edf2f7; }
    .table-info td { padding: 10px 12px; color: #0f172a; font-size: 13px; font-weight: 500; border-bottom: 1px solid #edf2f7; }
    .message-box { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 16px; font-size: 13px; color: #0369a1; white-space: pre-wrap; line-height: 1.7; margin-bottom: 24px; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
    .btn { display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: 700; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">${data.inquiryType}</span>
      <h1>새로운 교육 상담 문의가 접수되었습니다</h1>
      <p>DRONEDAMOI DRONE SCHOOL 상담 알림</p>
    </div>
    
    <div class="content">
      <div class="section-title">1. 신청 기관 및 담당자 정보</div>
      <table class="table-info">
        <tr>
          <th>학교 / 기관명</th>
          <td><strong>${data.organization}</strong></td>
        </tr>
        <tr>
          <th>담당자명 / 직위</th>
          <td><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <th>연락처</th>
          <td><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none; font-weight: 700;">${data.phone}</a></td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
        </tr>
      </table>

      <div class="section-title">2. 교육 희망 세부 사항</div>
      <table class="table-info">
        <tr>
          <th>교육 대상</th>
          <td>${data.targetGroup}</td>
        </tr>
        <tr>
          <th>예상 인원</th>
          <td>${data.studentCount || '미기재'}</td>
        </tr>
        <tr>
          <th>희망 일정</th>
          <td>${data.preferredDate || '미기재'}</td>
        </tr>
        <tr>
          <th>희망 차시</th>
          <td>${data.sessionCount || '미기재'}</td>
        </tr>
        <tr>
          <th>교육 장소</th>
          <td>${data.location || '미기재'}</td>
        </tr>
      </table>

      <div class="section-title">3. 문의 내용</div>
      <div class="message-box">${data.message || '(상세 작성 내용 없음)'}</div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${data.email}?subject=${encodeURIComponent(`[DRONEDAMOI] ${data.organization} 드론교육 상담 안내`)}" class="btn">
          담당자에게 바로 이메일 회신하기
        </a>
      </div>
    </div>

    <div class="footer">
      본 메일은 DRONEDAMOI 홈페이지(https://dronedamoi.com/contact)에서 접수된 실시간 상담 문의 알림입니다.<br>
      수신처: ${TARGET_EMAIL}
    </div>
  </div>
</body>
</html>
`;
}

export async function sendInquiryNotification(data: InquiryPayload): Promise<{ success: boolean; provider: string; error?: string }> {
  const subject = `[DRONEDAMOI 상담접수] ${data.organization} - ${data.name} 님의 교육 문의 (${data.inquiryType})`;
  const html = generateHtmlEmail(data);

  // 1. Try Resend if API key is provided
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const res = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DRONEDAMOI <onboarding@resend.dev>',
        to: [TARGET_EMAIL, 'gustka0330@gmail.com'],
        replyTo: data.email,
        subject,
        html,
      });

      if (res.error) {
        console.warn('Resend error:', res.error);
      } else {
        return { success: true, provider: 'resend' };
      }
    } catch (err) {
      console.warn('Resend send failed:', err);
    }
  }

  // 2. Try SMTP (Gmail / Naver / Custom SMTP)
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || process.env.NAVER_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.NAVER_PASS;

  if (smtpUser && smtpPass) {
    try {
      const isNaver = smtpUser.includes('naver.com');
      const isGmail = smtpUser.includes('gmail.com');

      const transporter = nodemailer.createTransport(
        isNaver
          ? {
              host: 'smtp.naver.com',
              port: 465,
              secure: true,
              auth: { user: smtpUser, pass: smtpPass },
            }
          : isGmail
          ? {
              service: 'gmail',
              auth: { user: smtpUser, pass: smtpPass },
            }
          : {
              host: process.env.SMTP_HOST || 'smtp.gmail.com',
              port: Number(process.env.SMTP_PORT) || 587,
              secure: process.env.SMTP_SECURE === 'true',
              auth: { user: smtpUser, pass: smtpPass },
            }
      );

      await transporter.sendMail({
        from: `"DRONEDAMOI 문의알림" <${smtpUser}>`,
        to: TARGET_EMAIL,
        replyTo: data.email,
        subject,
        html,
      });

      return { success: true, provider: 'smtp' };
    } catch (err) {
      console.warn('SMTP send failed:', err);
    }
  }

  // 3. Fallback: Web3Forms API (Direct web notification without requiring server credentials)
  try {
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || '83a81660-a57a-4c08-823e-bc88a398b1e6';
    const formRes = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject,
        from_name: `DRONEDAMOI - ${data.organization}`,
        to_email: TARGET_EMAIL,
        ...data,
      }),
    });

    if (formRes.ok) {
      return { success: true, provider: 'web3forms' };
    }
  } catch (err) {
    console.warn('Web3Forms fallback failed:', err);
  }

  return { success: false, provider: 'none', error: 'No email service configured or delivery failed.' };
}
