import type { ImageMetadata } from 'astro';

// vertical icons
import vertEducation from '../assets/img/vert-education.png';
import vertFinance from '../assets/img/vert-finance.png';
import vertNutra from '../assets/img/vert-nutra.png';
import vertSaas from '../assets/img/vert-saas.png';
import vertCrypto from '../assets/img/vert-crypto.png';
import vertIgaming from '../assets/img/vert-igaming.png';
import vertMainstream from '../assets/img/vert-mainstream.png';
import vertLeadgen from '../assets/img/vert-leadgen.png';

// traffic-source icons
import srcPropeller from '../assets/img/src-propellerads.png';
import srcGoogle from '../assets/img/src-googleads.png';
import srcApple from '../assets/img/src-applesearch.png';
import srcMeta from '../assets/img/src-metaads.png';
import srcTiktok from '../assets/img/src-tiktokads.png';
import srcNative from '../assets/img/src-nativeads.png';
import srcPush from '../assets/img/src-push.png';
import srcPop from '../assets/img/src-pop.png';

// partner logos
import partner1 from '../assets/img/partner1.png';
import partner2 from '../assets/img/partner2.png';
import partner3 from '../assets/img/partner3.png';
import partner4 from '../assets/img/partner4.png';
import partner5 from '../assets/img/partner5.png';
import partner6 from '../assets/img/partner6.png';
import partner7 from '../assets/img/partner7.png';

// decorative 3D art
import rmUnder from '../assets/img/rm-under.png';
import rmUpper from '../assets/img/rm-upper.png';
import decoLightning from '../assets/img/deco-lightning.png';
import decoMonitoring from '../assets/img/deco-monitoring.png';
import decoMaximize from '../assets/img/deco-maximize.png';
import decoRocket from '../assets/img/deco-rocket.png';

export const art = {
  rmUnder,
  rmUpper,
  decoLightning,
  decoMonitoring,
  decoMaximize,
  decoRocket,
};

/* -------------------------------------------------------------------------- */

export const site = {
  /** Public marketing brand. */
  brand: 'Rovex Media',
  /** Legal entity used in Terms/Privacy - intentional, do not normalize. */
  legalEntity: 'Rhine Media',
  legalDomain: 'rhine-media.com',
  url: 'https://rovex-media.com',
  email: 'hello@rovex-media.com',
  telegram: '@rovexmedia',
  telegramUrl: 'https://t.me/rovexmedia',
  tagline:
    'Premium performance media buying for the most ambitious advertisers and affiliate partners.',
  legalUpdated: '1 March 2026',
};

export const nav = [
  { label: 'Verticals', href: '/#verticals' },
  { label: 'Traffic Sources', href: '/#sources' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Why Us', href: '/#why' },
  { label: 'Contact', href: '/contact' },
];

export const hero = {
  subtitleLead: 'We buy traffic for',
  subtitleAccent: 'Finance, Nutra, SaaS, Crypto Offers, iGaming',
  subtitleTail:
    'and more — across all major channels, in every major GEO, at premium scale',
};

export const stats = [
  { value: '2.2B+', label: 'Ad Impressions / Month', sub: 'Across all traffic sources' },
  { value: '280%', label: 'Average ROI', sub: 'Verified by partners' },
  { value: '36+', label: 'Global GEOs', sub: 'Tier-1 & emerging markets' },
];

export interface Feature {
  strong: string;
  rest: string;
}

export const ctaGrow = {
  title: 'Ready to <span class="accent">Grow</span> Your Revenue?',
  desc: 'Join the brands and affiliate partners who trust Rovex Media to deliver performance at scale, in every major GEO',
  features: [
    { strong: 'Fast Campaign Launch —', rest: 'Live in under 48 hours' },
    { strong: 'Dedicated Account Manager —', rest: 'Direct Telegram/Skype access' },
    { strong: 'Real-Time Reporting —', rest: 'Full transparency on every dollar' },
  ] as Feature[],
};

export const ctaScale = {
  title: 'Ready to <span class="accent">Scale</span><br>Your Campaigns?',
  desc: 'Partner with a team that treats your budget like its own — full accountability, direct communication and measurable results from day one',
  features: [
    { strong: 'Multi-GEO Scaling —', rest: 'Launch in 60+ markets instantly' },
    { strong: 'Transparent Pricing —', rest: 'No hidden fees, ever' },
    { strong: '24/7 Monitoring —', rest: 'Always watching your spend' },
  ] as Feature[],
};

export const ctaMax = {
  eyebrow: "Let's Scale Together",
  title: 'Ready to <span class="accent">Maximize</span> Your ROI?',
  desc: 'Join the brands and affiliate partners who trust Rovex Media to deliver performance at scale, in every major GEO',
};

export interface Vertical {
  title: string;
  desc: string;
  badge: string;
  img: ImageMetadata;
  grad?: boolean;
}

export const verticals: Vertical[] = [
  { title: 'Education', desc: 'Online courses, e-learning and digital education offers. Performance traffic at scale.', badge: 'SCALABLE GROWTH', img: vertEducation },
  { title: 'Finance', desc: 'Fintech products, investment platforms and financial services. Performance campaigns across high-value GEOs.', badge: 'PREMIUM TRAFFIC', img: vertFinance },
  { title: 'Nutra', desc: 'Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.', badge: 'PREMIUM GEOS', img: vertNutra, grad: true },
  { title: 'SaaS', desc: 'Software products, subscriptions and digital solutions. User acquisition campaigns built for scalable growth.', badge: 'GROWTH FOCUSED', img: vertSaas },
  { title: 'Crypto Offers', desc: 'Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.', badge: 'EMERGING', img: vertCrypto },
  { title: 'iGaming', desc: 'Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.', badge: 'FAST GROWTH', img: vertIgaming },
  { title: 'Mainstream', desc: 'App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.', badge: 'VERSATILE', img: vertMainstream },
  { title: 'Lead Generation', desc: 'Qualified traffic campaigns across multiple verticals. Conversion-focused funnels for business growth.', badge: 'QUALIFIED USERS', img: vertLeadgen },
];

export interface Source {
  title: string;
  sub: string;
  img: ImageMetadata;
}

export const sources: Source[] = [
  { title: 'PropellerAds', sub: 'Push / Pop / OnClick', img: srcPropeller },
  { title: 'Google Ads', sub: 'Search / Display / YouTube', img: srcGoogle },
  { title: 'Apple Search Ads', sub: 'iOS App Install', img: srcApple },
  { title: 'Meta Ads', sub: 'Facebook / Instagram', img: srcMeta },
  { title: 'TikTok Ads', sub: 'In-Feed / TopView / Spark', img: srcTiktok },
  { title: 'Native Ads', sub: 'Taboola / Outbrain', img: srcNative },
  { title: 'Push Notifications', sub: 'Web & In-App Push', img: srcPush },
  { title: 'Pop Traffic', sub: 'Popunder / Interstitial', img: srcPop },
];

export const partners: ImageMetadata[] = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7,
];

export interface Faq {
  q: string;
  a: string;
}

// Q1 answer is verbatim from the design; the remaining answers were written to
// match the brand voice (the prototype left them collapsed with no copy).
export const faqs: Faq[] = [
  {
    q: 'What verticals does Rhine Media specialise in?',
    a: 'We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals. Our team has deep domain expertise in each of these niches and maintains direct relationships with top publishers and affiliate networks across all major GEOs.',
  },
  {
    q: 'What is the minimum monthly budget to work with you?',
    a: 'We typically partner with advertisers and affiliate teams running from $10,000 in monthly ad spend. That threshold lets us assign a dedicated buyer, build proper tracking and reach statistically meaningful volume quickly. For promising offers in high-value GEOs we are open to structured test budgets — talk to us and we will find a sensible starting point.',
  },
  {
    q: 'How quickly can you launch a campaign?',
    a: 'Most campaigns go live within 48 hours of finalising creatives, tracking and offer details. Straightforward setups on channels where we already hold direct relationships can start the same day; larger multi-GEO launches may take a few days of preparation.',
  },
  {
    q: 'Do you work on a CPA, CPL or revenue share basis?',
    a: 'All three. We structure commercials around whatever aligns incentives best for your offer — CPA, CPL, revenue share or a hybrid retainer plus performance model. Terms are agreed up front in a written cooperation agreement with no hidden fees.',
  },
  {
    q: 'Which GEOs do you cover?',
    a: 'We buy across 36+ markets spanning Tier-1 (US, UK, CA, AU, DACH, Nordics), Tier-2 across Europe, LATAM and APAC, and selected emerging markets. If a GEO matters to your offer and the traffic exists, we can reach it.',
  },
  {
    q: 'What reporting and tracking do you provide?',
    a: 'You get real-time dashboards covering spend, conversions, ROI and channel-level breakdowns, plus a dedicated manager reachable on Telegram or Skype. We integrate with your tracker of choice — Voluum, Binom, RedTrack and others — so every dollar stays fully transparent.',
  },
];

export const contact = {
  title: 'Contact<br>Rovex <span class="accent">Media</span>',
  desc: 'Ready to start? Have a question? Our team responds within 24 hours.',
  subhead: "Let's Build Something<br><span class=\"accent\">Profitable Together</span>",
  subdesc:
    "Whether you're an advertiser looking to scale your offers, an affiliate network seeking a reliable buying team, or a brand ready to expand globally — we want to hear from you.",
  details: [
    { label: 'Telegram', value: '@rovexmedia' },
    { label: 'Email', value: 'hello@rovex-media.com' },
    { label: 'Business Hours', value: 'Mon – Fri · 09:00 – 20:00 CET' },
    { label: 'Response Time', value: 'Typically within 2–4 business hours' },
  ],
};

export const verticalOptions = [
  'Education', 'Finance', 'Nutra', 'SaaS', 'Crypto Offers',
  'iGaming', 'Mainstream', 'Lead Generation', 'Dating', 'Gambling', 'Other',
];

export const budgetOptions = [
  'Under $10,000',
  '$10,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000+',
];

export const footer = {
  columns: [
    {
      heading: 'Verticals',
      links: [
        { label: 'Education', href: '/#verticals' },
        { label: 'Finance', href: '/#verticals' },
        { label: 'Nutra', href: '/#verticals' },
        { label: 'SaaS', href: '/#verticals' },
        { label: 'Crypto Offers', href: '/#verticals' },
        { label: 'iGaming', href: '/#verticals' },
        { label: 'Mainstream', href: '/#verticals' },
        { label: 'Lead Generation', href: '/#verticals' },
      ],
    },
    {
      heading: 'Traffic Sources',
      links: [
        { label: 'Google Ads', href: '/#sources' },
        { label: 'Meta Ads', href: '/#sources' },
        { label: 'TikTok Ads', href: '/#sources' },
        { label: 'PropellerAds', href: '/#sources' },
        { label: 'Native Ads', href: '/#sources' },
        { label: 'Push & Pop', href: '/#sources' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Rovex Media', href: '/#why' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Partners', href: '/#partners' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  legal: [
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: [
    { label: 'Telegram', href: 'https://t.me/rovexmedia', icon: 'telegram' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'X', href: '#', icon: 'x' },
    { label: 'Discord', href: '#', icon: 'discord' },
  ],
};
