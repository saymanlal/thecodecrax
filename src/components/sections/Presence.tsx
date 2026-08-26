'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { getActiveLocations } from '@/data/locations';
import { getPublishedEvents } from '@/data/events';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import Link from 'next/link';

export function Presence() {
  const locationsList = getActiveLocations();
  const allEvents = getPublishedEvents();
  if (locationsList.length === 0) return null;

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          label="India Presence"
          headline="Expanding the map of opportunity."
          subheadline="Every pin is a local builder hub. We focus on regions where high potential meets high curiosity."
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locationsList.map((loc, i) => {
            const locationEvents = allEvents.filter((e) =>
              loc.eventIds.includes(e.id)
            );
            return (
              <motion.div
                key={`${loc.city}-${loc.state}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-3xl bg-gray-900/90 border border-violet-900/40 hover:border-violet-500 hover:bg-gray-900 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={22} className="text-violet-400" />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-violet-950 text-violet-300 border border-violet-800/50">
                    {loc.country}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-2xl text-white mb-1">{loc.city}</h3>
                <p className="text-gray-400 text-sm mb-4">{loc.state}</p>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                  <span className="text-violet-400 font-semibold">
                    {locationEvents.length > 0
                      ? `${locationEvents.length} Event${locationEvents.length !== 1 ? 's' : ''} Hosted`
                      : 'Active Chapter'}
                  </span>
                  <Link href="/events" className="text-gray-400 hover:text-white flex items-center gap-1">
                    View events <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
