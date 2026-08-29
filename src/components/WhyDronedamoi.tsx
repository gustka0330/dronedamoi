import React from 'react';
import { School, BookOpen, Plane, Users, CheckCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { MotionReveal } from './MotionReveal';

export function WhyDronedamoi() {
  const cards = [
    {
      label: 'CARD 01',
      tag: 'SCHOOL',
      title: '학교를 압니다.',
      description: '현직 초등교사의 시선으로 학생, 공간, 교육과정, 수업시간과 안전을 함께 고려합니다.',
      points: ['초등 발달단계 고려', '교실/체육관 공간 최적화', '무사고 안전 관리'],
      icon: School,
      color: 'from-blue-500 to-sky-400',
      bgLight: 'bg-blue-50/70',
      borderColor: 'border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'CARD 02',
      tag: 'EDUCATION',
      title: '수업을 설계합니다.',
      description: '단순 체험에서 끝나는 것이 아니라 교육목표와 학생의 성장을 중심으로 프로그램을 설계합니다.',
      points: ['2022 개정 교육과정 연계', '학교자율시간 과목화', '차시별 학습 성취평가'],
      icon: BookOpen,
      color: 'from-sky-500 to-cyan-400',
      bgLight: 'bg-sky-50/70',
      borderColor: 'border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      label: 'CARD 03',
      tag: 'DRONE',
      title: '드론을 압니다.',
      description: '조종을 넘어 촬영, 코딩, 스포츠, 프로젝트와 진로교육까지 미래 기술로 확장합니다.',
      points: ['항공역학 기초 원리', '엔트리/파이썬 코딩', '시네마틱 촬영 & 스포츠'],
      icon: Plane,
      color: 'from-indigo-500 to-blue-400',
      bgLight: 'bg-indigo-50/70',
      borderColor: 'border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      label: 'CARD 04',
      tag: 'EXPERIENCE',
      title: '현장에서 검증합니다.',
      description: '실제 학생들과 수업하고, 미션을 수행하고, 대회에 도전하며 프로그램을 지속해서 개선합니다.',
      points: ['세계대회 우승 코치', '전국대회 다수 입상 지도', '교원 연수 99% 만족도'],
      icon: Users,
      color: 'from-cyan-500 to-emerald-400',
      bgLight: 'bg-emerald-50/70',
      borderColor: 'border-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC] border-y border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY DRONEDAMOI"
          title="왜 DRONEDAMOI인가요?"
          subtitle="학교 교육을 깊이 이해하는 현직 교사가 드론을 교육의 도구로 확장합니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <MotionReveal key={card.tag} delay={idx * 0.1} direction="up">
                <div className={`h-full bg-white rounded-2xl p-6 sm:p-7 border ${card.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}>
                  <div>
                    {/* Header icon & tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${card.bgLight} flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
                        {card.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#101828] mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#475467] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {card.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
