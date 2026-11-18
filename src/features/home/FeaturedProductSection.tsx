import {ArrowRight, ArrowUpRight} from 'lucide-react';
import {ExternalLinkButton, LinkButton} from '@/src/components/ui/Button';
import {Card} from '@/src/components/ui/Card';
import {Section} from '@/src/components/ui/Section';
import type {ProductSummary} from '@/src/types/content';

interface FeaturedProductSectionProps {
  product: ProductSummary;
}

export function FeaturedProductSection({product}: FeaturedProductSectionProps) {
  return (
    <Section surface="white" bordered className="py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium text-indigo-700 sm:text-sm">Featured Product</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl [text-wrap:balance]">
          Introducing {product.name}
        </h2>
      </div>

      <Card className="overflow-hidden p-6 sm:p-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-700">{product.statusLabel}</span>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {product.name}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {product.description}
            </p>

            <ul className="mt-6 space-y-3 border-t border-slate-200/80 pt-6 text-sm text-slate-700">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <LinkButton to={`/products/${product.slug}`} variant="primary">
                <span>View Product Overview</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </LinkButton>

              {product.externalUrl ? (
                <ExternalLinkButton href={product.externalUrl} variant="secondary">
                  <span>{product.externalCtaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ExternalLinkButton>
              ) : (
                <LinkButton to="/contact" variant="secondary">
                  <span>Request Updates</span>
                </LinkButton>
              )}
            </div>

            {!product.externalUrl && (
              <p className="mt-4 text-xs text-slate-500">
                External product URL is configurable and will be linked here once confirmed.
              </p>
            )}
          </div>

          <div className="lg:col-span-5">
            <div
              className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-200/80 bg-slate-50 p-6"
              aria-label="CourtBook architectural court schematic"
            >
              <svg
                viewBox="0 0 360 270"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Minimalist court facility layout graphic"
              >
                <rect x="16" y="16" width="328" height="238" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
                <rect x="44" y="42" width="272" height="186" rx="2" stroke="#3730A3" strokeWidth="1.5" />
                <line x1="180" y1="42" x2="180" y2="228" stroke="#CBD5E1" strokeWidth="1.5" />
                <circle cx="180" cy="135" r="32" stroke="#3730A3" strokeWidth="1.5" strokeOpacity="0.45" />
                <rect x="44" y="88" width="48" height="94" stroke="#94A3B8" strokeWidth="1.2" />
                <rect x="268" y="88" width="48" height="94" stroke="#94A3B8" strokeWidth="1.2" />
                <line x1="92" y1="42" x2="92" y2="228" stroke="#E2E8F0" strokeDasharray="4 4" />
                <line x1="268" y1="42" x2="268" y2="228" stroke="#E2E8F0" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
