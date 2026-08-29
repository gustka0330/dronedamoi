'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PlusCircle,
  Trash2,
  Eye,
  CheckCircle2,
  ArrowLeft,
  Search,
} from 'lucide-react';
import { articles as initialArticles } from '@/data/articles';
import { Article, ArticleCategory } from '@/types';

export default function AdminArticlesPage() {
  const [articlesList, setArticlesList] = useState<Article[]>(initialArticles);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState('');

  // Form state for creating/editing article
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: 'DRONE CLASS' as ArticleCategory,
    categoryLabel: '학교 드론교육',
    readTime: '5분 읽기',
    tags: '학교교육, 수업설계',
    lead: '',
    heading1: '',
    body1: '',
    quote: '',
    conclusion: '',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newArticle: Article = {
      slug: formData.slug || `post-${Date.now()}`,
      title: formData.title,
      excerpt: formData.excerpt,
      category: formData.category,
      categoryLabel: formData.categoryLabel,
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      readTime: formData.readTime,
      author: {
        name: '윤현삼',
        role: '현직 초등교사 · 학생드론교육 전문가',
        avatar: '/images/profile-main.jpg',
      },
      tags: formData.tags.split(',').map((t) => t.trim()),
      image: '/images/portfolio-school.jpg',
      content: {
        lead: formData.lead || formData.excerpt,
        sections: [
          {
            heading: formData.heading1 || '1. 주요 핵심 내용',
            body: [formData.body1 || '작성된 본문 내용입니다.'],
            quote: formData.quote || undefined,
          },
        ],
        conclusion: formData.conclusion || '현장에서 학생들과 함께 성장하는 드론교육을 만들어갑니다.',
      },
    };

    setArticlesList([newArticle, ...articlesList]);
    setIsEditing(false);
    setNotification('새 칼럼이 성공적으로 등록되었습니다.');
    setTimeout(() => setNotification(''), 4000);
  };

  const handleDelete = (slug: string) => {
    if (confirm('이 칼럼을 삭제하시겠습니까?')) {
      setArticlesList(articlesList.filter((a) => a.slug !== slug));
      setNotification('칼럼이 삭제되었습니다.');
      setTimeout(() => setNotification(''), 4000);
    }
  };

  const filtered = articlesList.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <Link href="/admin" className="hover:text-blue-600">
              대시보드
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">인사이트 칼럼 관리</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#101828]">
            인사이트 교육 칼럼 관리
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          {isEditing ? (
            <>
              <ArrowLeft className="w-4 h-4" />
              <span>목록으로 돌아가기</span>
            </>
          ) : (
            <>
              <PlusCircle className="w-4 h-4" />
              <span>새 칼럼 작성하기</span>
            </>
          )}
        </button>
      </div>

      {/* Notification */}
      {notification && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Form or Table View */}
      {isEditing ? (
        /* Create / Edit Article Form */
        <form
          onSubmit={handleSave}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 max-w-4xl"
        >
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-extrabold text-slate-900">
              새 인사이트 칼럼 작성
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              작성 완료 즉시 `/insight` 페이지에 공개됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                칼럼 제목 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="예: 초등 드론교육 4축 비행 원리 지도법"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                URL 슬러그 (영문 식별자)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="예: school-drone-teaching-guide"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                카테고리
              </label>
              <select
                value={formData.category}
                onChange={(e) => {
                  const cat = e.target.value as ArticleCategory;
                  const labels: Record<string, string> = {
                    'DRONE CLASS': '학교 드론교육',
                    'DRONE BASIC': '드론 기초/원리',
                    'DRONE SAFETY': '비행 안전/법규',
                    'DRONE MEDIA': '항공 미디어',
                    'DRONE FUTURE': '미래/진로',
                  };
                  setFormData({
                    ...formData,
                    category: cat,
                    categoryLabel: labels[cat] || '교육 칼럼',
                  });
                }}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-blue-500 outline-none"
              >
                <option value="DRONE CLASS">학교 드론교육</option>
                <option value="DRONE BASIC">드론 기초/원리</option>
                <option value="DRONE SAFETY">비행 안전/법규</option>
                <option value="DRONE MEDIA">항공 미디어</option>
                <option value="DRONE FUTURE">미래/진로</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                태그 (쉼표로 구분)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="예: 학교교육, 비행원리, 초등수업"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              한 줄 요약 (Excerpt) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="칼럼 목록에 표시될 매력적인 요약 문장을 입력하세요."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              본문 도입부 (Lead Text)
            </label>
            <textarea
              rows={2}
              value={formData.lead}
              onChange={(e) => setFormData({ ...formData, lead: e.target.value })}
              placeholder="칼럼의 시작 배경 및 핵심 질문을 적어주세요."
              className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              본문 소제목 1
            </label>
            <input
              type="text"
              value={formData.heading1}
              onChange={(e) => setFormData({ ...formData, heading1: e.target.value })}
              placeholder="예: 1. 드론은 목적이 아니라 배움의 도구입니다"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none mb-3"
            />
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              본문 상세 내용
            </label>
            <textarea
              rows={5}
              value={formData.body1}
              onChange={(e) => setFormData({ ...formData, body1: e.target.value })}
              placeholder="현장 경험과 교수학습 노하우를 상세히 작성해주세요."
              className="w-full p-4 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              강조 인용구 (Quote)
            </label>
            <input
              type="text"
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              placeholder="칼럼 중간에 크게 강조하고 싶은 명언이나 문장"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              맺음말 (Conclusion)
            </label>
            <textarea
              rows={2}
              value={formData.conclusion}
              onChange={(e) => setFormData({ ...formData, conclusion: e.target.value })}
              placeholder="칼럼을 마무리하는 메시지를 작성해주세요."
              className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-md shadow-blue-500/20 cursor-pointer"
            >
              칼럼 발행 및 저장
            </button>
          </div>
        </form>
      ) : (
        /* Articles List Table */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Table Toolbar */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="칼럼 제목 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-blue-500 outline-none"
              />
            </div>

            <span className="text-xs font-bold text-slate-500">
              총 <span className="text-blue-600">{filtered.length}</span>편의 칼럼
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6">카테고리</th>
                  <th className="py-3.5 px-6">제목 / 요약</th>
                  <th className="py-3.5 px-6">발행일</th>
                  <th className="py-3.5 px-6 text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((art) => (
                  <tr key={art.slug} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[11px]">
                        {art.categoryLabel}
                      </span>
                    </td>
                    <td className="py-4 px-6 max-w-md">
                      <p className="font-extrabold text-slate-900 text-sm line-clamp-1">{art.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">{art.excerpt}</p>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-slate-500 font-medium">
                      {art.date}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <Link
                          href={`/insight/${art.slug}`}
                          target="_blank"
                          className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                          title="미리보기"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(art.slug)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                          title="삭제"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
