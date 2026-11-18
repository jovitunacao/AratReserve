import {COMPANY_SETTINGS} from '@/src/data/defaults';

export type LogoVariant = 'full' | 'symbol';
export type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  alt?: string;
  decorative?: boolean;
  priority?: boolean;
  className?: string;
}

const fullSizeClasses: Record<LogoSize, string> = {
  sm: 'h-6 w-auto',
  md: 'h-7 sm:h-8 w-auto',
  lg: 'h-8 sm:h-9 w-auto',
};

const symbolSizeClasses: Record<LogoSize, string> = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

export function Logo({
  variant = 'full',
  size = 'md',
  alt = COMPANY_SETTINGS.companyName,
  decorative = false,
  priority = false,
  className = '',
}: LogoProps) {
  const isSymbol = variant === 'symbol';
  const webpSrc = isSymbol ? '/brand/aratreserve-symbol.webp' : '/brand/aratreserve-logo.webp';
  const pngSrc = isSymbol ? '/brand/aratreserve-symbol.png' : '/brand/aratreserve-logo.png';
  const intrinsicWidth = isSymbol ? 512 : 1068;
  const intrinsicHeight = isSymbol ? 512 : 200;
  const sizeClass = isSymbol ? symbolSizeClasses[size] : fullSizeClasses[size];

  return (
    <picture className="inline-flex shrink-0 items-center">
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={pngSrc}
        alt={decorative ? '' : alt}
        aria-hidden={decorative || undefined}
        width={intrinsicWidth}
        height={intrinsicHeight}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={`block select-none object-contain ${sizeClass} ${className}`}
      />
    </picture>
  );
}
