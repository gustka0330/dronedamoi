import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: '교육·연수 문의 | DRONEDAMOI DRONE SCHOOL · 윤현삼',
  description: '초·중학교 드론수업, 드론코딩, 드론축구, 학교자율시간, 교원 직무연수, 교육기관 출강 및 프로젝트 협업 문의 접수.',
};

export default function ContactPage() {
  const contactFaqs = [
    {
      q: '수업에 필요한 드론 기체와 교구가 학교에 없어도 출강이 가능한가요?',
      a: '네, 교육에 필요한 안전 가드 장착 드론 15~30대, 배터리 급속 충전 시스템, 세이프티 게이트 및 정비 부품 일체를 모두 지참하여 방문합니다.',
    },
    {
      q: '전국 어디든 출강이 가능한가요?',
      a: '네, 경상남도 및 수도권, 충청, 전라, 강원, 제주 등 전국 시·도 교육청 및 초·중·고등학교, 영재교육원 일정 협의 후 전국 출강이 가능합니다.',
    },
    {
      q: '학교 행정 처리에 필요한 기안용 강의계획서 및 서류 지원이 되나요?',
      a: '현직 초등교사가 학교 행정 프로세스(K-에듀파인 기안, 성취기준 연계 계획서, 안전 서약서, 강사 이력서 등)를 원스톱으로 지원해 드립니다.',
    },
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Hero */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/25 to-sky-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
            LET&apos;S FLY TOGETHER
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            교육과 연수,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              프로젝트를 함께 만들어보세요.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            학생 대상 드론교육, 교사 직무연수, 교육기관 출강, 영상 프로젝트 및 교육과정 컨설팅 문의를 받고 있습니다.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 lg:py-24 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  CONSULTATION GUIDE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-4">
                  맞춤형 교육 상담 안내
                </h2>
                <p className="text-sm text-[#475467] leading-relaxed">
                  학교의 상황과 학생들의 특성에 꼭 맞춘 최적의 교육 모델을 설계해 드립니다. 
                  우측 폼을 작성해 주시면 꼼꼼히 확인 후 신속하게 연락드리겠습니다.
                </p>
              </div>

              {/* Direct Info Blocks */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">이메일 문의</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">{siteConfig.contact.email}</p>
                    <p className="text-xs text-slate-500 mt-0.5">상시 접수 및 서류 송부</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">출강 가능 지역</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">경상남도 / 전국 초·중·고 및 기관</p>
                    <p className="text-xs text-slate-500 mt-0.5">일정 협의 후 전국 어디든 방문 출강</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">신뢰와 안전</p>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">현직 초등교사 직접 지도</p>
                    <p className="text-xs text-slate-500 mt-0.5">2023 FIDA 세계대회 우승 코치 직강</p>
                  </div>
                </div>
              </div>

              {/* Mini FAQ in sidebar */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  <span>자주 묻는 질문 (FAQ)</span>
                </h3>
                {contactFaqs.map((faq, idx) => (
                  <div key={idx} className="text-xs space-y-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <p className="font-bold text-slate-800">Q. {faq.q}</p>
                    <p className="text-slate-600 leading-relaxed">A. {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
