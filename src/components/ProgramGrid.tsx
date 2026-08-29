import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/programs';
import { SectionHeading } from './SectionHeading';
import { ProgramCard } from './ProgramCard';
import { MotionReveal } from './MotionReveal';

interface ProgramGridProps {
  showAllCTA?: boolean;
}

export function ProgramGrid({ showAllCTA = true }: ProgramGridProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DRONE EDUCATION"
          title="날리는 경험을 넘어 배움이 되는 드론교육"
          subtitle="기초 비행부터 코딩, 항공촬영, 스포츠, PBL 프로젝트 및 교원 연수까지 체계적인 맞춤형 교육을 제공합니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <MotionReveal key={program.slug} delay={idx * 0.08} direction="up">
              <ProgramCard program={program} />
            </MotionReveal>
          ))}
        </div>

        {showAllCTA && (
          <div className="mt-14 text-center">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-base shadow-lg transition-all group"
            >
              <span>전체 프로그램 세부 안내 보기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
