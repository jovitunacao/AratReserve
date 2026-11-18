import {ArrowLeft} from 'lucide-react';
import {LinkButton} from '@/src/components/ui/Button';
import {Section} from '@/src/components/ui/Section';

export function NotFoundPage() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-medium text-indigo-700">404 · Page Not Found</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          This page could not be found.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          The requested address does not match a page on AratReserve Reservation Services.
        </p>
        <div className="mt-8">
          <LinkButton to="/" variant="primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Homepage</span>
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
