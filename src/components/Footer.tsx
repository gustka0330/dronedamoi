import React from 'react';
import Link from 'next/link';
import { Plane, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/Icons';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return (
    <footer className="bg-[#081526] text-white border-t border-slate-800">
      {/* Top consultation bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-sky-950/20 to-blue-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                DRONEDAMOI PARTNERSHIP
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                학교 및 교육기관 맞춤형 드론교육을 함께 설계합니다
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                초·중학교 정규수업 · 학교자율시간 · 늘봄학교 · 교원 직무연수 · 대회 지도
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] shrink-0"
            >
              <span>교육·연수 문의하기</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Plane className="w-5 h-5 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white">
                  DRONEDAMOI
                </span>
                <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">
                  Drone School
                </span>
              </div>
            </Link>

            <p className="text-slate-300 font-medium text-base mb-3 leading-relaxed">
              {siteConfig.slogan}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              11년차 현직 초등학교 교사이자 학생드론교육 전문가 윤현삼.<br />
              교실에서 시작해 세계 정상까지, 아이들의 꿈과 가능성을 드론으로 띄웁니다.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              메뉴 바로가기
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              교육 프로그램
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/program/basic" className="hover:text-sky-400 transition-colors">
                  드론 기초 (Basic)
                </Link>
              </li>
              <li>
                <Link href="/program/coding" className="hover:text-sky-400 transition-colors">
                  드론 코딩 (Coding)
                </Link>
              </li>
              <li>
                <Link href="/program/media" className="hover:text-sky-400 transition-colors">
                  드론 미디어 (Media)
                </Link>
              </li>
              <li>
                <Link href="/program/sports" className="hover:text-sky-400 transition-colors">
                  드론 스포츠 (Sports)
                </Link>
              </li>
              <li>
                <Link href="/program/project" className="hover:text-sky-400 transition-colors">
                  드론 프로젝트 (PBL)
                </Link>
              </li>
              <li>
                <Link href="/program/teacher-training" className="hover:text-sky-400 transition-colors">
                  교원 직무연수 (Training)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              문의 및 출강 안내
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>경상남도 / 전국 초·중·고 및 교육기관 출강 지원</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <p className="font-semibold text-white mb-1">
                2023 1st FIDA World Championship
              </p>
              <p className="text-slate-400">Class 20 세계대회 우승팀 지도</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DRONEDAMOI DRONE SCHOOL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>학생드론교육 전문가 윤현삼</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
