import {useParams} from 'react-router-dom';
import {StagePlaceholder} from '@/src/components/ui/StagePlaceholder';

interface PlaceholderRouteProps {
  variant:
    | 'about'
    | 'solutions'
    | 'products'
    | 'product-detail'
    | 'contact'
    | 'legal-privacy'
    | 'legal-terms'
    | 'legal-cookies'
    | 'admin';
}

export function RoutePlaceholderPage({variant}: PlaceholderRouteProps) {
  const {slug} = useParams();

  switch (variant) {
    case 'about':
      return (
        <StagePlaceholder
          routePath="/about"
          title="About AratReserve"
          scheduledStage="Stage 2"
          summary="Corporate overview, mission, vision, story, team directory, and factual company information."
          plannedScope={[
            'Company overview, mission, and vision statements',
            'Leadership and team directory (CMS-driven in Stage 3)',
            'Verified corporate profile without fabricated claims',
          ]}
        />
      );
    case 'solutions':
      return (
        <StagePlaceholder
          routePath="/solutions"
          title="Industry Solutions"
          scheduledStage="Stage 2"
          summary="Detailed vertical capabilities across sports and recreation, clinics, beauty and wellness, fitness centers, hospitality, and facility rentals."
          plannedScope={[
            'Clear separation of active/in-development vs. planned vertical products',
            'Sector-specific reservation workflow overviews',
            'Direct pathways to product pages and corporate inquiries',
          ]}
        />
      );
    case 'products':
      return (
        <StagePlaceholder
          routePath="/products"
          title="Product Directory"
          scheduledStage="Stage 2 & Stage 3"
          summary="Configurable product directory starting with CourtBook (In Development) and structured for code-free product publishing."
          plannedScope={[
            'Category filtering and product cards driven by Supabase in Stage 3',
            'CourtBook configured as the flagship product (In Development)',
            'Dynamic SEO metadata strategy compatible with Cloudflare Pages',
          ]}
        />
      );
    case 'product-detail':
      return (
        <StagePlaceholder
          routePath={`/products/${slug ?? 'detail'}`}
          title={`Product Detail${slug ? `: ${slug}` : ''}`}
          scheduledStage="Stage 2 & Stage 3"
          summary="Dedicated product overview page with screenshots, feature breakdown, status, and configurable external product link."
          plannedScope={[
            'Dynamic slug lookup backed by AratReserve Supabase catalog',
            'Configurable external URL (no shared auth or booking engine)',
            'Per-product Open Graph and canonical metadata',
          ]}
        />
      );
    case 'contact':
      return (
        <StagePlaceholder
          routePath="/contact"
          title="Contact & Inquiries"
          scheduledStage="Stage 2 & Stage 5"
          summary="Corporate inquiry intake with validation, privacy consent, spam protection, and Resend admin notifications."
          plannedScope={[
            'Accessible inquiry form with category selection and privacy consent (Stage 2)',
            'Server-side validation and Cloudflare Turnstile spam protection (Stage 5)',
            'Secure Supabase storage and Resend notification delivery (Stage 5)',
          ]}
        />
      );
    case 'legal-privacy':
      return (
        <StagePlaceholder
          routePath="/legal/privacy"
          title="Privacy Policy (Draft)"
          scheduledStage="Stage 2"
          summary="Editable corporate privacy notice draft marked for owner review prior to public finalization."
          plannedScope={[
            'Draft privacy disclosures tailored to inquiry data collection',
            'Explicit owner-review banner until approved in /admin',
            'CMS-editable content integration in Stage 3 & Stage 4',
          ]}
        />
      );
    case 'legal-terms':
      return (
        <StagePlaceholder
          routePath="/legal/terms"
          title="Terms of Use (Draft)"
          scheduledStage="Stage 2"
          summary="Editable corporate website terms draft marked for owner review prior to public finalization."
          plannedScope={[
            'Draft corporate website terms of use',
            'Clear distinction between corporate portal and independent SaaS products',
            'Explicit owner-review notice before publication',
          ]}
        />
      );
    case 'legal-cookies':
      return (
        <StagePlaceholder
          routePath="/legal/cookies"
          title="Cookie Information (Draft)"
          scheduledStage="Stage 2"
          summary="Editable cookie and technical storage notice draft marked for owner review prior to publication."
          plannedScope={[
            'Transparent disclosure of essential security and session cookies',
            'Explicit owner-review notice until approved',
          ]}
        />
      );
    case 'admin':
      return (
        <StagePlaceholder
          routePath="/admin"
          title="Administration Console"
          scheduledStage="Stage 4 & Stage 5"
          summary="Protected Supabase Auth administration workspace for Super Admin, Content Admin, and Support Admin roles."
          plannedScope={[
            'Manually provisioned admin authentication (no public registration)',
            'Product CRUD, team management, and CMS content editing (Stage 4)',
            'Inquiry workflow, Media Library, Company Settings, and Audit Logs (Stage 5)',
          ]}
        />
      );
  }
}
