'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';
import { PortfolioCategory } from '@/types';
import { SectionHeading } from './SectionHeading';
import { PortfolioCard } from './PortfolioCard';
import { MotionReveal } from './MotionReveal';

interface PortfolioGridProps {
  showFilter?: boolean;
  showAllCTA?: boolean;
  limit?: number;
}

export function PortfolioGrid({
  showFilter = true,
  showAllCTA = true,
  limit,
}: PortfolioGridProps) {
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

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FIELD STORIES"
          title="수업과 프로젝트로 증명하는 드론교육"
          subtitle="실제 학교 교실과 체육관, 전국대회와 교원연수 현장에서 이루어진 생생한 교육 이야기입니다."
        />

        {/* Category Filters */}
        {showFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayItems.map((item, idx) => (
            <MotionReveal key={item.id} delay={idx * 0.08} direction="up">
              <PortfolioCard item={item} />
            </MotionReveal>
          ))}
        </div>

        {showAllCTA && (
          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-base shadow-lg transition-all group cursor-pointer"
            >
              <span>포트폴리오 전체 보기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
