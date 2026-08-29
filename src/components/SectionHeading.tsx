import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 ${
            isDark
              ? 'bg-sky-500/15 text-sky-300 border border-sky-400/20'
              : 'bg-blue-50 text-blue-600 border border-blue-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.25] text-balance ${
          isDark ? 'text-white' : 'text-[#101828]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#475467]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
