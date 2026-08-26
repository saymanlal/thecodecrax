import type { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/thecodecrax',
    icon: 'instagram',
    enabled: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/thecodecrax',
    icon: 'linkedin',
    enabled: true,
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/thecodecrax',
    icon: 'twitter',
    enabled: true,
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/thecodecrax',
    icon: 'discord',
    enabled: true,
  },
  {
    name: 'YouTube',
    url: '',
    icon: 'youtube',
    enabled: false,
  },
];

export const getEnabledSocialLinks = (): SocialLink[] =>
  socialLinks.filter((link) => link.enabled && link.url);
