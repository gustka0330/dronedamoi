import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';
import { siteConfig } from '@/data/siteConfig';
import { SectionHeading } from './SectionHeading';
import { MotionReveal } from './MotionReveal';
import { ImageWithFallback } from './ImageWithFallback';

export function InstagramGrid() {
  const posts = [
    { id: 'ig-1', image: '/images/instagram-01.jpg', title: '세계대회 우승 트로피와 함께' },
    { id: 'ig-2', image: '/images/instagram-02.jpg', title: '교실 드론코딩 자율비행 실습' },
    { id: 'ig-3', image: '/images/instagram-03.jpg', title: '체육관 드론축구 맹훈련' },
    { id: 'ig-4', image: '/images/instagram-04.jpg', title: '교정 시네마틱 항공촬영' },
    { id: 'ig-5', image: '/images/instagram-05.jpg', title: '선생님들과 함께한 직무연수' },
    { id: 'ig-6', image: '/images/instagram-06.jpg', title: '학교자율시간 드론 챌린지' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FOLLOW THE FIELD"
          title="드론다모이의 오늘을 만나보세요."
          subtitle="실시간 교육 현장, 학생들의 생생한 비행과 대회 도전 일상을 인스타그램에서 나눕니다."
        />

        {/* 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <MotionReveal key={post.id} delay={idx * 0.05} direction="up">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                aria-label={`${post.title} - 인스타그램에서 보기 (새 창)`}
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fallbackCategory="INSTAGRAM"
                  fallbackTitle={post.title}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white text-pink-600 flex items-center justify-center mb-2 shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-tight line-clamp-2 px-1">
                    {post.title}
                  </span>
                  <span className="text-[9px] text-pink-200 font-semibold mt-1">
                    View on Instagram
                  </span>
                </div>
              </a>
            </MotionReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] group"
          >
            <InstagramIcon className="w-4.5 h-4.5" />
            <span>@dronedamoi_droneschool 인스타그램 팔로우</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
