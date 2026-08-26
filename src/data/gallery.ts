import type { GalleryImage } from '@/types';

/**
 * GALLERY DATA
 * ============================================================
 * HOW TO ADD GALLERY IMAGES:
 * 1. Place your image in: public/images/gallery/
 * 2. Add a new object to the array below.
 * 3. Set published: true.
 *
 * Images linked to events (via eventId) will show event context.
 * Images marked featured: true will appear first.
 * ============================================================
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-001',
    image: '/images/gallery/gallery-001.jpg',
    alt: 'Community members at AI & Web3 Meetup, Jabalpur',
    caption: 'AI & Web3 Meetup — Jabalpur, March 2025',
    eventId: 'event-001',
    location: 'Jabalpur, Madhya Pradesh',
    date: '2025-03-15',
    featured: true,
    published: true,
    category: 'Meetup',
  },
  {
    id: 'gallery-002',
    image: '/images/gallery/gallery-002.jpg',
    alt: 'Web3 Workshop session at a campus in Jabalpur',
    caption: 'Web3 Campus Workshop — May 2025',
    eventId: 'event-002',
    location: 'Jabalpur, Madhya Pradesh',
    date: '2025-05-20',
    featured: true,
    published: true,
    category: 'Workshop',
  },
  {
    id: 'gallery-003',
    image: '/images/gallery/gallery-003.jpg',
    alt: 'AI Builders Session — participants building with LLM APIs',
    caption: 'AI Builders Session — Bhopal, July 2025',
    eventId: 'event-003',
    location: 'Bhopal, Madhya Pradesh',
    date: '2025-07-10',
    featured: false,
    published: true,
    category: 'AI',
  },
];

// Helper: Get published gallery images
export const getPublishedGallery = (): GalleryImage[] =>
  galleryImages.filter((img) => img.published);

// Helper: Get gallery images by category
export const getGalleryByCategory = (category: string): GalleryImage[] => {
  if (category === 'All') return getPublishedGallery();
  return galleryImages.filter(
    (img) => img.published && img.category === category
  );
};

// Helper: Get all unique gallery categories
export const getGalleryCategories = (): string[] => {
  const cats = new Set<string>();
  galleryImages
    .filter((img) => img.published)
    .forEach((img) => img.category && cats.add(img.category));
  return ['All', ...Array.from(cats).sort()];
};
