export type ProductStatus =
  | 'in_development'
  | 'available'
  | 'beta'
  | 'planned'
  | 'archived';

export interface SiteNavItem {
  label: string;
  to: string;
}

export interface CompanySettings {
  companyName: string;
  shortName: string;
  domain: string;
  tagline: string;
  country: string;
  contactEmail: string | null;
  businessAddress: string | null;
}

export interface ProductSummary {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  statusLabel: string;
  description: string;
  highlights: string[];
  externalUrl: string | null;
  externalCtaLabel: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  availabilityLabel: string;
  summary: string;
  productReference?: string;
}

export interface CompanyAdvantage {
  index: string;
  title: string;
  description: string;
}

export interface HomepageContent {
  hero: {
    eyebrow: string;
    headline: string;
    tagline: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaTo: string;
    secondaryCtaLabel: string;
    secondaryCtaTo: string;
  };
  introduction: {
    heading: string;
    lead: string;
    body: string;
    principles: Array<{
      title: string;
      detail: string;
    }>;
  };
  featuredProduct: ProductSummary;
  industries: {
    heading: string;
    description: string;
    items: IndustrySolution[];
  };
  advantages: {
    heading: string;
    description: string;
    items: CompanyAdvantage[];
  };
  cta: {
    heading: string;
    description: string;
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel: string;
    secondaryTo: string;
  };
}
