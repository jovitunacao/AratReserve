import {Menu, X} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {LinkButton} from '@/src/components/ui/Button';
import {Logo} from '@/src/components/ui/Logo';
import {COMPANY_SETTINGS, PRIMARY_NAV_ITEMS} from '@/src/data/defaults';

export function Navbar() {
  const {pathname} = useLocation();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const mobileMenuOpen = menuPath === pathname;
  const headerRef = useRef<HTMLElement>(null);
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

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setMenuPath(null);
      }
    };

    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuPath(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktopMediaQuery.addEventListener('change', handleViewportChange);
    firstMobileLinkRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktopMediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Official Corporate Logo */}
        <Link
          to="/"
          onClick={() => setMenuPath(null)}
          aria-label={`${COMPANY_SETTINGS.companyName} — Home`}
          className="inline-flex shrink-0 items-center rounded-md py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          <Logo variant="full" size="md" priority />
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
              onClick={() => setMenuPath(null)}
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
