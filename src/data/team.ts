import type { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    id: 'member-001',
    name: 'thecodecraX Core Team',
    role: 'Community Stewards',
    image: '/images/team/core.jpg',
    bio: 'Dedicated to democratizing AI and Web3 education and opportunities across India.',
    socials: {
      linkedin: '',
      twitter: '',
      instagram: 'https://instagram.com/thecodecrax',
    },
    active: true,
  },
];

export const getActiveTeam = (): TeamMember[] =>
  team.filter((member) => member.active);
