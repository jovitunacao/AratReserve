import type {CompanySettings, HomepageContent, SiteNavItem} from '@/src/types/content';

export const COMPANY_SETTINGS: CompanySettings = {
  companyName: 'AratReserve Reservation Services',
  shortName: 'AratReserve',
  domain: 'aratreserve.com',
  tagline: 'Smarter Reservations. Better Business.',
  country: 'Philippines',
  contactEmail: null,
  businessAddress: null,
};

export const PRIMARY_NAV_ITEMS: SiteNavItem[] = [
  {label: 'About', to: '/about'},
  {label: 'Solutions', to: '/solutions'},
  {label: 'Products', to: '/products'},
  {label: 'Contact', to: '/contact'},
];

export const FOOTER_NAVIGATION = {
  company: [
    {label: 'Home', to: '/'},
    {label: 'About AratReserve', to: '/about'},
    {label: 'Solutions', to: '/solutions'},
    {label: 'Products', to: '/products'},
  ],
  legalDrafts: [
    {label: 'Privacy Policy (Draft)', to: '/legal/privacy'},
    {label: 'Terms of Use (Draft)', to: '/legal/terms'},
    {label: 'Cookie Information (Draft)', to: '/legal/cookies'},
  ],
  operations: [
    {label: 'Contact & Inquiries', to: '/contact'},
    {label: 'Admin Console', to: '/admin'},
  ],
};

export const HOMEPAGE_CONTENT: HomepageContent = {
  hero: {
    eyebrow: 'AratReserve Reservation Services · Philippines',
    headline: 'Powering the Future of Reservations.',
    tagline: 'Smarter Reservations. Better Business.',
    description:
      'A Philippine-based SaaS technology company building focused, independent reservation platforms tailored to how local service businesses operate.',
    primaryCtaLabel: 'Explore Products',
    primaryCtaTo: '/products',
    secondaryCtaLabel: 'Contact Us',
    secondaryCtaTo: '/contact',
  },
  introduction: {
    heading: 'Purpose-built reservation software, organized by industry.',
    lead: 'Instead of forcing every venue or clinic into a generic calendar, AratReserve develops dedicated SaaS products designed around the daily workflows of each sector.',
    body: 'Each AratReserve product operates on its own dedicated infrastructure, user accounts, and business rules. Businesses adopt the exact software built for their category without inheriting unrelated complexity.',
    principles: [
      {
        title: 'Vertical Specialization',
        detail:
          'Every product is scoped around real booking rules, resource schedules, and customer flows for a single industry.',
      },
      {
        title: 'Independent Infrastructure',
        detail:
          'Products run independently from the corporate website and from one another, keeping operations isolated and reliable.',
      },
      {
        title: 'Configurable Growth',
        detail:
          'New products and industry platforms are introduced cleanly as separate SaaS offerings without disrupting existing tools.',
      },
    ],
  },
  featuredProduct: {
    slug: 'courtbook',
    name: 'CourtBook',
    category: 'Sports & Recreation',
    status: 'in_development',
    statusLabel: 'In Development',
    description:
      'A modern sports facility management and booking platform designed for court owners and their customers.',
    highlights: [
      'Dedicated court and facility schedule management for venue operators.',
      'Streamlined reservation experience tailored to players and regular groups.',
      'Operates on independent product infrastructure outside the corporate portal.',
    ],
    externalUrl: null,
    externalCtaLabel: 'Visit CourtBook',
  },
  industries: {
    heading: 'Industries We Serve',
    description:
      'AratReserve is structured to support reservation-driven businesses across core service categories, starting with sports facilities and expanding into adjacent sectors.',
    items: [
      {
        id: 'sports-recreation',
        name: 'Sports & Recreation',
        availabilityLabel: 'CourtBook · In Development',
        summary:
          'Court scheduling, facility operations, and player reservation workflows for sports venues.',
        productReference: 'CourtBook',
      },
      {
        id: 'clinics',
        name: 'Clinics',
        availabilityLabel: 'Planned Vertical',
        summary:
          'Structured appointment windows, practitioner schedules, and patient visit coordination.',
      },
      {
        id: 'beauty-wellness',
        name: 'Beauty & Wellness',
        availabilityLabel: 'Planned Vertical',
        summary:
          'Service duration planning, staff availability, and recurring client booking support.',
      },
      {
        id: 'fitness-centers',
        name: 'Fitness Centers',
        availabilityLabel: 'Planned Vertical',
        summary:
          'Class capacity tracking, trainer sessions, and studio time-slot management.',
      },
      {
        id: 'hospitality',
        name: 'Hospitality',
        availabilityLabel: 'Planned Vertical',
        summary:
          'Room, table, and guest reservation coordination built for predictable operations.',
      },
      {
        id: 'facility-rentals',
        name: 'Facility Rentals',
        availabilityLabel: 'Planned Vertical',
        summary:
          'Shared space, studio, and venue availability management with clear booking rules.',
      },
    ],
  },
  advantages: {
    heading: 'Built for operational clarity.',
    description:
      'Our architecture prioritizes reliability, clear product boundaries, and software that matches how service businesses in the Philippines actually work.',
    items: [
      {
        index: '01.',
        title: 'Focused Product Scope',
        description:
          'Each product solves the scheduling and management needs of a specific industry rather than offering a bloated generalist tool.',
      },
      {
        index: '02.',
        title: 'Clean Separation of Systems',
        description:
          'AratReserve serves as the parent technology organization while individual SaaS products maintain isolated databases and accounts.',
      },
      {
        index: '03.',
        title: 'Local Market Context',
        description:
          'Designed in the Philippines with practical attention to local business workflows, mobile access, and clear communication.',
      },
      {
        index: '04.',
        title: 'Maintainable Foundations',
        description:
          'Built with modern web standards and modular architecture so products can evolve steadily as operator needs grow.',
      },
    ],
  },
  cta: {
    heading: 'Interested in what we are building?',
    description:
      'Reach out to AratReserve Reservation Services with product inquiries, partnership questions, or early interest in upcoming platforms.',
    primaryLabel: 'Send an Inquiry',
    primaryTo: '/contact',
    secondaryLabel: 'View Solutions',
    secondaryTo: '/solutions',
  },
};
