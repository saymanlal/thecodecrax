import type { NavLink } from '@/types';

export const navigation: NavLink[] = [
  { label: 'Home', href: '/', enabled: true },
  { label: 'Events', href: '/events', enabled: true },
  { label: 'Gallery', href: '/gallery', enabled: true },
  { label: 'Community', href: '/community', enabled: true },
  { label: 'About', href: '/about', enabled: true },
  { label: 'Contact', href: '/contact', enabled: true },
];

export const getEnabledNavLinks = (): NavLink[] =>
  navigation.filter((link) => link.enabled);
