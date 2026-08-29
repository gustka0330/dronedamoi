import React from 'react';
import { Newspaper, ExternalLink, Calendar } from 'lucide-react';
import { PressItem } from '@/types';

interface PressCardProps {
  item: PressItem;
}

export function PressCard({ item }: PressCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4E7EC] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Organization Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Newspaper className="w-3.5 h-3.5 text-blue-600" />
            <span>{item.organization}</span>
          </span>
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.date}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-[#101828] group-hover:text-blue-600 transition-colors leading-snug mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#475467] leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Footer Badge/Link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-slate-600">
          보도 및 소개 자료
        </span>
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold inline-flex items-center gap-1 hover:underline"
          >
            <span>기사 원문</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-400">보도 인용 완료</span>
        )}
      </div>
    </div>
  );
}
