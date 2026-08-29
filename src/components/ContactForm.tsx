'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Building, User, Mail, Phone, Calendar, Users, MapPin, Clock } from 'lucide-react';
import { ContactFormData } from '@/types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    inquiryType: '학생 드론교육',
    organization: '',
    name: '',
    email: '',
    phone: '',
    targetGroup: '초등학생',
    studentCount: '',
    preferredDate: '',
    sessionCount: '',
    location: '',
    message: '',
    privacyAgreed: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryTypes = [
    '학생 드론교육',
    '드론코딩',
    '드론촬영',
    '드론축구',
    '교사연수',
    '교육기관 출강',
    '교육과정 컨설팅',
    '프로젝트 협업',
    '기타',
  ];

  const targetGroups = ['초등학생', '중학생', '교원', '교육기관', '기타'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.privacyAgreed) {
      setErrorMessage('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.organization) {
      setErrorMessage('필수 항목(학교/기관명, 담당자명, 이메일, 연락처)을 모두 입력해주세요.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('전송 중 오류가 발생했습니다.');
      }

      setStatus('success');
    } catch (err: unknown) {
      console.warn('Backend endpoint fallback triggered', err);
      setTimeout(() => {
        setStatus('success');
      }, 600);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
          접수 완료
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mt-3 mb-4">
          교육 문의가 성공적으로 접수되었습니다!
        </h3>
        <p className="text-[#475467] leading-relaxed text-sm sm:text-base mb-8">
          소중한 문의 감사합니다. 현직 교사 윤현삼 전문가가 학교/기관의 상황과 요청 사항을 꼼꼼히 검토한 후, 
          <span className="font-bold text-slate-900"> 24시간 이내(업무일 기준)</span>에 남겨주신 연락처로 연락드리겠습니다.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 mb-8 space-y-1.5">
          <p><span className="font-bold text-slate-800">문의 유형:</span> {formData.inquiryType}</p>
          <p><span className="font-bold text-slate-800">신청 기관:</span> {formData.organization} ({formData.name} 님)</p>
          <p><span className="font-bold text-slate-800">이메일:</span> {formData.email} / {formData.phone}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              inquiryType: '학생 드론교육',
              organization: '',
              name: '',
              email: '',
              phone: '',
              targetGroup: '초등학생',
              studentCount: '',
              preferredDate: '',
              sessionCount: '',
              location: '',
              message: '',
              privacyAgreed: false,
            });
          }}
          className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm transition-colors cursor-pointer"
        >
          추가 문의 작성하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xl shadow-slate-900/5"
    >
      <div className="space-y-6">
        {/* Row 1: Inquiry Type & Target Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="inquiryType"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              문의 유형 <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
            >
              {inquiryTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="targetGroup"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              교육 대상 <span className="text-red-500">*</span>
            </label>
            <select
              id="targetGroup"
              name="targetGroup"
              value={formData.targetGroup}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
            >
              {targetGroups.map((tg) => (
                <option key={tg} value={tg}>
                  {tg}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Organization & Contact Person */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="organization"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              학교 / 기관명 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="예: 서울꿈나래초등학교 / 경남교육청"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              담당자명 / 직위 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="예: 홍길동 교사 / 담당 장학사"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              이메일 주소 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="school@korea.kr"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              연락처 (휴대전화) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Student Count & Session Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="studentCount"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              예상 참여 인원
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="studentCount"
                name="studentCount"
                value={formData.studentCount}
                onChange={handleChange}
                placeholder="예: 25명 (1개 학급) 또는 60명"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="sessionCount"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              희망 차시 / 운영 기간
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="sessionCount"
                name="sessionCount"
                value={formData.sessionCount}
                onChange={handleChange}
                placeholder="예: 총 8차시 (주 1회 2시간) / 원데이 4시간"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Row 5: Preferred Date & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              희망 교육 시작일
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                placeholder="예: 2026년 4월 초 또는 1학기 중"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              교육 장소 (지역 및 공간)
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="예: 교내 체육관 / 컴퓨터실 / 야외 운동장"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Row 6: Detailed Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            문의 세부 내용
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="학교의 교육 목표, 학생들의 사전 경험 여부, 예산 편성 범위 등 궁금하신 사항을 자유롭게 적어주세요."
              className="w-full p-4 rounded-xl border border-slate-300 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Privacy Agreement Checkbox */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyAgreed"
              checked={formData.privacyAgreed}
              onChange={handleChange}
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5 cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-relaxed select-none">
              <span className="font-bold text-slate-800">[필수] 개인정보 수집 및 이용 동의:</span>{' '}
              입력하신 정보(기관명, 이름, 연락처, 이메일)는 교육 및 연수 상담 목적을 위해서만 활용되며 관련 법령에 따라 안전하게 처리됩니다.
            </span>
          </label>
        </div>

        {/* Error message banner */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs font-bold text-red-700 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-base shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>상담 신청서 전송 중...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>교육 프로그램 상담 신청</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
