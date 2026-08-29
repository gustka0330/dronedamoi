'use client';

import React from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  GraduationCap,
  Clock,
} from 'lucide-react';
import { programs } from '@/data/programs';

export default function AdminProgramsPage() {
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
            <span className="text-slate-900 font-bold">교육 프로그램 관리</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#101828]">
            6대 코어 교육 프로그램
          </h1>
          <p className="text-sm text-[#475467] mt-1">
            초·중·고 및 교원 연수 맞춤형으로 체계화된 드론 교육과정 커리큘럼 현황을 확인합니다.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog) => (
          <div
            key={prog.slug}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {prog.englishTitle}
                </span>
                <span className="text-xs text-slate-400 font-bold">
                  {prog.curriculum.length}차시 구성
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                {prog.title}
              </h3>
              <p className="text-xs font-bold text-sky-600 mb-3">
                {prog.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {prog.shortDescription}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>{prog.recommendedGrade}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{prog.durationExample}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/program/${prog.slug}`}
                target="_blank"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>상세 페이지 확인</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
