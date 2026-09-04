import React from 'react';
import type { Metadata } from 'next';
import { Award, BookOpen, HeartHandshake, Sparkles, Trophy, Compass } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'ABOUT 윤현삼 | 현직 초등교사이자 학생드론교육 전문가',
  description: '현직 초등교사 윤현삼의 드론 교육 철학과 여정. 교실에서 시작해 2023 FIDA 세계대회 우승팀 코치로 학생들과 함께 성장해 온 이야기를 전합니다.',
};

export default function AboutPage() {
  const storyChapters = [
    {
      chapter: 'CHAPTER 01',
      title: '교실에서 시작했습니다.',
      description: '학생과 학교를 위한 새로운 교육 방법을 깊이 고민하며 드론을 교육의 도구로 활용하기 시작했습니다. 교실 안팎의 공간을 새로운 시선으로 바라보고, 아이들의 잠재력을 깨우는 첫 발걸음이었습니다.',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      chapter: 'CHAPTER 02',
      title: '드론이 수업이 되었습니다.',
      description: '드론의 역사와 구조, 4축 비행원리, 기본 조종, 안전 규칙, 항공촬영, 블록/텍스트 코딩, 드론스포츠를 초·중등 학생들의 발달 눈높이에 딱 맞춘 체계적인 교육과정으로 재구성했습니다.',
      icon: Compass,
      color: 'bg-sky-50 text-sky-600 border-sky-100',
    },
    {
      chapter: 'CHAPTER 03',
      title: '교실을 넘어 대회로 나갔습니다.',
      description: '학생들과 방과후 유소년 드론축구팀을 결성하고, 훈련하며 구미시장배·국토교통부장관배 전국대회를 거쳐 2023 1st FIDA World Championship Class 20 세계대회 우승팀을 지도하는 쾌거를 이루었습니다.',
      icon: Trophy,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      chapter: 'CHAPTER 04',
      title: '경험을 나누고 있습니다.',
      description: '학생 맞춤형 수업뿐 아니라 시·도 교육청 교원 직무연수, 미래교육 콘텐츠 제작, 학교자율시간 과목 설계, 지역사회 연계 융합 프로젝트 컨설팅으로 교육적 경험의 지평을 넓혀가고 있습니다.',
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const keywords = [
    '초등 교육과정 전문가',
    '학생드론교육',
    '드론코딩',
    '드론촬영',
    '드론축구',
    '프로젝트교육 (PBL)',
    '교원 직무연수',
    '2022 개정 교육과정',
    '학교자율시간',
    '미래 모빌리티 교육',
  ];

  const careerHighlights = [
    { period: '2014 — 현재', text: '초등학교 정규 교사 (현직 초등교사)' },
    { period: '2022 — 현재', text: 'DRONEDAMOI 드론교육연구소 대표 및 연구책임' },
    { period: '2023.11', text: '2023 1st FIDA World Championship Class 20 우승팀 Coach (학생 지도)' },
    { period: '2023.10', text: '교육감배 학교스포츠클럽 드론축구대회 학생팀 지도 우승' },
    { period: '2022 — 2024', text: '국토교통부장관배/기 유소년 전국드론축구대회 학생 선수단 지도' },
    { period: '2022 — 현재', text: '교육청 및 교육지원청 초·중등 교원 드론 직무연수 전문 강사' },
  ];

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Page Header */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
              ABOUT YOON HYUN SAM
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              학생과 함께<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                날아온 시간
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed text-balance">
              현직 초등학교 교사의 시선으로, 드론을 통해 아이들의 무한한 가능성을 교실에서 세계무대로 띄워 올립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Intro & Profile Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Photo & Summary Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl aspect-[4/5] bg-slate-900 group">
                  <ImageWithFallback
                    src="/images/about-classroom.jpg"
                    alt="학생드론교육 전문가 윤현삼 - 교실 드론 수업 현장"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[20%_20%] group-hover:scale-105 transition-transform duration-500"
                    fallbackCategory="YOON HYUN SAM"
                    fallbackTitle="현직 초등교사 · 드론교육 전문가"
                    fallbackIcon="award"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#081526] via-[#081526]/80 to-transparent text-white">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest">
                      Profile
                    </span>
                    <h3 className="text-2xl font-black text-white mt-0.5">
                      윤현삼 (Yoon Hyun Sam)
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mt-1">
                      초등학교 교사 · 학생드론교육 전문가
                    </p>
                  </div>
                </div>

                {/* Keyword Chips */}
                <div className="bg-[#F5F8FC] rounded-2xl p-6 border border-[#E4E7EC]">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Core Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story & Letters */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Teacher&apos;s Message
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#101828] mt-2 mb-6 leading-tight">
                  &ldquo;드론을 처음 만난 이유도<br />
                  학생과 학교였습니다.&rdquo;
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#475467] leading-relaxed">
                  <p>
                    안녕하세요. 초등학교 교사이자 학생드론교육 전문가 윤현삼입니다.
                  </p>
                  <p>
                    학교를 더 새롭게 보여주고, 학생들에게 이전에는 없던 생생한 경험을 주고 싶다는 생각에서 시작한 드론은
                    어느덧 교실의 정규 수업이 되었고, 창의적인 융합 프로젝트가 되었으며, 
                    마침내 학생들이 세계무대에 당당히 도전하는 든든한 날개가 되었습니다.
                  </p>
                  <p>
                    드론을 능숙하게 날리는 기술보다 훨씬 더 소중한 것은, 
                    비행 속에서 학생들이 겪는 도전과 실패, 그리고 친구와 함께 문제를 해결해 나가는 배움의 과정입니다.
                  </p>
                </div>
              </div>

              {/* 4 Story Chapters */}
              <div>
                <h3 className="text-xl font-extrabold text-[#101828] mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span>스토리 챕터 (Story Chapters)</span>
                </h3>

                <div className="space-y-5">
                  {storyChapters.map((chapter) => {
                    const Icon = chapter.icon;
                    return (
                      <div
                        key={chapter.chapter}
                        className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className={`w-8 h-8 rounded-lg ${chapter.color} border flex items-center justify-center`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-black tracking-widest text-slate-400">
                            {chapter.chapter}
                          </span>
                        </div>
                        <h4 className="text-lg font-extrabold text-[#101828] mb-2">
                          {chapter.title}
                        </h4>
                        <p className="text-sm text-[#475467] leading-relaxed">
                          {chapter.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Career Highlights Timeline */}
              <div>
                <h3 className="text-xl font-extrabold text-[#101828] mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>주요 경력 및 지도 이력</span>
                </h3>

                <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#E4E7EC] space-y-4">
                  {careerHighlights.map((h, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                      <span className="text-xs font-extrabold text-blue-600 sm:w-28 shrink-0">
                        {h.period}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#081526] via-[#0E223D] to-[#132B4C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-6">
            EDUCATIONAL PHILOSOPHY
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-8">
            &ldquo;드론은 목적이 아니라<br />
            배움을 위한 도구입니다.&rdquo;
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p>
              학생이 드론을 완벽하게 조종하는 것만이 드론교육의 최종 목표라고 생각하지 않습니다.
            </p>
            <p className="text-sky-200 font-semibold">
              도전하고, 실패하고, 다시 시도하고, 친구와 협력하며<br className="hidden sm:inline" />
              자신이 만든 결과를 세상에 당당히 보여주는 경험.
            </p>
            <p className="text-white font-bold text-lg sm:text-xl pt-2">
              그 과정 자체가 바로 진짜 교육입니다.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
            <span>DRONEDAMOI DRONE SCHOOL</span>
            <span className="hidden sm:inline">·</span>
            <span>우승팀 코치 · 현직 초등학교 교사 윤현삼</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
