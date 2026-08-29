'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Sparkles, ChevronDown, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#081526] text-white pt-24 pb-16">
      {/* Background Graphic / Video / Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Background Image / Placeholder with dark overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity scale-105 transform">
          <ImageWithFallback
            src="/images/hero.jpg"
            alt="DRONEDAMOI DRONE SCHOOL 드론 교육 현장"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            fallbackCategory="DRONEDAMOI HERO"
            fallbackTitle="교실에서 시작해 세계무대까지"
          />
        </div>

        {/* Hero Ambient Video Player */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen scale-105 pointer-events-none"
          src="/video/hero.mp4"
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        {/* Dark Vignette & Bottom Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081526]/80 via-[#081526]/60 to-[#081526]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>DRONE × EDUCATION × FUTURE</span>
          </motion.div>

          {/* Main Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.18] sm:leading-[1.15] text-white"
          >
            <span className="block text-slate-100">교실에서 시작해</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              세계무대까지.
            </span>
          </motion.h1>

          {/* Subtitle Accent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-200/95 tracking-tight"
          >
            아이들의 가능성을 드론으로 띄웁니다.
          </motion.p>

          {/* Detailed Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl sm:max-w-3xl text-balance"
          >
            <span className="font-semibold text-white">현직 초등교사이자 학생드론교육 전문가 윤현삼.</span><br className="hidden sm:inline" />
            드론의 원리부터 조종 · 촬영 · 코딩 · 드론스포츠 · 프로젝트와 진로교육까지<br className="hidden md:inline" />
            학교 현장에서 직접 설계하고 실천합니다.
          </motion.p>

          {/* Trust Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#0E223D]/90 border border-sky-500/30 shadow-lg shadow-blue-950/50 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-wider text-sky-300 uppercase">
                2023 1st FIDA World Championship Class 20
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-white">
                세계대회 우승팀 Coach · 학생팀 지도
              </p>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>학생드론교육 알아보기</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base backdrop-blur-sm transition-all hover:border-white/40 active:scale-[0.98]"
            >
              <span>교육·연수 문의하기</span>
              <Compass className="w-5 h-5 text-sky-400" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs font-semibold cursor-pointer select-none"
      >
        <span className="tracking-widest uppercase text-[10px] text-slate-400">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-sky-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
