'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { type GalleryImage } from '@/types';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Container } from '@/components/ui/Container';
import { cn, formatDate } from '@/lib/utils';

interface GalleryPageClientProps {
  images: GalleryImage[];
  categories: string[];
}

export function GalleryPageClient({ images, categories }: GalleryPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null || filtered.length === 0) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null || filtered.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <Container className="py-14">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-gray-900 text-gray-300 border border-gray-800 hover:border-violet-500 hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-gray-900/50 rounded-3xl border border-gray-800">
            <p className="text-gray-400">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-900 border border-gray-800/80 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <ImageWithFallback
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {img.caption && (
                    <p className="text-white font-bold text-base leading-snug mb-2">{img.caption}</p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-violet-300">
                    {img.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={13} /> {img.location}
                      </span>
                    )}
                    {img.date && (
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {formatDate(img.date)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Top Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Lightbox Media */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                <ImageWithFallback
                  src={currentImage.image}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {(currentImage.caption || currentImage.location) && (
                <div className="mt-6 text-center max-w-xl">
                  {currentImage.caption && (
                    <p className="text-white text-lg font-bold mb-1">{currentImage.caption}</p>
                  )}
                  <div className="flex items-center justify-center gap-4 text-sm text-violet-400">
                    {currentImage.location && (
                      <span className="flex items-center gap-1"><MapPin size={14} /> {currentImage.location}</span>
                    )}
                    {currentImage.date && (
                      <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(currentImage.date)}</span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
