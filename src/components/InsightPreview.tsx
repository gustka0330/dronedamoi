import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { SectionHeading } from './SectionHeading';
import { ArticleCard } from './ArticleCard';
import { MotionReveal } from './MotionReveal';

export function InsightPreview() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC] border-y border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DRONE INSIGHT"
          title="드론을 넘어 교육을 이야기합니다."
          subtitle="교실 속 수업 설계, 항공 과학 원리, 비행 안전과 미래 진로까지 현직 교사의 깊이 있는 인사이트를 나눕니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestArticles.map((article, idx) => (
            <MotionReveal key={article.slug} delay={idx * 0.1} direction="up">
              <ArticleCard article={article} />
            </MotionReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/insight"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-base shadow-lg transition-all group"
          >
            <span>인사이트 전체 칼럼 보기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
