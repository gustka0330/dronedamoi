import React from 'react';
import Link from 'next/link';
import { Trophy, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { ImageWithFallback } from './ImageWithFallback';

export function WorldChampionFeature() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#081526] text-white overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Typography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <MotionReveal direction="right">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>FROM CLASSROOM TO WORLD STAGE</span>
              </div>

              {/* Big Section Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2]">
                교실에서 시작한 도전,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-white">
                  세계무대에 닿다.
                </span>
              </h2>

              {/* Giant Typography Accent */}
              <div className="my-6 py-2">
                <span className="block text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-sky-400/20 leading-none select-none">
                  WORLD
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white/90 leading-none select-none">
                  CHAMPION
                </span>
                <span className="block text-2xl sm:text-4xl font-extrabold tracking-tight text-amber-400 leading-tight">
                  2023 FIDA CLASS 20
                </span>
              </div>

              {/* Verified Coach Narrative */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                학생들과 함께 시작한 드론축구 활동은 지역과 전국대회를 넘어 세계무대까지 이어졌습니다.
              </p>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                2023년 <span className="text-white font-bold">1st FIDA World Championship Class 20</span>에서
                지도팀이 당당히 우승을 차지하며, 평범했던 교실의 아이들이 세계 정상에 오르는 값진 경험을 일구어냈습니다.
              </p>

              {/* Official Credential Box */}
              <div className="mt-8 p-4.5 rounded-2xl bg-[#0E223D] border border-sky-500/30 flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <Star className="w-6 h-6 fill-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                      2023 1st FIDA World Championship Class 20
                    </p>
                    <p className="text-base font-extrabold text-white">
                      우승팀 COACH 윤현삼 · 학생 지도
                    </p>
                  </div>
                </div>
                <div className="sm:ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>공인 지도 기록</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Link
                  href="/achievements"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>도전의 기록 보기</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: World Championship Visual */}
          <div className="lg:col-span-5 relative">
            <MotionReveal direction="left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative rounded-2xl overflow-hidden border border-sky-400/40 shadow-2xl aspect-[4/3] bg-[#0E223D]">
                  <ImageWithFallback
                    src="/images/world-championship.jpg"
                    alt="2023 1st FIDA World Championship Class 20 우승팀 지도"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackCategory="WORLD CHAMPION 2023"
                    fallbackTitle="2023 1st FIDA World Championship 우승팀 코치"
                    fallbackIcon="award"
                  />
                  {/* Subtle caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081526] via-[#081526]/80 to-transparent p-5">
                    <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      HISTORIC MOMENT
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      학생들과 함께 세계무대 정상에 선 순간
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
