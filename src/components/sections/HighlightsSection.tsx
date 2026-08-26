'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, Instagram, Sparkles, ArrowRight } from 'lucide-react';
import { getFeaturedEvents } from '@/data/events';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Badge } from '@/components/ui/Badge';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { formatDate } from '@/lib/utils';

export function HighlightsSection() {
  const featuredEvents = getFeaturedEvents();

  return (
    <section id="highlights" className="py-20 sm:py-28 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-widest mb-3 border border-violet-200 dark:border-violet-800/40">
            <Sparkles size={14} />
            <span>Key Event Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Recent Moments &amp; Major Alliances
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Real ecosystem meetups, builder workshops, and protocol sessions organized across India.
          </p>
        </div>

        {/* 3 Featured Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-gray-900/90 border border-gray-200/90 dark:border-white/10 hover:border-violet-500 dark:hover:border-violet-500 shadow-xl hover:shadow-2xl hover:shadow-violet-600/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover Banner */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-violet-950">
                  <ImageWithFallback
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
                    {event.category.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-violet-600/90 text-white backdrop-blur-md shadow-xs"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Date badge */}
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-xs text-violet-200 font-semibold bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
                    <Calendar size={12} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-lg sm:text-xl mb-2.5 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {event.shortDescription}
                  </p>

                  {/* Meta Chips */}
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 pb-4 mb-4 border-b border-gray-100 dark:border-white/5">
                    {event.audience && (
                      <div className="flex items-center gap-2 text-violet-700 dark:text-violet-300 font-semibold">
                        <Users size={14} className="shrink-0" />
                        <span>{event.audience}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="shrink-0 text-gray-400" />
                      <span>{event.location.city}, {event.location.state}</span>
                    </div>
                  </div>

                  {/* Collaborator chips */}
                  {event.collaborators && event.collaborators.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-2">
                        Hosted with
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {event.collaborators.map((c) => (
                          <span
                            key={c.name}
                            className="px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-[11px] font-medium"
                          >
                            {c.handle || c.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0">
                {event.instagramPostUrl && (
                  <a
                    href={event.instagramPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-pink-500/10 dark:bg-pink-500/15 border border-pink-500/30 text-pink-700 dark:text-pink-300 font-bold text-xs hover:bg-pink-500/20 transition-all cursor-pointer group/btn"
                  >
                    <SocialIcon name="instagram" size={15} />
                    <span>View Post on Instagram</span>
                    <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
