import type { Initiative } from '@/types';

export const initiatives: Initiative[] = [
  {
    id: 'init-001',
    title: 'AI Communities & Hack Nights',
    description:
      'Local AI study circles and build sessions where developers, students, and researchers explore LLMs, autonomous agents, and computer vision hands-on.',
    icon: 'Brain',
    link: '/community',
    enabled: true,
  },
  {
    id: 'init-002',
    title: 'Web3 & Decentralized Tech',
    description:
      'Workshops on smart contract engineering, DeFi primitives, zero-knowledge proofs, and decentralized infrastructure for aspiring Web3 developers.',
    icon: 'Globe',
    link: '/community',
    enabled: true,
  },
  {
    id: 'init-003',
    title: 'In-Person Meetups & Events',
    description:
      'Curated regional meetups bringing real conversations to real places — bridging the gap between local talent and nationwide opportunities.',
    icon: 'Calendar',
    link: '/events',
    enabled: true,
  },
  {
    id: 'init-004',
    title: 'Campus Ambassador Programs',
    description:
      'Partnering with colleges and universities to nurture student-led tech clubs, hackathons, and peer-to-peer mentoring networks.',
    icon: 'GraduationCap',
    link: '/community',
    enabled: true,
  },
  {
    id: 'init-005',
    title: 'Tier-2 & Tier-3 Ecosystems',
    description:
      'Building strong regional developer hubs in emerging tech cities across India, proving that top-tier talent is everywhere.',
    icon: 'MapPin',
    link: '/about',
    enabled: true,
  },
  {
    id: 'init-006',
    title: 'Industry & Ecosystem Alliances',
    description:
      'Connecting builders with global Web3 foundations, AI labs, grant programs, and job opportunities across the ecosystem.',
    icon: 'Users',
    link: '/contact',
    enabled: true,
  },
];

export const getEnabledInitiatives = (): Initiative[] =>
  initiatives.filter((i) => i.enabled);
