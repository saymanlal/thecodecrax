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

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
  enabled: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon: string;
  enabled: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  mission: [string, string, string]; // 3-line mission statement
  description: string;
  logo: string;
  hero: {
    primaryCTA: {
      label: string;
      href: string;
    };
    secondaryCTA: {
      label: string;
      href: string;
    };
  };
  contact: {
    email: string;
  };
}
