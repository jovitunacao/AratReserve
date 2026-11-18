import {Link} from 'react-router-dom';
import {Logo} from '@/src/components/ui/Logo';
import {COMPANY_SETTINGS, FOOTER_NAVIGATION} from '@/src/data/defaults';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/70 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              aria-label={`${COMPANY_SETTINGS.companyName} — Home`}
              className="inline-flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            >
              <Logo variant="full" size="lg" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              {COMPANY_SETTINGS.tagline} A Philippine-based SaaS technology company building
              focused reservation platforms.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              {COMPANY_SETTINGS.domain}
              <span aria-hidden="true"> · </span>
              {COMPANY_SETTINGS.country}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="text-xs font-semibold tracking-wide text-slate-900">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAVIGATION.company.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wide text-slate-900">
                Legal & Privacy
              </h2>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAVIGATION.legalDrafts.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold tracking-wide text-slate-900">
                Connect
              </h2>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAVIGATION.operations.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {COMPANY_SETTINGS.companyName}. All rights reserved.
          </p>
          <p>
            Corporate website · Independent SaaS product architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
