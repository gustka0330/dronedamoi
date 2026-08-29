'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Inbox,
  Clock,
  Phone,
  Mail,
  Search,
} from 'lucide-react';

interface InquiryRecord {
  id: string;
  inquiryType: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  targetGroup: string;
  studentCount: string;
  preferredDate: string;
  sessionCount: string;
  location: string;
  message: string;
  status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED';
  receivedAt: string;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([
    {
      id: 'INQ-1003',
      inquiryType: '학생 드론교육',
      organization: '서울꿈나래초등학교',
      name: '김선생 교사',
      email: 'kim.teacher@sen.go.kr',
      phone: '010-9876-5432',
      targetGroup: '초등학생',
      studentCount: '25명 (5학년 1개반)',
      preferredDate: '2026년 2학기 학교자율시간',
      sessionCount: '8차시 (주 1회 2시간)',
      location: '교내 체육관 및 컴퓨터실',
      message: '2022 개정 교육과정 학교자율시간 드론 과목 편성을 계획 중입니다. 기체 대여 및 지도안 패키지 포함 문의드립니다.',
      status: 'NEW',
      receivedAt: '2026.08.29 14:20',
    },
    {
      id: 'INQ-1002',
      inquiryType: '교사연수',
      organization: '경남교육지원청 미래교육과',
      name: '박장학사',
      email: 'park.supervisor@gne.go.kr',
      phone: '010-1234-5678',
      targetGroup: '교원',
      studentCount: '30명 교원',
      preferredDate: '2026년 10월 중 토요일',
      sessionCount: '원데이 집중연수 (6시간)',
      location: '교육지원청 3층 드론연수실',
      message: '관내 초등 교원을 대상으로 드론 안전 및 수업 지도 실습 직무연수 출강을 요청드립니다.',
      status: 'COMPLETED',
      receivedAt: '2026.08.28 09:45',
    },
    {
      id: 'INQ-1001',
      inquiryType: '드론축구',
      organization: '양산중학교 드론동아리',
      name: '이부장 교사',
      email: 'lee.teacher@gne.go.kr',
      phone: '010-5555-4321',
      targetGroup: '중학생',
      studentCount: '15명 동아리 부원',
      preferredDate: '상시 방과후',
      sessionCount: '12차시 (대회 준비반)',
      location: '교내 다목적 강당',
      message: '유소년 드론축구 전국대회 및 교육감배 대회 출전을 위한 실전 전술 코칭을 희망합니다.',
      status: 'IN_PROGRESS',
      receivedAt: '2026.08.27 16:10',
    },
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(inquiries[0]);
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const updateStatus = (id: string, newStatus: 'NEW' | 'IN_PROGRESS' | 'COMPLETED') => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const filtered = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === 'ALL' || inq.status === filterStatus;
    const matchesSearch =
      searchQuery === '' ||
      inq.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.inquiryType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
          <Link href="/admin" className="hover:text-blue-600">
            대시보드
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">상담 문의 접수함</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#101828]">
          교육·연수 상담 문의 접수함
        </h1>
        <p className="text-sm text-[#475467] mt-1">
          홈페이지 `/contact` 폼을 통해 접수된 학교 및 교육기관 상담 내역을 실시간 확인하고 처리 상태를 관리합니다.
        </p>
      </div>

      {/* Main split view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left List */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-700 uppercase">
              문의 목록 ({filtered.length})
            </span>
            <div className="flex gap-1">
              {['ALL', 'NEW', 'IN_PROGRESS', 'COMPLETED'].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setFilterStatus(st)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-colors ${
                    filterStatus === st
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st === 'ALL' ? '전체' : st === 'NEW' ? '신규' : st === 'IN_PROGRESS' ? '진행' : '완료'}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="기관명, 담당자 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
            {filtered.map((inq) => {
              const isSelected = selectedInquiry?.id === inq.id;
              return (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500 shadow-xs'
                      : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-100">
                      {inq.inquiryType}
                    </span>
                    <span
                      className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                        inq.status === 'NEW'
                          ? 'bg-red-100 text-red-700'
                          : inq.status === 'IN_PROGRESS'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {inq.status === 'NEW' ? '신규' : inq.status === 'IN_PROGRESS' ? '상담중' : '완료'}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-xs text-slate-900 line-clamp-1">
                    {inq.organization}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {inq.name} · {inq.phone}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{inq.receivedAt}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          {selectedInquiry ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                    {selectedInquiry.inquiryType}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {selectedInquiry.organization}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    담당자: <span className="font-semibold text-slate-800">{selectedInquiry.name}</span> · 접수번호: {selectedInquiry.id}
                  </p>
                </div>

                {/* Status Toggle Buttons */}
                <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedInquiry.id, 'NEW')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedInquiry.status === 'NEW'
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    신규
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedInquiry.id, 'IN_PROGRESS')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedInquiry.status === 'IN_PROGRESS'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    상담중
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(selectedInquiry.id, 'COMPLETED')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedInquiry.status === 'COMPLETED'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    완료
                  </button>
                </div>
              </div>

              {/* Contact Info Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">연락처</p>
                  <a href={`tel:${selectedInquiry.phone}`} className="text-sm font-extrabold text-blue-600 hover:underline flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{selectedInquiry.phone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">이메일</p>
                  <a href={`mailto:${selectedInquiry.email}`} className="text-sm font-extrabold text-blue-600 hover:underline flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{selectedInquiry.email}</span>
                  </a>
                </div>
              </div>

              {/* Education Specs Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">대상 및 인원</p>
                  <p className="text-xs font-bold text-slate-900">{selectedInquiry.targetGroup} / {selectedInquiry.studentCount}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">희망 일정 및 시수</p>
                  <p className="text-xs font-bold text-slate-900">{selectedInquiry.preferredDate} ({selectedInquiry.sessionCount})</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="text-[11px] font-bold text-slate-500 uppercase">교육 장소</p>
                <p className="text-xs font-bold text-slate-900">{selectedInquiry.location}</p>
              </div>

              {/* Inquiry Message */}
              <div>
                <p className="text-xs font-bold text-slate-700 uppercase mb-2">상담 문의 상세 내용</p>
                <div className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=${encodeURIComponent(`[DRONEDAMOI] ${selectedInquiry.organization} 드론교육 상담 안내`)}`}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>이메일 회신 작성</span>
                </a>
                <a
                  href={`tel:${selectedInquiry.phone}`}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>전화 상담 연결</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 text-slate-400">
              <Inbox className="w-12 h-12 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-bold">선택된 문의가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
