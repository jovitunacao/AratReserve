import {ArrowRight} from 'lucide-react';
import {LinkButton} from '@/src/components/ui/Button';
import {Section} from '@/src/components/ui/Section';
import type {HomepageContent} from '@/src/types/content';

interface CtaSectionProps {
  content: HomepageContent['cta'];
}

export function CtaSection({content}: CtaSectionProps) {
  return (
    <Section surface="muted" bordered className="py-16 sm:py-24">
      <div className="rounded-xl border border-slate-200/90 bg-white px-6 py-12 sm:px-12 sm:py-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl [text-wrap:balance]">
              {content.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <LinkButton to={content.primaryTo} variant="primary">
              <span>{content.primaryLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton to={content.secondaryTo} variant="secondary">
              <span>{content.secondaryLabel}</span>
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
