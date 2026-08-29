import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Award, CheckCircle2 } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { SectionHeading } from './SectionHeading';
import { MotionReveal } from './MotionReveal';

interface AchievementTimelineProps {
  showCTA?: boolean;
}

export function AchievementTimeline({ showCTA = true }: AchievementTimelineProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC] border-y border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="학생과 함께 만든 도전의 기록"
          subtitle="교실에서 시작된 작은 날갯짓이 지역과 전국을 넘어 세계무대 챔피언으로 이어졌습니다."
        />

        {/* Timeline List */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-slate-300 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {achievements.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isWorld = item.isWorldChampion;

              return (
                <MotionReveal
                  key={item.id}
                  direction={isEven ? 'right' : 'left'}
                  delay={idx * 0.1}
                >
                  <div
                    className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Center Year Badge Indicator */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-600 shadow-md items-center justify-center z-10">
                      {isWorld ? (
                        <Trophy className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Award className="w-5 h-5 text-blue-600" />
                      )}
                    </div>

                    {/* Card Content (Occupies half width on desktop) */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)]">
                      <div
                        className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                          isWorld
                            ? 'bg-gradient-to-br from-[#081526] to-[#0E223D] text-white border-2 border-amber-400/50 shadow-xl shadow-amber-950/20'
                            : 'bg-white text-[#101828] border border-[#E4E7EC] shadow-sm hover:shadow-md'
                        }`}
                      >
                        {/* Top Year & Category Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-black tracking-wider ${
                                isWorld
                                  ? 'bg-amber-400 text-slate-950 font-black'
                                  : 'bg-blue-600 text-white'
                              }`}
                            >
                              {item.year}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                                  isWorld
                                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h3
                          className={`text-xl font-extrabold leading-snug ${
                            isWorld ? 'text-white' : 'text-[#101828]'
                          }`}
                        >
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p
                            className={`text-xs font-bold mt-1 ${
                              isWorld ? 'text-sky-300' : 'text-blue-600'
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        )}

                        {/* Verified Role */}
                        <div
                          className={`mt-3 py-1.5 px-3 rounded-lg text-xs font-bold inline-flex items-center gap-2 ${
                            isWorld
                              ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                              : 'bg-blue-50 text-blue-700 border border-blue-100'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.role}</span>
                        </div>

                        {/* Description */}
                        <p
                          className={`mt-3 text-sm leading-relaxed ${
                            isWorld ? 'text-slate-300' : 'text-[#475467]'
                          }`}
                        >
                          {item.description}
                        </p>

                        {/* Student Story Quote */}
                        <div
                          className={`mt-4 pt-3 border-t text-xs leading-relaxed italic ${
                            isWorld
                              ? 'border-slate-700 text-slate-400'
                              : 'border-slate-100 text-slate-500'
                          }`}
                        >
                          &ldquo;{item.studentStory}&rdquo;
                        </div>
                      </div>
                    </div>

                    {/* Spacer for other half on desktop */}
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>

        {showCTA && (
          <div className="mt-14 text-center">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 transition-all group cursor-pointer"
            >
              <span>전체 활동 이력 자세히 보기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
