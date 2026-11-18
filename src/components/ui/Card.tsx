import type {ReactNode} from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
}

export function Card({children, className = '', subtle = false}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200/90 ${
        subtle ? 'bg-slate-50/70' : 'bg-white'
      } ${className}`}
    >
      {children}
    </div>
  );
}
