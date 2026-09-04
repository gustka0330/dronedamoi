'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, AlertCircle, CheckCircle2, ArrowRight, Plane, Sparkles, Loader2 } from 'lucide-react';

interface LoginPageProps {
  searchParams: Promise<{
    error?: string;
    email?: string;
    logged_out?: string;
  }>;
}

export default function AdminLoginPage({ searchParams }: LoginPageProps) {
  const router = useRouter();
  const params = use(searchParams);
  const [loading, setLoading] = useState(false);

  const handleDevLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/dev-login', { method: 'POST' });
      if (res.ok) {
        router.push('/admin');
        router.refresh();
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#081526] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Top Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group mb-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Plane className="w-6 h-6 transform -rotate-45" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                DRONEDAMOI
              </span>
              <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                Admin Portal
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-black text-white mt-3">
            관리자 시스템 로그인
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            DRONEDAMOI DRONE SCHOOL 관리자 전용 대시보드
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#0E223D]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-sky-500/25 shadow-2xl space-y-6">
          {/* Security Banner */}
          <div className="p-3.5 rounded-2xl bg-sky-950/70 border border-sky-500/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-300">
              <p className="font-bold text-white">보안 인증 권한 계정</p>
              <p className="text-sky-300 font-semibold mt-0.5">dronedamoi@gmail.com / gustka0330@gmail.com</p>
            </div>
          </div>

          {/* Status Messages */}
          {params.logged_out && (
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>로그아웃되었습니다.</span>
            </div>
          )}

          {params.error === 'unauthorized_email' && (
            <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-xs text-red-200 space-y-1">
              <div className="flex items-center gap-2 font-bold text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>접근 권한이 없는 구글 계정입니다.</span>
              </div>
              <p className="text-slate-300 pl-6">
                로그인 시도: <span className="font-mono text-white">{params.email}</span><br />
                지정된 관리자 계정(<span className="text-sky-300 font-semibold">gustka0330@gmail.com</span>)으로 로그인해주세요.
              </p>
            </div>
          )}

          {params.error === 'missing_credentials' && (
            <div className="p-3.5 rounded-xl bg-amber-950/70 border border-amber-500/30 text-xs text-amber-200">
              <p className="font-bold text-amber-300 mb-1">💡 Google OAuth 안내</p>
              <p className="text-slate-300">
                환경 변수에 Google Client ID가 등록되지 않은 경우, 아래 &quot;관리자 즉시 인증&quot; 버튼으로 접속하실 수 있습니다.
              </p>
            </div>
          )}

          {/* Primary Action: Google OAuth Login Button */}
          <a
            href="/api/auth/google"
            className="w-full py-4 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            {/* Google G Logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google 계정으로 관리자 로그인</span>
          </a>

          {/* Quick Direct Admin Auth button */}
          <div className="pt-2 border-t border-slate-700/60">
            <button
              type="button"
              onClick={handleDevLogin}
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-[#132B4C] hover:bg-[#1A3860] border border-sky-500/20 text-xs font-bold text-sky-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4 text-sky-400" />
              )}
              <span>dronedamoi@gmail.com 관리자 인증 입장</span>
            </button>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <span>홈페이지 메인으로 돌아가기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
