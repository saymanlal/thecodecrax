// Event type
export interface EventCollaborator {
  name: string;
  logo?: string;
  url?: string;
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
  collaborators?: EventCollaborator[];
  speakers?: EventSpeaker[];
  featured: boolean;
  published: boolean;
}

// Gallery type
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

// Team type
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

// Partner type
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: string;
  active: boolean;
}

// Location type
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

// Social link type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  enabled: boolean;
}

// Navigation type
export interface NavLink {
  label: string;
  href: string;
  enabled: boolean;
}

// Stat type
export interface Stat {
  label: string;
  value: string;
  description?: string;
  enabled: boolean;
}

// Initiative type
export interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  enabled: boolean;
}

// Site config types
export interface CTAButton {
  label: string;
  href: string;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  backgroundImage?: string;
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
  description: string;
  logo: string;
  logoDark: string;
  favicon: string;
  hero: HeroConfig;
  about: AboutConfig;
  contact: {
    email: string;
    address?: string;
  };
  maxFeaturedEvents: number;
  showStats: boolean;
  showTeam: boolean;
  showPartners: boolean;
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
