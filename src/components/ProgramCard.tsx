import React from 'react';
import Link from 'next/link';
import { ArrowRight, Plane, Code, Video, Trophy, Compass, GraduationCap } from 'lucide-react';
import { Program } from '@/types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const getIcon = () => {
    switch (program.slug) {
      case 'basic':
        return <Plane className="w-5 h-5" />;
      case 'coding':
        return <Code className="w-5 h-5" />;
      case 'media':
        return <Video className="w-5 h-5" />;
      case 'sports':
        return <Trophy className="w-5 h-5" />;
      case 'project':
        return <Compass className="w-5 h-5" />;
      case 'teacher-training':
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <Link
      href={`/program/${program.slug}`}
      className="group block h-full bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Image Banner with Fallback */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <ImageWithFallback
            src={program.image}
            alt={`${program.englishTitle} - ${program.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackCategory={program.englishTitle}
            fallbackTitle={program.title}
          />
          {/* Top English Title Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
            {program.englishTitle}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Main Title & Subtitle */}
          <div className="flex items-start gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {getIcon()}
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#101828] group-hover:text-blue-600 transition-colors leading-tight">
                {program.title}
              </h3>
              <p className="text-xs font-bold text-sky-600 mt-0.5">
                {program.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm text-[#475467] leading-relaxed line-clamp-3">
            {program.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {program.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer / Link Action */}
      <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700 bg-slate-50/50 group-hover:bg-blue-50/40 transition-colors">
        <span>프로그램 상세 보기</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
