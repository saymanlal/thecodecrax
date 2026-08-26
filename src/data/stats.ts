import type { Stat } from '@/types';

/**
 * COMMUNITY STATISTICS (Animated Counters)
 * ============================================================
 * Edit the numerical value and suffix here.
 * The frontend will automatically animate counting up to these numbers.
 * ============================================================
 */
export const stats: Stat[] = [
  {
    label: 'Builders & Learners',
    value: 500,
    suffix: '+',
    description: 'Active developers, students, and engineers in our circle',
    enabled: true,
  },
  {
    label: 'Community Events',
    value: 12,
    suffix: '+',
    description: 'Workshops, hackathons, and builder meetups organized',
    enabled: true,
  },
  {
    label: 'Cities Reached',
    value: 5,
    suffix: '+',
    description: 'Expanding tech access across Madhya Pradesh & India',
    enabled: true,
  },
  {
    label: 'Ecosystem Alliances',
    value: 8,
    suffix: '+',
    description: 'Collaborations with MetaMask, Vercel, Story Protocol, MPDAO & more',
    enabled: true,
  },
];

export const getEnabledStats = (): Stat[] => stats.filter((s) => s.enabled);
