export interface EventCollaborator {
  name: string;
  logo?: string;
  url?: string;
  handle?: string;
}

export interface EventSpeaker {
  name: string;
  role?: string;
  image?: string;
  url?: string;
}

export interface EventLocation {
  city: string;
  state?: string;
  country: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  date: string;
  endDate?: string;
  location: EventLocation;
  category: string[];
  coverImage: string;
  gallery: string[];
  tags: string[];
  eventUrl?: string;
  registrationUrl?: string;
  instagramUrl?: string;
  instagramPostUrl?: string;
  audience?: string;
  collaborators?: EventCollaborator[];
  speakers?: EventSpeaker[];
  featured: boolean;
  published: boolean;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  eventId?: string;
  location?: string;
  date?: string;
  featured?: boolean;
  published: boolean;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  active: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: string;
  active: boolean;
}

export interface CityLocation {
  city: string;
  state: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  eventIds: string[];
  active: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon: string;
  enabled: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  enabled: boolean;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
  enabled: boolean;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  enabled: boolean;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface HeroConfig {
  headline?: string;
  subheadline?: string;
  description?: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
}

export interface AboutConfig {
  headline: string;
  subheadline: string;
  body: string[];
  values: { title: string; description: string }[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  mission: [string, string, string];
  description: string;
  logo: string;
  logoDark?: string;
  favicon?: string;
  hero: HeroConfig;
  about?: AboutConfig;
  contact: {
    email: string;
    address?: string;
  };
  maxFeaturedEvents?: number;
  showStats?: boolean;
  showTeam?: boolean;
  showPartners?: boolean;
}

export interface SEOConfig {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterImage: string;
  twitterHandle?: string;
  siteUrl: string;
  locale: string;
}
