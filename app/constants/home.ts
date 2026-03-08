export interface IGrowth {
  title: string;
  description?: string;
  badge?: string;
  tags?: string[];
  fcontent?: string;
  tcontent?: string;
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
