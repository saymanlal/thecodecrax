import type { Metadata } from 'next';
import { GalleryPageClient } from './GalleryPageClient';
import { getPublishedGallery, getGalleryCategories } from '@/data/gallery';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Community Gallery',
  description: 'Explore photographs and visual stories from thecodecraX events, workshops, and gatherings across India.',
};

export default function GalleryPage() {
  const images = getPublishedGallery();
  const categories = getGalleryCategories();

  return (
    <div className="min-h-screen bg-gray-950 pt-20 text-white">
      <div className="py-20 border-b border-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-violet-950 rounded-full border border-violet-800/50 mb-4 inline-block">
              Visual Archive
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Proof of the work.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Every photo is a room full of learners, builders, and dreamers who gathered to shape India&apos;s technological frontier.
            </p>
          </div>
        </Container>
      </div>

      <GalleryPageClient images={images} categories={categories} />
    </div>
  );
}
