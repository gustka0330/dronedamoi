import React from 'react';
import { pressItems } from '@/data/press';
import { SectionHeading } from './SectionHeading';
import { PressCard } from './PressCard';
import { MotionReveal } from './MotionReveal';

export function PressSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRESS & MEDIA"
          title="외부에서도 확인할 수 있는 드론교육 활동"
          subtitle="공공 교육기관 및 언론 보도를 통해 검증된 학생 지도 성과와 교육 혁신 사례입니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pressItems.map((item, idx) => (
            <MotionReveal key={item.id} delay={idx * 0.1} direction="up">
              <PressCard item={item} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
