import React from 'react';
import type { Metadata } from 'next';
import { Trophy, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { achievements, coachPhilosophy } from '@/data/achievements';
import { MotionReveal } from '@/components/MotionReveal';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: '도전의 기록 | 2023 FIDA 세계대회 우승팀 코치 및 전국대회 지도 실적',
  description: '11년차 현직 초등교사 윤현삼의 학생 지도 이력. 2023 1st FIDA World Championship Class 20 세계대회 우승팀 지도, 교육감배 우승, 국토교통부장관배 전국대회 학생팀 지도 기록.',
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Hero */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>ACHIEVEMENTS & HONORS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            학생과 함께<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-white">
              도전한 기록
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            교실에서 시작된 작은 꿈이 전국대회를 거쳐 세계 정상의 자리에 오르기까지,<br className="hidden sm:inline" />
            학생들의 눈물과 땀방울, 성장의 순간들을 기록합니다.
          </p>
        </div>
      </section>

      {/* World Champion Featured Showcase */}
      <section className="py-16 bg-[#0E223D] border-b border-sky-900/40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#081526] to-[#132B4C] rounded-3xl p-8 sm:p-12 lg:p-14 border-2 border-amber-400/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-black tracking-widest uppercase mb-3">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>2023 WORLD CHAMPIONSHIP PINNACLE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  1st FIDA World Championship<br />
                  <span className="text-amber-400">Class 20 세계대회 우승팀 배출</span>
                </h2>

                <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-sm font-extrabold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>우승팀 Coach 윤현삼 · 학생 선수단 지도</span>
                </div>

                <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  전 세계 유소년 드론 스포츠 최강자들이 겨룬 제1회 FIDA World Championship에서
                  지도 학생팀이 침착한 전술 운용과 단단한 팀워크로 당당히 세계 1위 챔피언에 올랐습니다.
                </p>

                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;선생님, 우리가 진짜 세계 1등 한 거예요?&rdquo; — 결승 경기 직후 울먹이던 학생의 말은 
                  DRONEDAMOI의 가장 벅찬 자부심이자 현장 지도의 가장 큰 원동력입니다.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-amber-400/30 shadow-xl bg-slate-900">
                  <ImageWithFallback
                    src="/images/world-championship.jpg"
                    alt="2023 FIDA World Championship 우승팀 지도"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackCategory="WORLD CHAMPION"
                    fallbackTitle="2023 FIDA World Championship 우승팀 코치"
                    fallbackIcon="award"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md text-center text-xs text-white">
                    <p className="font-extrabold text-amber-300">2023 1st FIDA World Championship</p>
                    <p className="text-[11px] text-slate-300">Class 20 우승팀 코치 윤현삼</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline Cards */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              CHRONOLOGICAL TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mt-1">
              연도별 대회 지도 및 연구 성과
            </h2>
          </div>

          <div className="space-y-8">
            {achievements.map((item, idx) => {
              const isWorld = item.isWorldChampion;

              return (
                <MotionReveal key={item.id} delay={idx * 0.08} direction="up">
                  <div
                    className={`rounded-3xl p-7 sm:p-9 transition-all ${
                      isWorld
                        ? 'bg-gradient-to-br from-[#081526] to-[#0E223D] text-white border-2 border-amber-400/50 shadow-xl'
                        : 'bg-white text-[#101828] border border-[#E4E7EC] shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-black tracking-wider ${
                            isWorld
                              ? 'bg-amber-400 text-slate-950'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          {item.year}
                        </span>
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            isWorld
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {item.location}
                        </span>
                      </div>

                      <div
                        className={`text-xs font-extrabold px-3 py-1 rounded-lg inline-flex items-center gap-1.5 self-start sm:self-auto ${
                          isWorld
                            ? 'bg-amber-400/20 text-amber-300'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.role}</span>
                      </div>
                    </div>

                    <h3
                      className={`text-xl sm:text-2xl font-black ${
                        isWorld ? 'text-white' : 'text-[#101828]'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p
                        className={`text-sm font-bold mt-1 ${
                          isWorld ? 'text-sky-300' : 'text-blue-600'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    )}

                    <p
                      className={`mt-4 text-sm sm:text-base leading-relaxed ${
                        isWorld ? 'text-slate-300' : 'text-[#475467]'
                      }`}
                    >
                      {item.description}
                    </p>

                    <div
                      className={`mt-6 p-4 rounded-2xl text-xs sm:text-sm leading-relaxed italic border ${
                        isWorld
                          ? 'bg-[#132B4C]/80 border-sky-500/20 text-slate-300'
                          : 'bg-slate-50 border-slate-200/80 text-slate-600'
                      }`}
                    >
                      &ldquo;{item.studentStory}&rdquo;
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coach Philosophy Banner */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">
            COACH PHILOSOPHY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-6">
            {coachPhilosophy.title}
          </h3>
          <p className="text-base sm:text-lg text-[#475467] leading-relaxed max-w-3xl mx-auto">
            {coachPhilosophy.quote}
          </p>
          <p className="mt-4 text-sm font-bold text-slate-900">
            — {coachPhilosophy.author}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
