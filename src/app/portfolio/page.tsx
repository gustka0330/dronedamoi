'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Calendar,
  Building,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
} from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';
import { PortfolioCategory } from '@/types';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { MotionReveal } from '@/components/MotionReveal';
import { CTASection } from '@/components/CTASection';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('ALL');

  const categories: { label: string; value: PortfolioCategory }[] = [
    { label: '전체 (ALL)', value: 'ALL' },
    { label: '교육/수업 (Education)', value: 'EDUCATION' },
    { label: '드론코딩 (Coding)', value: 'CODING' },
    { label: '드론스포츠 (Sports)', value: 'SPORTS' },
    { label: '항공미디어 (Media)', value: 'MEDIA' },
    { label: '융합 프로젝트 (Project)', value: 'PROJECT' },
    { label: '교원연수 (Training)', value: 'TRAINING' },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Header */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
            FIELD STORIES & CASE STUDIES
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            현장에서 만들어진<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              드론교육 이야기
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            교실 정규 수업부터 세계대회 우승 프로젝트, 교원 직무연수까지<br className="hidden sm:inline" />
            실제 교육 현장에서 검증된 구체적인 문제 해결 사례와 성과를 확인하세요.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Detailed List */}
      <section className="py-16 lg:py-24 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredItems.map((item, idx) => (
              <MotionReveal key={item.id} delay={idx * 0.05} direction="up">
                <div
                  id={item.slug}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left Visual Banner */}
                    <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[280px] bg-slate-900">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        fallbackCategory={item.categoryLabel}
                        fallbackTitle={item.title}
                      />
                      <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                        {item.categoryLabel}
                      </div>
                    </div>

                    {/* Right Case Details */}
                    <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1.5 font-bold text-blue-600">
                            <Building className="w-3.5 h-3.5" />
                            <span>{item.client}</span>
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1.5 font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm font-bold text-sky-600 mb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-[#475467] leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Challenge & Solution Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase mb-1">
                              <Target className="w-4 h-4 text-amber-500" />
                              <span>도전 과제 (Challenge)</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.challenge}
                            </p>
                          </div>

                          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase mb-1">
                              <Lightbulb className="w-4 h-4 text-blue-600" />
                              <span>해결 방안 (Solution)</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                        </div>

                        {/* Results list */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span>주요 성과 및 변화 (Outcomes)</span>
                          </h4>
                          <div className="space-y-1.5">
                            {item.results.map((res, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="font-medium">{res}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Tags */}
                      <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                        >
                          <span>유사 프로젝트 문의</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
