import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { PortfolioItem } from '@/types';
import { ImageWithFallback } from './ImageWithFallback';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Top Image with zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackCategory={item.categoryLabel}
            fallbackTitle={item.title}
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
            {item.categoryLabel}
          </div>
          {item.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black tracking-wider">
              FEATURED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            {item.client}
          </span>
          <h3 className="text-xl font-extrabold text-[#101828] group-hover:text-blue-600 transition-colors mt-1 mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="text-xs font-semibold text-slate-500 mb-3">
            {item.subtitle}
          </p>
          <p className="text-sm text-[#475467] leading-relaxed line-clamp-3 mb-4">
            {item.description}
          </p>

          {/* Key Outcome Highlights */}
          <div className="space-y-1.5 pt-3 border-t border-slate-100">
            {item.results.slice(0, 2).map((res, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{res}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-[11px] text-slate-500">
              #{t}
            </span>
          ))}
        </div>
        <Link
          href={`/portfolio#${item.slug}`}
          className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700"
        >
          <span>자세히</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
