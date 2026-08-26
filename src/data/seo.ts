import type { SEOConfig } from '@/types';

/**
 * SEO CONFIGURATION
 * Controls how the website appears in search engines and social media previews.
 * Update ogImage and twitterImage paths after adding real images.
 */
export const seoConfig: SEOConfig = {
  title: 'thecodecraX',
  titleTemplate: '%s | thecodecraX',
  description:
    'thecodecraX brings AI and Web3 communities, events, workshops, and opportunities across India — making technology education accessible beyond the usual hubs.',
  keywords: [
    'AI community India',
    'Web3 community India',
    'technology events India',
    'blockchain India',
    'AI education India',
    'developer community India',
    'thecodecraX',
    'Jabalpur tech',
    'India tech meetups',
    'Web3 India',
  ],
  ogImage: '/images/og/og-default.jpg', // TODO: Add a real OG image (1200x630px)
  twitterImage: '/images/og/twitter-default.jpg', // TODO: Add a real Twitter card image
  twitterHandle: '@thecodecrax', // TODO: Update if Twitter handle changes
  siteUrl: 'https://thecodecrax.vercel.app',
  locale: 'en_IN',
};
