import {Section} from '@/src/components/ui/Section';
import type {HomepageContent} from '@/src/types/content';

interface CompanyIntroSectionProps {
  content: HomepageContent['introduction'];
}

export function CompanyIntroSection({content}: CompanyIntroSectionProps) {
  return (
    <Section surface="muted" bordered className="py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium text-indigo-700 sm:text-sm">
            Company Overview
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl [text-wrap:balance]">
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700">{content.lead}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{content.body}</p>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-slate-200/90 border-y border-slate-200/90">
            {content.principles.map((principle, index) => (
              <div key={principle.title} className="py-6 first:pt-5 last:pb-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-display text-xs font-semibold text-indigo-700 tabular-nums shrink-0">
                    0{index + 1}.
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {principle.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
