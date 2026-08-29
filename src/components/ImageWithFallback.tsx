'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Plane, Award, BookOpen, Code, Video, Users, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackTitle?: string;
  fallbackCategory?: string;
  fallbackIcon?: 'drone' | 'award' | 'book' | 'code' | 'video' | 'users' | 'sparkles';
}

export function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  fallbackCategory,
  fallbackIcon = 'drone',
  className = '',
  fill,
  width,
  height,
  priority,
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const getIcon = () => {
    switch (fallbackIcon) {
      case 'award':
        return <Award className="w-10 h-10 text-amber-400" />;
      case 'book':
        return <BookOpen className="w-10 h-10 text-blue-400" />;
      case 'code':
        return <Code className="w-10 h-10 text-cyan-400" />;
      case 'video':
        return <Video className="w-10 h-10 text-emerald-400" />;
      case 'users':
        return <Users className="w-10 h-10 text-indigo-400" />;
      case 'sparkles':
        return <Sparkles className="w-10 h-10 text-sky-400" />;
      case 'drone':
      default:
        return <Plane className="w-10 h-10 text-sky-400 transform -rotate-45" />;
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#081526] via-[#0E223D] to-[#132B4C] flex flex-col items-center justify-center p-6 text-center select-none border border-sky-900/30 ${className}`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
        }}
      >
        {/* Subtle grid and decorative rings */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-3 shadow-inner">
            {getIcon()}
          </div>
          {fallbackCategory && (
            <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400/90 mb-1 px-2.5 py-0.5 rounded-full bg-sky-950/60 border border-sky-500/20">
              {fallbackCategory}
            </span>
          )}
          <span className="text-sm font-semibold text-white/95 line-clamp-2 px-2">
            {fallbackTitle || alt || 'DRONEDAMOI DRONE SCHOOL'}
          </span>
          <span className="text-[11px] text-slate-400 mt-1">
            학생드론교육 전문가 윤현삼
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
}
