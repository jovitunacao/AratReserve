import {Section} from '@/src/components/ui/Section';
import type {HomepageContent} from '@/src/types/content';

interface AdvantagesSectionProps {
  content: HomepageContent['advantages'];
}

export function AdvantagesSection({content}: AdvantagesSectionProps) {
  return (
    <Section surface="white" bordered className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-medium text-indigo-700 sm:text-sm">Why AratReserve</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl [text-wrap:balance]">
          {content.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{content.description}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-slate-200/80 pt-10 md:grid-cols-2">
        {content.items.map((item) => (
          <div key={item.index} className="flex items-start gap-5">
            <span className="font-display text-sm font-semibold text-indigo-700 tabular-nums shrink-0 pt-0.5">
              {item.index}
            </span>
            <div>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
