import type { Stat } from '@/types';

export const stats: Stat[] = [
  {
    label: 'Events & Meetups',
    value: '10+',
    description: 'Community gatherings and workshops across India',
    enabled: true,
  },
  {
    label: 'Cities Reached',
    value: '5+',
    description: 'Expanding tech access beyond Tier-1 metros',
    enabled: true,
  },
  {
    label: 'Builders & Learners',
    value: '500+',
    description: 'Students, developers, and founders engaged',
    enabled: true,
  },
  {
    label: 'Active Hubs',
    value: '3+',
    description: 'Regional learning circles and campus groups',
    enabled: true,
  },
];

export const getEnabledStats = (): Stat[] => stats.filter((s) => s.enabled);
