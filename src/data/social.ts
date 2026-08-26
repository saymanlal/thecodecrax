import type { SocialLink } from '@/types';

/**
 * SOCIAL MEDIA CONFIGURATION
 * ============================================================
 * Edit handles and profile URLs here.
 * Set enabled: true/false to show or hide from the website.
 * ============================================================
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    handle: '@thecodecrax',
    url: 'https://www.instagram.com/thecodecrax/?hl=en',
    icon: 'instagram',
    enabled: true,
  },
  {
    name: 'X (Twitter)',
    handle: '@thecodecrax',
    url: 'https://x.com/thecodecrax',
    icon: 'twitter',
    enabled: true,
  },
  {
    name: 'LinkedIn',
    handle: 'thecodecraX',
    url: 'https://linkedin.com/company/thecodecrax',
    icon: 'linkedin',
    enabled: true,
  },
  {
    name: 'Discord',
    handle: 'thecodecraX Community',
    url: 'https://discord.gg/thecodecrax',
    icon: 'discord',
    enabled: true,
  },
];

export const getEnabledSocialLinks = (): SocialLink[] =>
  socialLinks.filter((link) => link.enabled && link.url);
