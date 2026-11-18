import {ArrowLeft} from 'lucide-react';
import {LinkButton} from '@/src/components/ui/Button';
import {Card} from '@/src/components/ui/Card';
import {Section} from '@/src/components/ui/Section';

interface StagePlaceholderProps {
  routePath: string;
  title: string;
  scheduledStage: string;
  summary: string;
  plannedScope: string[];
}

export function StagePlaceholder({
  routePath,
  title,
  scheduledStage,
  summary,
  plannedScope,
}: StagePlaceholderProps) {
  return (
    <Section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
          <span>Route: {routePath}</span>
          <span aria-hidden="true">·</span>
          <span>Stage 1 Scaffold</span>
          <span aria-hidden="true">·</span>
          <span className="text-indigo-700">{scheduledStage}</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{summary}</p>

        <Card subtle className="mt-8 p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-slate-900">
            Unfinished Route Notice
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            This route is intentionally scaffolded during Stage 1 to validate application
            navigation and routing boundaries. Full functionality is scheduled for{' '}
            <span className="font-medium text-slate-900">{scheduledStage}</span>.
          </p>

          <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-5 text-sm text-slate-700">
            {plannedScope.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <LinkButton to="/" variant="primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Homepage</span>
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
