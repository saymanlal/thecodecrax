# thecodecraX — Content Management Guide

Welcome to the **thecodecraX** content architecture! All website copy, images, events, team members, and social links can be modified directly from clean, centralized data files in `src/data/` without touching any React UI components.

---

## Table of Contents
1. [How to Change Social Media Links](#1-how-to-change-social-media-links)
2. [How to Add or Edit Events](#2-how-to-add-or-edit-events)
3. [How to Remove or Hide an Event](#3-how-to-remove-or-hide-an-event)
4. [How to Add Photos to the Gallery](#4-how-to-add-photos-to-the-gallery)
5. [How to Change the Website Logo](#5-how-to-change-the-website-logo)
6. [How to Add a City Location](#6-how-to-add-a-city-location)
7. [How to Add Team Members](#7-how-to-add-team-members)
8. [How to Add Partners & Collaborators](#8-how-to-add-partners--collaborators)
9. [How to Change Homepage Copy & CTAs](#9-how-to-change-homepage-copy--ctas)
10. [How to Update SEO Metadata](#10-how-to-update-seo-metadata)

---

## 1. How to Change Social Media Links

**File:** `src/data/social.ts`

To update Instagram, LinkedIn, X, or Discord:

```typescript
export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/thecodecrax', // Update URL here
    icon: 'instagram',
    enabled: true, // Set to true to show, false to hide
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/your-company',
    icon: 'linkedin',
    enabled: true, // Enable when ready
  },
  // Supported icon names: 'instagram', 'linkedin', 'twitter', 'discord', 'youtube', 'github'
];
```

---

## 2. How to Add or Edit Events

**File:** `src/data/events.ts`

Add a new object to the `events` array:

```typescript
{
  id: "event-004",
  slug: "ai-agents-workshop-2025",
  title: "Building Autonomous AI Agents Workshop",
  shortDescription: "A hands-on workshop building agentic workflows with LangChain and Next.js.",
  description: "Full details about the event, agenda, prerequisites, and key takeaways...",
  date: "2025-09-15",
  location: {
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India"
  },
  category: ["AI", "Workshop"],
  coverImage: "/images/events/event-004/cover.jpg",
  gallery: [
    "/images/events/event-004/photo-1.jpg",
    "/images/events/event-004/photo-2.jpg"
  ],
  tags: ["AI", "Agents", "LangChain", "Indore"],
  eventUrl: "https://example.com/event",
  registrationUrl: "https://lu.ma/your-event-slug",
  instagramUrl: "https://instagram.com/thecodecrax",
  featured: true,   // Set to true to feature on homepage
  published: true   // Set to true to make public
}
```

---

## 3. How to Remove or Hide an Event

**File:** `src/data/events.ts`

Simply set `published: false` on the event object:

```typescript
{
  id: "event-001",
  // ...
  published: false // This hides it from the entire website immediately
}
```

---

## 4. How to Add Photos to the Gallery

1. Save your image file into `public/images/gallery/` (e.g. `public/images/gallery/meetup-photo-1.jpg`).
2. Open **`src/data/gallery.ts`** and add:

```typescript
{
  id: "gallery-004",
  image: "/images/gallery/meetup-photo-1.jpg",
  alt: "Developers collaborating at the AI Meetup",
  caption: "AI Hack Night — Jabalpur",
  eventId: "event-001", // Optional: links to event
  location: "Jabalpur, Madhya Pradesh",
  date: "2025-03-15",
  category: "AI", // Used for filter buttons
  featured: true,
  published: true
}
```

---

## 5. How to Change the Website Logo

1. Place your PNG/SVG logo into `public/images/logo/logo.png`.
2. Update **`src/data/site.ts`**:

```typescript
export const siteConfig = {
  name: "thecodecraX",
  logo: "/images/logo/logo.png",
  // ...
};
```

---

## 6. How to Add a City Location

**File:** `src/data/locations.ts`

Add an entry to the `locations` array:

```typescript
{
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
  coordinates: {
    latitude: 22.7196,
    longitude: 75.8577
  },
  eventIds: ["event-004"],
  active: true
}
```

---

## 7. How to Add Team Members

**File:** `src/data/team.ts`

1. Place member photo in `public/images/team/name.jpg`.
2. Add to `team` array:

```typescript
{
  id: "member-002",
  name: "Jane Doe",
  role: "Web3 Technical Lead",
  image: "/images/team/jane.jpg",
  bio: "Smart contract auditor and developer evangelist.",
  socials: {
    linkedin: "https://linkedin.com/in/...",
    twitter: "https://x.com/...",
    instagram: "https://instagram.com/..."
  },
  active: true
}
```

---

## 8. How to Add Partners & Collaborators

**File:** `src/data/partners.ts`

```typescript
{
  id: "partner-001",
  name: "Partner Organization",
  logo: "/images/partners/partner-logo.svg",
  website: "https://example.com",
  category: "Community Partner",
  active: true
}
```

---

## 9. How to Change Homepage Copy & CTAs

**File:** `src/data/site.ts`

Every piece of hero text, headline, about section body, mission statements, and CTA buttons lives inside `siteConfig`:

```typescript
export const siteConfig = {
  hero: {
    headline: "AI and Web3 shouldn't depend on your pin code.",
    description: "Your custom description...",
    primaryCTA: {
      label: "Explore Our Work",
      href: "#events"
    },
    secondaryCTA: {
      label: "Join the Community",
      href: "/join"
    }
  },
  contact: {
    email: "hello@thecodecrax.com"
  }
};
```

---

## 10. How to Update SEO Metadata

**File:** `src/data/seo.ts`

Edit title templates, meta descriptions, Open Graph preview images, and keywords.
