import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface ActionButtonProps extends BaseProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  onClick?: () => void;
}

interface ExternalLinkButtonProps extends BaseProps {
  href: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-700 text-white hover:bg-indigo-800 active:bg-indigo-900 border border-transparent shadow-xs',
  secondary:
    'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400',
  ghost: 'bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-transparent',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 min-h-[44px] sm:min-h-[40px] text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:pointer-events-none';

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  onClick,
  disabled,
  'aria-label': ariaLabel,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  className = '',
  to,
  onClick,
  children,
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ExternalLinkButton({
  variant = 'primary',
  className = '',
  href,
  children,
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
