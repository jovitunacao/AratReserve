import type {ReactNode} from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: 'white' | 'muted' | 'dark';
  bordered?: boolean;
}

const surfaceStyles = {
  white: 'bg-white text-slate-900',
  muted: 'bg-slate-50/80 text-slate-900',
  dark: 'bg-slate-900 text-white',
};

export function Section({
  id,
  children,
  className = '',
  surface = 'white',
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${surfaceStyles[surface]} ${
        bordered ? 'border-t border-slate-200/80' : ''
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
