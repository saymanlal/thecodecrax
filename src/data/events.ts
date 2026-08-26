import type { Event } from '@/types';

/**
 * EVENTS DATA
 * ============================================================
 * HOW TO ADD AN EVENT:
 * 1. Copy one of the objects below.
 * 2. Give it a unique id (e.g., "event-004") and slug (e.g., "my-event-name").
 * 3. Fill in all fields.
 * 4. Set published: true to make it visible.
 * 5. Set featured: true to show it prominently on the homepage.
 *
 * HOW TO REMOVE AN EVENT:
 * Set published: false — it will not appear publicly.
 *
 * HOW TO ADD PHOTOS:
 * Place images in: public/images/events/[event-id]/
 * Reference them as: "/images/events/[event-id]/photo.jpg"
 * ============================================================
 */
export const events: Event[] = [
  {
    id: 'event-001',
    slug: 'ai-web3-meetup-jabalpur-2025',
    title: 'AI & Web3 Meetup — Jabalpur',
    shortDescription:
      'An open meetup bringing AI and Web3 builders together in Jabalpur, Madhya Pradesh.',
    description:
      'Our first community meetup in Jabalpur brought together students, developers, and curious minds to explore AI and Web3. The event featured talks, discussions, and hands-on sessions — all designed to make complex technology accessible and exciting for the local community.',
    date: '2025-03-15',
    location: {
      city: 'Jabalpur',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['AI', 'Web3', 'Meetup'],
    coverImage: '/images/events/event-001/cover.jpg',
    gallery: [
      '/images/events/event-001/photo-1.jpg',
      '/images/events/event-001/photo-2.jpg',
    ],
    tags: ['AI', 'Web3', 'Meetup', 'Jabalpur', 'Madhya Pradesh'],
    eventUrl: 'https://instagram.com/thecodecrax',
    registrationUrl: '',
    instagramUrl: 'https://instagram.com/thecodecrax',
    collaborators: [],
    speakers: [],
    featured: true,
    published: true,
  },
  {
    id: 'event-002',
    slug: 'web3-workshop-campus-2025',
    title: 'Web3 Campus Workshop',
    shortDescription:
      'A hands-on Web3 workshop for engineering students — covering wallets, smart contracts, and the decentralized web.',
    description:
      'This campus workshop introduced engineering students to Web3 fundamentals: blockchain basics, how wallets work, smart contracts, and real-world decentralized applications. Students got hands-on experience setting up wallets and interacting with testnet contracts.',
    date: '2025-05-20',
    location: {
      city: 'Jabalpur',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['Web3', 'Workshop', 'Campus'],
    coverImage: '/images/events/event-002/cover.jpg',
    gallery: [
      '/images/events/event-002/photo-1.jpg',
      '/images/events/event-002/photo-2.jpg',
    ],
    tags: ['Web3', 'Workshop', 'Campus', 'Blockchain', 'Students'],
    eventUrl: '',
    registrationUrl: '',
    instagramUrl: 'https://instagram.com/thecodecrax',
    collaborators: [],
    speakers: [],
    featured: true,
    published: true,
  },
  {
    id: 'event-003',
    slug: 'ai-builders-session-2025',
    title: 'AI Builders Session',
    shortDescription:
      'A focused session for developers interested in building with AI — from APIs to autonomous agents.',
    description:
      'The AI Builders Session brought together developers who want to build with AI rather than just talk about it. Topics included LLM APIs, prompt engineering, building autonomous agents, and practical AI integration in real projects.',
    date: '2025-07-10',
    location: {
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      country: 'India',
    },
    category: ['AI', 'Workshop', 'Builders'],
    coverImage: '/images/events/event-003/cover.jpg',
    gallery: [
      '/images/events/event-003/photo-1.jpg',
    ],
    tags: ['AI', 'Builders', 'LLM', 'Agents', 'Bhopal'],
    eventUrl: '',
    registrationUrl: '',
    instagramUrl: 'https://instagram.com/thecodecrax',
    collaborators: [],
    speakers: [],
    featured: true,
    published: true,
  },
];

// Helper: Get all published events
export const getPublishedEvents = (): Event[] =>
  events.filter((e) => e.published);

// Helper: Get featured events
export const getFeaturedEvents = (max?: number): Event[] => {
  const featured = events
    .filter((e) => e.published && e.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return max ? featured.slice(0, max) : featured;
};

// Helper: Get event by slug
export const getEventBySlug = (slug: string): Event | undefined =>
  events.find((e) => e.slug === slug && e.published);

// Helper: Get all unique categories from published events
export const getEventCategories = (): string[] => {
  const cats = new Set<string>();
  events
    .filter((e) => e.published)
    .forEach((e) => e.category.forEach((c) => cats.add(c)));
  return ['All', ...Array.from(cats).sort()];
};
