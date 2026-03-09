export interface IGrowth {
  title: string;
  description?: string;
  badge?: string;
  tags?: string[];
  fcontent?: string;
  tcontent?: string;
}
export interface IStudies {
  logo: string;
  title: string;
  subtitle: string;
  badge?: string;
  background?: string;
}

export type SpecializedIcon =
  | 'authority'
  | 'call'
  | 'academy'
  | 'seo'
  | 'website'
  | 'dashboard'
  | 'smile'
  | 'cta';

export interface ISpecialized {
  title: string;
  icon: SpecializedIcon;
  ctaLabel?: string;
}

export const growth: IGrowth[] = [
  {
    title: 'We Create Authority Driven Ads',
    description:
      'We produce custom video campaigns that position you as the trusted expert — not the cheapest option in town. This attracts serious buyers and filters out price shoppers before they ever convert.',
  },
  {
    title: 'We Call Every Lead',
    description:
      'Every implant lead is contacted within 20 seconds, handled by our dental-trained team, and screened for income, credit, and readiness. A $50 deposit is required before anything hits your calendar.',
    badge:
      'Your front desk stays focused on patients in the office. We handle everything else.',
  },
  {
    title: 'We Train Your TC to Be an Elite Closer',
    description:
      'Most practices close around 15% on full-arch consults. We train your Treatment Coordinator to confidently close 40%+ — without pressure, discounts, or the doctor carrying every case. Same budget, much higher production.',
  },
  {
    title: 'We Provide You With Total Transparency',
    tcontent: 'You get real-time visibility into:',
    fcontent: 'No guessing. No vanity metrics. What you measure, you multiply.',
    tags: ['Ad spend', 'Calls', 'Consults', 'Arches Closed'],
  },
];

export const studies: IStudies[] = [
  {
    logo: '/star-dental.svg',
    background: '/studies-place-1.svg',
    title: 'Star Dental Implant & Cosmetic Center',
    subtitle: 'Roseville, CA',
    badge: '17.25x',
  },
  {
    logo: '/innovative-dental.svg',
    background: '/studies-place-2.svg',
    title: 'Innovative Dental Implant Center',
    subtitle: 'Springfield, MO',
    badge: '10.75x',
  },
  {
    logo: '/national-dental.svg',
    background: '/studies-place-3.svg',
    title: 'National Dental Implant Specialists',
    subtitle: 'New York City, NY',
    badge: '10.03x',
  },
];

export const specialized: ISpecialized[] = [
  {
    title: 'Authority Content & Video Production',
    icon: 'authority',
  },
  {
    title: 'Treatment Setters Call Center',
    icon: 'call',
  },
  {
    title: 'Full-Arch Academy Sales Training',
    icon: 'academy',
  },
  {
    title: 'AI-Driven Implant SEO',
    icon: 'seo',
  },
  {
    title: 'High-Conversion Website Builds',
    icon: 'website',
  },
  {
    title: 'Revenue/Performance Dashboards',
    icon: 'dashboard',
  },
  {
    title: 'Smile Reveal Software',
    icon: 'smile',
  },
  {
    title: 'Learn More About The Implant Engine Systems',
    icon: 'cta',
    ctaLabel: 'LEARN MORE',
  },
];
