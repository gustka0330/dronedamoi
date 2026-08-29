import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  HelpCircle,
  Clock,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { programs, getProgramBySlug } from '@/data/programs';
import { CTASection } from '@/components/CTASection';

interface ProgramDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {
      title: '프로그램을 찾을 수 없습니다',
    };
  }

  return {
    title: `${program.englishTitle} (${program.title}) | DRONEDAMOI 학생드론교육`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.englishTitle} - ${program.title} | DRONEDAMOI`,
      description: program.shortDescription,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Top Breadcrumb & Hero */}
      <section className="relative py-16 lg:py-24 bg-[#081526] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              홈
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/program" className="hover:text-white transition-colors">
              교육 프로그램
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-sky-300 font-bold">{program.englishTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-4">
                {program.englishTitle}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {program.title}
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-bold text-sky-200">
                {program.subtitle}
              </p>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {program.fullDescription}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs font-bold text-sky-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Meta Info Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0E223D] rounded-2xl p-6 border border-sky-500/20 shadow-xl space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>추천 대상 학년</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">
                    {program.recommendedGrade}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4" />
                    <span>권장 운영 시수</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">
                    {program.durationExample}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?program=${program.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>이 프로그램 상담 신청</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended For & Learning Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Recommended Target Audience */}
            <div className="bg-[#F5F8FC] rounded-3xl p-8 border border-[#E4E7EC]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    TARGET AUDIENCE
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101828]">
                    이런 교육에 추천합니다
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {program.targetAudience.map((target, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {target}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-[#F5F8FC] rounded-3xl p-8 border border-[#E4E7EC]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    LEARNING GOALS
                  </span>
                  <h3 className="text-xl font-extrabold text-[#101828]">
                    핵심 교육 목표
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {program.learningGoals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-20 bg-[#F5F8FC] border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              STEP-BY-STEP CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] mt-1">
              차시별 세부 커리큘럼
            </h2>
            <p className="text-[#475467] text-sm sm:text-base mt-2">
              학교의 차시 구성(4~16차시)에 따라 유연하게 모듈을 조합하여 맞춤 편성됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {program.curriculum.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      STEP 0{item.step}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#101828] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.keywords && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {item.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Expected Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Activities */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 block">
                MAIN ACTIVITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mb-6">
                수업 속 주요 활동
              </h3>

              <div className="space-y-4">
                {program.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-base font-bold text-[#101828] flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{act.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475467] leading-relaxed pl-6">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#081526] to-[#0E223D] rounded-3xl p-8 text-white">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1 block">
                  EXPECTED OUTCOMES
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">
                  수료 후 기대효과
                </h3>

                <div className="space-y-3.5">
                  {program.expectedOutcomes.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 leading-snug">
                        {out}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F5F8FC] border-t border-[#E4E7EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] mt-1">
              교육 운영 자주 묻는 질문 (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            {program.faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h4 className="text-base font-extrabold text-[#101828] flex items-start gap-2.5 mb-2.5">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </h4>
                <p className="text-sm text-[#475467] leading-relaxed pl-7.5">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to all programs + Consultation banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>다른 교육 프로그램 둘러보기</span>
          </Link>

          <Link
            href={`/contact?program=${program.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md"
          >
            <span>{program.englishTitle} 교육 문의하기</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
