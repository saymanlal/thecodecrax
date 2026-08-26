import type { SiteConfig } from '@/types';

/**
 * MAIN SITE CONFIGURATION
 * ============================================================
 * Edit this file to update the logo, community name, tagline,
 * 3-line mission statement, and CTA links.
 * ============================================================
 */
export const siteConfig: SiteConfig = {
  name: 'thecodecraX',
  tagline: 'A dynamic community for AI and Web3',
  
  // Perfect legitimate eye-catching mission (3 lines)
  mission: [
    'Bridging the gap between cutting-edge AI & Web3 ecosystems and India’s emerging builder communities.',
    'Empowering developers, students, and creators through hands-on hack nights, technical workshops, and global protocol collaborations.',
    'Proving that world-class tech craftsmanship and future-defining innovation are never restricted by your pin code.',
  ],

  description:
    'thecodecraX is a builder-first tech community bringing Web3 protocols, AI models, hands-on workshops, and developer opportunities directly to cities and campuses across India.',
  
  logo: '/logo.jpg',

  hero: {
    primaryCTA: {
      label: 'Explore Highlights',
      href: '#highlights',
    },
    secondaryCTA: {
      label: 'Proof Of Work',
      href: '#proof-of-work',
    },
  },

  contact: {
    email: 'thecodecrax@gmail.com',
  },
};
