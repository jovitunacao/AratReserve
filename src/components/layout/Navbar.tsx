import {Menu, X} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {LinkButton} from '@/src/components/ui/Button';
import {COMPANY_SETTINGS, PRIMARY_NAV_ITEMS} from '@/src/data/defaults';

export function Navbar() {
  const {pathname} = useLocation();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const mobileMenuOpen = menuPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuPath(null);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    firstMobileLinkRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single clean wordmark */}
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          {COMPANY_SETTINGS.shortName}
        </Link>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({isActive}) =>
                `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 ${
                  isActive
                    ? 'text-indigo-700 underline decoration-indigo-600 decoration-2 underline-offset-8'
                    : 'text-slate-600 hover:text-slate-950 hover:underline hover:decoration-slate-300 hover:underline-offset-8'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center shrink-0">
          <div className="hidden md:block">
            <LinkButton to="/contact" variant="primary" className="py-2 px-4 text-xs sm:text-sm">
              Get in Touch
            </LinkButton>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuPath((prev) => (prev === pathname ? null : pathname))}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="border-t border-slate-200/80 bg-white px-4 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {PRIMARY_NAV_ITEMS.map((item, idx) => (
              <NavLink
                key={item.to}
                ref={idx === 0 ? firstMobileLinkRef : undefined}
                to={item.to}
                onClick={() => setMenuPath(null)}
                className={({isActive}) =>
                  `flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-200/80 pt-4">
            <LinkButton
              to="/contact"
              variant="primary"
              className="w-full justify-center"
            >
              Get in Touch
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  );
}
