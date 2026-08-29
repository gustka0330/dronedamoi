import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { YoutubeIcon } from '@/components/Icons';
import { videoItems, youtubeChannelUrl } from '@/data/videos';
import { SectionHeading } from './SectionHeading';
import { VideoCard } from './VideoCard';
import { MotionReveal } from './MotionReveal';

export function DroneClassTv() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC] border-y border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DRONE CLASS TV"
          title="보고, 배우고, 함께 날다."
          subtitle="드론 조종 기초부터 세계대회 경기 실황, 항공촬영과 코딩 수업까지 유튜브 영상으로 확인하세요."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videoItems.map((video, idx) => (
            <MotionReveal key={video.id} delay={idx * 0.08} direction="up">
              <VideoCard video={video} />
            </MotionReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 transition-all group cursor-pointer"
          >
            <YoutubeIcon className="w-5 h-5 text-white" />
            <span>YouTube에서 전체 영상 더 보기</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
