import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { ImageWithFallback } from './ImageWithFallback';

export function AboutPreview() {
  const highlights = [
    '현직 초등학교 교사의 교육과정 전문성',
    '2023 FIDA World Championship 우승팀 코치 (학생 지도)',
    '학교 안전 수칙 및 100% 무사고 비행 수업 매뉴얼 보유',
    '조종 · 코딩 · 촬영 · 스포츠 · PBL 융합 교육과정 설계',
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image / Profile Visual */}
          <div className="lg:col-span-5 relative">
            <MotionReveal direction="right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative frames */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-blue-100 to-sky-100 -z-10" />
                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 rounded-3xl bg-blue-600/10 -z-10" />

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl aspect-[4/5] bg-slate-900">
                  <ImageWithFallback
                    src="/images/profile-main.jpg"
                    alt="학생드론교육 전문가 윤현삼"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackCategory="YOON HYUN SAM"
                    fallbackTitle="현직 초등교사 · 드론교육 전문가"
                    fallbackIcon="award"
                  />
                  {/* Overlay card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-dark-card text-white border border-sky-400/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-sky-400 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm text-white">윤현삼 (Yoon Hyun Sam)</p>
                        <p className="text-xs text-sky-300">현직 초등교사 · 드론교육연구 책임</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Text & Credibility */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <MotionReveal direction="left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                ABOUT YOON HYUN SAM
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101828] tracking-tight leading-[1.3]">
                학교를 가장 잘 아는<br className="hidden sm:inline" />
                <span className="text-blue-600">학생드론교육 전문가</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#475467] leading-relaxed">
                드론을 잘 날리는 것만으로 좋은 드론교육이 만들어지지는 않습니다.
              </p>

              <p className="mt-3 text-base sm:text-lg text-[#475467] leading-relaxed">
                학생의 발달 단계, 교육과정, 교실과 체육관이라는 학교 공간, 안전, 수업시간, 
                학생 간 수준 차이까지 깊이 이해해야 학교에 꼭 맞는 드론교육을 설계할 수 있습니다.
              </p>

              <p className="mt-3 text-base sm:text-lg text-[#475467] leading-relaxed">
                윤현삼은 현직 초등교사로서 학교 현장에서 학생들과 직접 호흡하고, 
                대회에 도전하며 학생드론교육의 가능성을 확장해 왔습니다.
              </p>

              {/* Bullet Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all group cursor-pointer"
                >
                  <span>윤현삼 소개 보기</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
