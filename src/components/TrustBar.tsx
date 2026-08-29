import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { MotionReveal } from './MotionReveal';
import { GraduationCap, Trophy, Compass, Sparkles } from 'lucide-react';

export function TrustBar() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Compass className="w-5 h-5 text-sky-500" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {siteConfig.stats.map((stat, idx) => (
          <MotionReveal key={stat.label} delay={idx * 0.1} direction="up">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E4E7EC] shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                    {stat.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                    {getIcon(idx)}
                  </div>
                </div>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#101828] tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-blue-600 tracking-wider">
                    {stat.unit}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-[#101828] leading-tight">
                  {stat.title}
                </h3>
              </div>

              <p className="mt-2 text-xs sm:text-sm text-[#475467] leading-relaxed">
                {stat.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
