'use client';

import React, { useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { articles } from '@/data/articles';
import { ArticleCategory } from '@/types';
import { ArticleCard } from '@/components/ArticleCard';
import { MotionReveal } from '@/components/MotionReveal';
import { CTASection } from '@/components/CTASection';

export default function InsightPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: ArticleCategory }[] = [
    { label: '전체 (ALL)', value: 'ALL' },
    { label: '학교 드론교육', value: 'DRONE CLASS' },
    { label: '드론 기초/원리', value: 'DRONE BASIC' },
    { label: '비행 안전/법규', value: 'DRONE SAFETY' },
    { label: '항공 미디어', value: 'DRONE MEDIA' },
    { label: '미래/진로', value: 'DRONE FUTURE' },
  ];

  const filteredArticles = articles.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Header */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
            DRONE EDUCATION INSIGHT
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            드론과<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              교육을 이야기합니다.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            11년차 현직 교사가 현장에서 직접 겪고 연구한 수업 설계, 항공 과학 원리,<br className="hidden sm:inline" />
            비행 안전 수칙과 학생 미래 진로에 관한 전문 칼럼을 나눕니다.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
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

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="칼럼 검색 (제목, 태그)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">
                검색 조건에 맞는 칼럼이 없습니다.
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                다른 카테고리나 검색어로 다시 시도해보세요.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article, idx) => (
                <MotionReveal key={article.slug} delay={idx * 0.08} direction="up">
                  <ArticleCard article={article} />
                </MotionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
