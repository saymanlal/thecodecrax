'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Sparkles, Filter, Users, Tag } from 'lucide-react';
import { getPublishedEvents } from '@/data/events';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { formatDate } from '@/lib/utils';

export function ProofOfWorkSection() {
  const allEvents = getPublishedEvents();
  const [filter, setFilter] = useState<'All' | 'AI' | 'Web3'>('All');

  const filteredEvents =
    filter === 'All'
      ? allEvents
      : allEvents.filter((e) => e.category.some((c) => c.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="proof-of-work" className="py-20 sm:py-28 relative bg-gray-50/50 dark:bg-gray-950/60 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bold Heading: Our Proof Of Work */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-widest mb-3 border border-violet-200 dark:border-violet-800/40">
            <Sparkles size={14} />
            <span>Verifiable Track Record</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Our Proof Of Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Every meetup, workshop, and hack night is verifiable. All events, partnerships, and technical sessions documented.
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2.5 mt-8">
            {(['All', 'Web3', 'AI'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-105'
                    : 'bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-violet-400'
                }`}
              >
                {cat === 'All' ? 'All Initiatives' : `${cat} Events`}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-gray-900/80 border border-gray-200/90 dark:border-white/10 hover:border-violet-400 dark:hover:border-violet-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-violet-950">
                    <ImageWithFallback
                      src={event.coverImage}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {event.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-600 text-white"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-3 left-3 text-xs text-white font-medium flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      <Calendar size={11} className="text-violet-300" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-lg mb-2 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                      {event.shortDescription}
                    </p>

                    <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400">
                      {event.audience && (
                        <div className="flex items-center gap-1.5 text-violet-700 dark:text-violet-300 font-semibold">
                          <Users size={13} />
                          <span>{event.audience}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{event.location.city}, {event.location.state}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 pt-0">
                  {event.instagramPostUrl ? (
                    <a
                      href={event.instagramPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 text-gray-700 dark:text-gray-300 font-bold text-xs transition-colors"
                    >
                      <SocialIcon name="instagram" size={14} />
                      <span>Instagram Proof</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <a
                      href={event.eventUrl || 'https://instagram.com/thecodecrax'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-violet-600 hover:text-white text-gray-700 dark:text-gray-300 font-bold text-xs transition-colors"
                    >
                      <span>Explore Archive</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
