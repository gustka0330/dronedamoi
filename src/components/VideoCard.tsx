import React from 'react';
import { Play, ExternalLink, Clock } from 'lucide-react';
import { VideoItem } from '@/types';
import { ImageWithFallback } from './ImageWithFallback';

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between"
      aria-label={`${video.title} 유튜브 영상 시청 (새 창)`}
    >
      <div>
        {/* Thumbnail area with play button hover */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <ImageWithFallback
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackCategory={video.category}
            fallbackTitle={video.title}
            fallbackIcon="video"
          />

          {/* Dark Overlay on hover */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-13 h-13 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-bold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase">
            {video.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
            {video.subCategory}
          </span>
          <h3 className="text-base font-extrabold text-[#101828] group-hover:text-red-600 transition-colors line-clamp-2 mt-1 mb-2 leading-snug">
            {video.title}
          </h3>
          <p className="text-xs text-[#475467] leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-red-600 transition-colors">
        <span>YouTube에서 시청</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </div>
    </a>
  );
}
