import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#081526] text-white overflow-hidden">
      {/* Background patterns and glowing orbs */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/25 to-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionReveal direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>START WITH DRONEDAMOI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white text-balance">
            우리 학교에도<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              {' '}드론교육을 시작해볼까요?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
            학생 대상 정규/방과후 드론교육, 교원 직무연수, 교육기관 출강,<br className="hidden sm:inline" />
            학교자율시간 과목화 및 융합 프로젝트를 학교 상황에 맞추어 함께 설계합니다.
          </p>

          {/* Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-sky-200">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              100% 학교 현장 맞춤 설계
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              무사고 안전 비행 프로토콜
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              2023 세계대회 우승 코치 직강
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>교육·연수 문의하기</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base backdrop-blur-sm transition-all hover:border-white/40 active:scale-[0.98]"
            >
              <span>프로그램 살펴보기</span>
              <Compass className="w-5 h-5 text-sky-400" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
