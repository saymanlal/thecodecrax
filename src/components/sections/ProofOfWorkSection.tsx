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
    <section id="proof-of-work" className="py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Proof Of Work
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Verifiable archive of developer sessions, workshops, and build nights.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1.5 p-1 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 self-start sm:self-auto">
            {(['All', 'Web3', 'AI'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xs'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-36 w-full bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                  <ImageWithFallback
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                    {event.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/70 text-white backdrop-blur-xs"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 mb-1.5">
                    <Calendar size={12} />
                    <span>{formatDate(event.date)}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1.5 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                    {event.shortDescription}
                  </p>

                  <div className="space-y-1 text-[11px] text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                    {event.audience && (
                      <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 font-medium">
                        <Users size={12} />
                        <span>{event.audience}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      <span>{event.location.city}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer action */}
              <div className="p-4 pt-0">
                {event.instagramPostUrl ? (
                  <a
                    href={event.instagramPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium text-xs transition-colors"
                  >
                    <SocialIcon name="instagram" size={13} />
                    <span>Instagram Link</span>
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <a
                    href={event.eventUrl || 'https://instagram.com/thecodecrax'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium text-xs transition-colors"
                  >
                    <span>Event Details</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
