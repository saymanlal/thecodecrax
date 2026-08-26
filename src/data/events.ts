import type { Event } from '@/types';

/**
 * EVENTS & PROOF OF WORK DATA
 * ============================================================
 * Edit, add, or remove events here.
 * Set featured: true to highlight in the top Highlights section.
 * All fields like event links, Instagram post URLs, audience,
 * collaborators, and photos can be changed directly in this file.
 * ============================================================
 */
export const events: Event[] = [
  {
    id: 'event-001',
    slug: 'metamask-community-builder-meetup-2026',
    title: 'MetaMask Community Builder Meetup',
    shortDescription:
      'Organised by our team @mpdao__ & @thecodecrax in February 2026, bringing Web3 builders, wallet architects, and contributors together.',
    description:
      'The MetaMask Community Builder Meetup was organised by our team @mpdao__ & @thecodecrax in February 2026. We focused on Ethereum tooling, MetaMask Snaps development, Web3 security, and onboarding developers to decentralized protocols.',
    date: '2026-02-15',
    location: {
      city: 'Jabalpur / MP',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['Web3', 'MetaMask', 'Community'],
    coverImage: '/images/events/event-001/cover.jpg',
    gallery: [
      '/images/events/event-001/photo-1.jpg',
      '/images/events/event-001/photo-2.jpg',
    ],
    tags: ['MetaMask', 'Ethereum', 'Web3', 'MPDAO', 'thecodecraX', 'Builders'],
    eventUrl: 'https://www.instagram.com/p/DbxgaQZDgpD/',
    registrationUrl: '',
    instagramPostUrl:
      'https://www.instagram.com/p/DbxgaQZDgpD/?utm_source=ig_web_button_share_sheet&igsi=MzRlODBiNWFlZA==',
    audience: '85+ Developers & Students',
    collaborators: [
      { name: 'MPDAO', handle: '@mpdao__', url: 'https://instagram.com/mpdao__' },
      { name: 'thecodecraX', handle: '@thecodecrax', url: 'https://instagram.com/thecodecrax' },
      { name: 'MetaMask Community', handle: '@metamask', url: 'https://metamask.io' },
    ],
    featured: true,
    published: true,
  },
  {
    id: 'event-002',
    slug: 'story-protocol-data-foundation-meetup-2025',
    title: 'Story Protocol & Data Foundation Meetup',
    shortDescription:
      'In November 2025, @mpdao__ & @thecodecrax hosted a community meetup on Story Networking Protocol (rebranded to @datafdn).',
    description:
      'In November 2025, our team @mpdao__ & @thecodecrax hosted a community meetup on Story Networking Protocol (now @datafdn on X). The session explored programmable IP graphs, data monetization, and scalable protocol infrastructure.',
    date: '2025-11-20',
    location: {
      city: 'Jabalpur / MP',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['Web3', 'Protocols', 'Story Protocol'],
    coverImage: '/images/events/event-002/cover.jpg',
    gallery: [
      '/images/events/event-002/photo-1.jpg',
    ],
    tags: ['StoryProtocol', 'DataFoundation', 'Web3', 'IP', 'MPDAO', 'thecodecraX'],
    eventUrl: 'https://www.instagram.com/p/DbZNzwuEjEa/',
    registrationUrl: '',
    instagramPostUrl:
      'https://www.instagram.com/p/DbZNzwuEjEa/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==',
    audience: '70+ Protocol Engineers',
    collaborators: [
      { name: 'MPDAO', handle: '@mpdao__', url: 'https://instagram.com/mpdao__' },
      { name: 'thecodecraX', handle: '@thecodecrax', url: 'https://instagram.com/thecodecrax' },
      { name: 'Data Foundation (Story)', handle: '@datafdn', url: 'https://x.com/datafdn' },
    ],
    featured: true,
    published: true,
  },
  {
    id: 'event-003',
    slug: 'vercel-v0-zero-to-agents-workshop-2025',
    title: 'Vercel: v0 Zero to Agents Workshop',
    shortDescription:
      'Hands-on technical workshop with @vercel exploring v0, prompt engineering, generative UI, and autonomous AI agents by @mpdao__ & @thecodecrax.',
    description:
      'April session with @vercel: v0 Zero to Agents Workshop, by @mpdao__ & co-host @thecodecrax. Covered generative UI prototyping, LLM orchestration, and full-stack AI deployment on Vercel.',
    date: '2025-04-18',
    location: {
      city: 'Bhopal / Jabalpur',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['AI', 'Vercel', 'AI Agents', 'Workshop'],
    coverImage: '/images/events/event-003/cover.jpg',
    gallery: [
      '/images/events/event-003/photo-1.jpg',
    ],
    tags: ['Vercel', 'v0', 'AI Agents', 'LLMs', 'Nextjs', 'thecodecraX', 'MPDAO'],
    eventUrl: 'https://www.instagram.com/p/DbVHEWokquJ/',
    registrationUrl: '',
    instagramPostUrl:
      'https://www.instagram.com/p/DbVHEWokquJ/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==',
    audience: '120+ AI Builders',
    collaborators: [
      { name: 'Vercel', handle: '@vercel', url: 'https://vercel.com' },
      { name: 'MPDAO', handle: '@mpdao__', url: 'https://instagram.com/mpdao__' },
      { name: 'thecodecraX', handle: '@thecodecrax', url: 'https://instagram.com/thecodecrax' },
    ],
    featured: true,
    published: true,
  },
  {
    id: 'event-004',
    slug: 'ai-agents-hands-on-hack-night',
    title: 'Autonomous AI Agents & LLM Hack Night',
    shortDescription:
      'Deep dive into multi-agent systems, tool calling, and building production-ready AI applications.',
    description:
      'A hands-on build session where students and engineers learned how to structure agentic memory, prompt pipelines, and deploy serverless AI workflows directly to cloud environments.',
    date: '2025-08-12',
    location: {
      city: 'Indore',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['AI', 'Hack Night', 'LLMs'],
    coverImage: '/images/events/event-004/cover.jpg',
    gallery: [],
    tags: ['AI', 'Agents', 'Indore', 'Hackathon'],
    eventUrl: 'https://www.instagram.com/thecodecrax/?hl=en',
    instagramPostUrl: 'https://www.instagram.com/thecodecrax/?hl=en',
    audience: '60+ Developers',
    collaborators: [
      { name: 'thecodecraX', handle: '@thecodecrax', url: 'https://instagram.com/thecodecrax' },
    ],
    featured: false,
    published: true,
  },
  {
    id: 'event-005',
    slug: 'smart-contract-security-dev-bootcamp',
    title: 'Smart Contract Architecture & Security',
    shortDescription:
      'Foundational Solidity and smart contract engineering session for campus builders.',
    description:
      'Introducing aspiring developers to EVM internals, gas optimization techniques, reentrancy defense, and hands-on deployment with Hardhat and Foundry.',
    date: '2025-06-25',
    location: {
      city: 'Jabalpur',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['Web3', 'Solidity', 'Security'],
    coverImage: '/images/events/event-005/cover.jpg',
    gallery: [],
    tags: ['Solidity', 'Web3', 'Security', 'EVM'],
    eventUrl: 'https://www.instagram.com/thecodecrax/?hl=en',
    instagramPostUrl: 'https://www.instagram.com/thecodecrax/?hl=en',
    audience: '75+ Campus Engineers',
    collaborators: [
      { name: 'thecodecraX', handle: '@thecodecrax', url: 'https://instagram.com/thecodecrax' },
      { name: 'MPDAO', handle: '@mpdao__', url: 'https://instagram.com/mpdao__' },
    ],
    featured: false,
    published: true,
  },
];

export const getPublishedEvents = (): Event[] =>
  events.filter((e) => e.published);

export const getFeaturedEvents = (limit?: number): Event[] => {
  const featured = events.filter((e) => e.published && e.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getEventBySlug = (slug: string): Event | undefined =>
  events.find((e) => e.slug === slug && e.published);

export const getEventCategories = (): string[] => {
  const cats = new Set<string>();
  events
    .filter((e) => e.published)
    .forEach((e) => e.category.forEach((c) => cats.add(c)));
  return ['All', ...Array.from(cats).sort()];
};
