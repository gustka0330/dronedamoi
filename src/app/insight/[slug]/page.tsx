import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { articles, getArticleBySlug } from '@/data/articles';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { ArticleCard } from '@/components/ArticleCard';
import { CTASection } from '@/components/CTASection';

interface ArticleDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: '칼럼을 찾을 수 없습니다',
    };
  }

  return {
    title: `${article.title} | DRONEDAMOI 인사이트`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            홈
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/insight" className="hover:text-blue-600">
            인사이트
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-600 font-bold">{article.categoryLabel}</span>
        </div>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold">
            {article.categoryLabel}
          </span>
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

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#101828] leading-[1.25] tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-10">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base">
            윤
          </div>
          <div>
            <p className="font-extrabold text-sm text-slate-900">{article.author.name}</p>
            <p className="text-xs text-slate-500">{article.author.role}</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden mb-12 border border-slate-200 shadow-md bg-slate-900">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
            fallbackCategory={article.category}
            fallbackTitle={article.title}
          />
        </div>

        {/* Article Lead */}
        <div className="text-lg sm:text-xl font-semibold text-[#101828] leading-relaxed p-6 rounded-2xl bg-blue-50/50 border-l-4 border-blue-600 mb-10">
          {article.content.lead}
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 text-base sm:text-lg text-[#475467] leading-relaxed">
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#101828] pt-4">
                {sec.heading}
              </h2>

              {sec.body.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

              {sec.quote && (
                <blockquote className="my-6 p-5 rounded-2xl bg-slate-50 border-l-4 border-amber-400 text-slate-800 font-bold italic text-base sm:text-lg">
                  &ldquo;{sec.quote}&rdquo;
                </blockquote>
              )}

              {sec.bulletPoints && (
                <div className="my-4 space-y-2 bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span className="font-semibold">{bp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-extrabold text-[#101828] mb-3">
              맺음말
            </h3>
            <p className="font-medium text-slate-700">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link
            href="/insight"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>칼럼 목록으로 돌아가기</span>
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-[#F5F8FC] border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              RELATED ARTICLES
            </span>
            <h3 className="text-2xl font-extrabold text-[#101828] mt-1">
              추천 칼럼 더 보기
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
