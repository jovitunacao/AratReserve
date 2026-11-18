import {ArrowRight} from 'lucide-react';
import {LinkButton} from '@/src/components/ui/Button';
import {Section} from '@/src/components/ui/Section';
import type {HomepageContent} from '@/src/types/content';

interface HeroSectionProps {
  content: HomepageContent['hero'];
}

export function HeroSection({content}: HeroSectionProps) {
  return (
    <Section surface="white" className="pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium tracking-wide text-indigo-700 sm:text-sm">
            {content.eyebrow}
          </p>

          <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-slate-950 [text-wrap:balance]">
            {content.headline}
          </h1>

          <p className="mt-5 text-lg font-medium text-slate-800 sm:text-xl">
            {content.tagline}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[17px]">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <LinkButton to={content.primaryCtaTo} variant="primary">
              <span>{content.primaryCtaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton to={content.secondaryCtaTo} variant="secondary">
              <span>{content.secondaryCtaLabel}</span>
            </LinkButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8">
            <p className="text-xs font-medium text-slate-500">
              Platform Portfolio Architecture
            </p>
            <h2 className="mt-1.5 text-base font-semibold text-slate-900">
              Parent SaaS Studio &middot; Independent Products
            </h2>

            <div className="mt-6 space-y-3 border-t border-slate-200/80 pt-6">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">CourtBook</p>
                  <p className="text-xs text-slate-500">Sports &amp; Recreation</p>
                </div>
                <span className="text-xs font-medium text-indigo-700">In Development</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <div>
                  <p className="text-sm font-medium text-slate-800">Clinics &amp; Wellness</p>
                  <p className="text-xs text-slate-500">Healthcare &amp; Personal Care</p>
                </div>
                <span className="text-xs text-slate-500">Planned</span>
              </div>

              <div className="flex items-center justify-between pb-1">
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Fitness, Hospitality &amp; Venues
                  </p>
                  <p className="text-xs text-slate-500">Facility &amp; Space Scheduling</p>
                </div>
                <span className="text-xs text-slate-500">Planned</span>
              </div>
            </div>

            <p className="mt-6 border-t border-slate-200/80 pt-4 text-xs leading-relaxed text-slate-500">
              Each product operates on dedicated infrastructure and accounts, connected cleanly
              through the AratReserve corporate directory.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
