import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Article } from '@/types';
import { ImageWithFallback } from './ImageWithFallback';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/insight/${article.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackCategory={article.category}
            fallbackTitle={article.title}
            fallbackIcon="book"
          />
          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase">
            {article.categoryLabel}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-[#101828] group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-3">
            {article.title}
          </h3>

          <p className="text-sm text-[#475467] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
        <span>칼럼 읽기</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
