import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { programs } from '@/data/programs';
import { ProgramCard } from '@/components/ProgramCard';
import { MotionReveal } from '@/components/MotionReveal';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: '교육 프로그램 | 초등·중등 드론교육, 코딩, 촬영, 스포츠, 교원연수',
  description: '현직 교사가 직접 설계한 학생 중심 드론교육 프로그램. 드론 기초, 드론 코딩, 항공촬영 미디어, 드론축구 스포츠, 교과연계 PBL, 교원 직무연수 안내.',
};

export default function ProgramPage() {
  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Header */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
            DRONE EDUCATION CURRICULUM
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            학생의 배움과<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              도전을 설계합니다.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            단순히 띄우는 체험을 넘어, 항공 과학 원리 · 알고리즘 코딩 · 영상 스토리텔링 · 
            팀워크 스포츠 · 교과 융합 PBL까지 단계별로 체계화된 6가지 전문 프로그램을 만나보세요.
          </p>
        </div>
      </section>

      {/* 6 Programs Grid */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              6 CORE PROGRAMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mt-1">
              학교와 학생에게 꼭 맞는 프로그램을 선택하세요
            </h2>
            <p className="text-[#475467] text-sm sm:text-base mt-2">
              각 프로그램 카드를 클릭하면 상세 교육 목표, 차시별 커리큘럼, 기대효과 및 FAQ를 확인하실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, idx) => (
              <MotionReveal key={program.slug} delay={idx * 0.08} direction="up">
                <ProgramCard program={program} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why School Program Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#081526] to-[#0E223D] rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3 block">
                  FOR SCHOOL ADMINISTRATORS
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  학교 현장에 완벽하게 최적화된<br />
                  <span className="text-sky-300">맞춤형 지원 프로세스</span>
                </h3>
                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  초·중학교 정규 수업, 학교자율시간, 늘봄학교 및 영재교육원에 필요한 기체 지원, 
                  안전시설(세이프티 네트), 수업지도안 및 기안서 작성 지원까지 원스톱으로 제공합니다.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>2022 개정 교육과정 성취기준 연계 교수학습 지도안 및 평가 계획 제공</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>실습용 교육 드론 기체 15~30대 및 배터리 충전 허브 일체 완비</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>교실/체육관 100% 무사고 비행 안전 매뉴얼 및 안전요원 배치 기준 적용</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#132B4C] p-6 sm:p-8 rounded-2xl border border-sky-500/20 text-center">
                <ShieldCheck className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">
                  우리 학교 맞춤 교육 상담
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  학교의 학사 일정, 예산 범위, 학생 수에 맞춘 최적의 교육 설계를 제안해 드립니다.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>교육 프로그램 문의하기</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
