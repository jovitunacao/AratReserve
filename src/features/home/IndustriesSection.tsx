import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {Card} from '@/src/components/ui/Card';
import {Section} from '@/src/components/ui/Section';
import type {HomepageContent} from '@/src/types/content';

interface IndustriesSectionProps {
  content: HomepageContent['industries'];
}

export function IndustriesSection({content}: IndustriesSectionProps) {
  return (
    <Section surface="muted" bordered className="py-16 sm:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-indigo-700 sm:text-sm">Sector Focus</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl [text-wrap:balance]">
            {content.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {content.description}
          </p>
        </div>

        <Link
          to="/solutions"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-700 hover:text-indigo-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          <span>Explore all solutions</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((industry, index) => (
          <Card
            key={industry.id}
            className={`p-6 transition-colors duration-150 ${
              index === 0 ? 'sm:col-span-2 lg:col-span-1 border-indigo-200/90' : ''
            }`}
          >
            <p
              className={`text-xs font-medium ${
                industry.productReference ? 'text-indigo-700' : 'text-slate-500'
              }`}
            >
              {industry.availabilityLabel}
            </p>
            <h3 className="mt-2.5 text-lg font-semibold text-slate-900">{industry.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
