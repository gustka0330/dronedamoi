import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  FileText,
  Inbox,
  BookOpen,
  ArrowRight,
  PlusCircle,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { getAdminSession } from '@/lib/auth';
import { AdminShell } from '@/components/AdminShell';
import { articles } from '@/data/articles';
import { programs } from '@/data/programs';

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect('/admin/login');
  }

  // Sample recent inquiries for dashboard
  const recentInquiries = [
    {
      id: 'inq-1',
      org: '서울꿈나래초등학교',
      name: '김선생 교사',
      type: '학생 드론교육',
      date: '2026.08.29',
      status: 'NEW',
      studentCount: '25명',
    },
    {
      id: 'inq-2',
      org: '경남교육지원청 미래교육과',
      name: '박장학사',
      type: '교사연수',
      date: '2026.08.28',
      status: 'COMPLETED',
      studentCount: '30명 교원',
    },
    {
      id: 'inq-3',
      org: '양산중학교 동아리',
      name: '이부장 교사',
      type: '드론축구',
      date: '2026.08.27',
      status: 'IN_PROGRESS',
      studentCount: '15명',
    },
  ];

  return (
    <AdminShell user={session}>
      <div className="space-y-8">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#101828]">
              관리자 대시보드 개요
            </h1>
            <p className="text-sm text-[#475467] mt-1">
              환영합니다, <span className="font-bold text-blue-600">{session.name}</span>님. 교육 콘텐츠 및 문의를 관리하세요.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/articles"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>새 칼럼 작성</span>
            </Link>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">발행 칼럼 수</p>
              <p className="text-2xl sm:text-3xl font-black text-[#101828] mt-1">{articles.length}편</p>
              <p className="text-[11px] text-emerald-600 font-semibold mt-1">전체 정상 발행 중</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">상담 문의 접수</p>
              <p className="text-2xl sm:text-3xl font-black text-[#101828] mt-1">3건</p>
              <p className="text-[11px] text-blue-600 font-semibold mt-1">신규 접수 1건 대기</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Inbox className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">운영 프로그램</p>
              <p className="text-2xl sm:text-3xl font-black text-[#101828] mt-1">{programs.length}개</p>
              <p className="text-[11px] text-slate-500 font-semibold mt-1">초·중·교원 맞춤형</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">시스템 보안 상태</p>
              <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-1">정상 보호됨</p>
              <p className="text-[11px] text-slate-400 font-medium mt-1">Google OAuth 활성</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Inquiries List */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-extrabold text-[#101828] flex items-center gap-2">
                <Inbox className="w-5 h-5 text-blue-600" />
                <span>최근 접수된 교육 상담 문의</span>
              </h2>
              <Link
                href="/admin/inquiries"
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>전체 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {recentInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/80 transition-colors flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900">{inq.org}</span>
                      <span className="text-xs text-slate-500">({inq.name})</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="font-semibold text-blue-600">{inq.type}</span>
                      <span>·</span>
                      <span>인원: {inq.studentCount}</span>
                      <span>·</span>
                      <span>{inq.date}</span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                      inq.status === 'NEW'
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : inq.status === 'IN_PROGRESS'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {inq.status === 'NEW' ? '신규 접수' : inq.status === 'IN_PROGRESS' ? '상담 중' : '완료'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Publish / Article shortcuts */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-base font-extrabold text-[#101828] flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>칼럼 & 콘텐츠 바로가기</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                새로운 드론 교육 실천 사례, 비행 안전 가이드, 수업 지도안 칼럼을 등록하면 인사이트 페이지에 실시간 반영됩니다.
              </p>

              <div className="space-y-3">
                <Link
                  href="/admin/articles"
                  className="p-4 rounded-2xl border border-blue-100 bg-blue-50/50 hover:bg-blue-50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">인사이트 칼럼 작성 및 편집</p>
                      <p className="text-[11px] text-slate-500">현재 {articles.length}편 등록됨</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/admin/programs"
                  className="p-4 rounded-2xl border border-slate-200 hover:bg-slate-50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 text-white flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">교육 프로그램 커리큘럼 관리</p>
                      <p className="text-[11px] text-slate-500">6개 코어 프로그램</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <Link
                href="/"
                target="_blank"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>실제 홈페이지 새 창으로 열기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
