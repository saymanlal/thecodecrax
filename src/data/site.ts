import type { SiteConfig } from '@/types';

/**
 * MAIN SITE CONFIGURATION
 * Edit this file to change core website settings, text, and CTAs.
 * All values here are used across the entire website.
 */
export const siteConfig: SiteConfig = {
  name: 'thecodecraX',
  tagline: 'Building AI and Web3 communities across India.',
  description:
    'thecodecraX brings technology communities, events, learning opportunities, and builders together across regions of India — making AI and Web3 education accessible beyond the usual technology hubs.',
  logo: '/images/logo/logo.png',
  logoDark: '/images/logo/logo.png',
  favicon: '/images/logo/favicon.ico',

  hero: {
    headline: "AI and Web3 shouldn't depend on your pin code.",
    subheadline: 'Building the communities that build India.',
    description:
      'thecodecraX brings students, developers, builders, and curious minds together through events, workshops, communities, and collaborations across India.',
    primaryCTA: {
      label: 'Explore Our Work',
      href: '#events',
    },
    secondaryCTA: {
      label: 'Join the Community',
      href: '/join',
    },
  },

  about: {
    headline: "Technology access is uneven. Opportunity shouldn't be.",
    subheadline: 'Why thecodecraX exists.',
    body: [
      'Major technology ecosystems tend to concentrate in a handful of cities. The conversations about AI, the Web3 communities, the startup networks, the workshops — they cluster in places that already have the infrastructure.',
      "thecodecraX started because we believe that's a fixable problem. We work to create more access to AI education, Web3 knowledge, technology communities, builders, events, collaborations, and real opportunities — across regions of India, including cities and campuses that rarely see this kind of activity.",
      "We're not a startup. We're not a corporation. We're a community that believes the next generation of builders shouldn't have to relocate to participate in the conversation.",
    ],
    values: [
      {
        title: 'Access over exclusivity',
        description:
          'Technology education and community should not be gated by geography.',
      },
      {
        title: 'Community before content',
        description:
          'Real connections between builders matter more than follower counts.',
      },
      {
        title: 'Honest over hype',
        description:
          "We would rather show you what we've done than promise what we'll do.",
      },
      {
        title: 'Regional to global',
        description:
          'Start local. Think global. Build networks that scale across India and beyond.',
      },
    ],
  },

  contact: {
    email: 'hello@thecodecrax.com', // TODO: Update with real email
  },

  maxFeaturedEvents: 6,
  showStats: true,
  showTeam: true,
  showPartners: false, // Set to true when partners are added
};
