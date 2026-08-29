import React from 'react';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { AboutPreview } from '@/components/AboutPreview';
import { WorldChampionFeature } from '@/components/WorldChampionFeature';
import { WhyDronedamoi } from '@/components/WhyDronedamoi';
import { ProgramGrid } from '@/components/ProgramGrid';
import { AchievementTimeline } from '@/components/AchievementTimeline';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { DroneClassTv } from '@/components/DroneClassTv';
import { InstagramGrid } from '@/components/InstagramGrid';
import { PressSection } from '@/components/PressSection';
import { InsightPreview } from '@/components/InsightPreview';
import { CTASection } from '@/components/CTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST BAR STATS */}
      <TrustBar />

      {/* 3. ABOUT PREVIEW */}
      <AboutPreview />

      {/* 4. WORLD CHAMPION HIGHLIGHT */}
      <WorldChampionFeature />

      {/* 5. WHY DRONEDAMOI 4 CARDS */}
      <WhyDronedamoi />

      {/* 6. 6 PROGRAM CARDS */}
      <ProgramGrid showAllCTA={true} />

      {/* 7. ACHIEVEMENTS TIMELINE */}
      <AchievementTimeline showCTA={true} />

      {/* 8. FIELD STORIES / PORTFOLIO */}
      <PortfolioGrid showFilter={false} showAllCTA={true} limit={6} />

      {/* 9. DRONE CLASS TV (YOUTUBE) */}
      <DroneClassTv />

      {/* 10. INSTAGRAM GRID */}
      <InstagramGrid />

      {/* 11. PRESS & MEDIA */}
      <PressSection />

      {/* 12. DRONE INSIGHT ARTICLES */}
      <InsightPreview />

      {/* 13. FINAL HIGH-CONVERSION CTA */}
      <CTASection />
    </div>
  );
}
