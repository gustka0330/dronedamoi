'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Inbox,
  BookOpen,
  LogOut,
  Plane,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { AdminUser } from '@/lib/auth';

interface AdminShellProps {
  user: AdminUser;
  children: React.ReactNode;
}

export function AdminShell({ user, children }: AdminShellProps) {
  const pathname = usePathname();

  const navItems = [
    { name: '대시보드 개요', href: '/admin', icon: LayoutDashboard },
    { name: '인사이트 칼럼 관리', href: '/admin/articles', icon: FileText },
    { name: '상담 문의 접수함', href: '/admin/inquiries', icon: Inbox },
    { name: '교육 프로그램 관리', href: '/admin/programs', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FC] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#081526] text-white flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div>
          {/* Brand header */}
          <div className="p-6 border-b border-slate-800">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block leading-tight">
                  DRONEDAMOI
                </span>
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                  Admin System
                </span>
              </div>
            </Link>
          </div>

          {/* Admin User Info pill */}
          <div className="p-4 mx-4 my-4 rounded-2xl bg-[#0E223D] border border-sky-500/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-xs">
                {user.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">{user.name}</p>
                <p className="text-[10px] text-sky-300 truncate">{user.email}</p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-700/60 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>최고 관리자 인증됨</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <span>홈페이지 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <a
            href="/api/auth/logout"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>로그아웃</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
}
