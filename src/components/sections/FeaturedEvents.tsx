'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedEvents } from '@/data/events';
import { siteConfig } from '@/data/site';
import { EventCard } from '@/components/events/EventCard';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FeaturedEvents() {
  const eventsList = getFeaturedEvents(siteConfig.maxFeaturedEvents);
  if (eventsList.length === 0) return null;

  return (
    <section id="events" className="py-24 bg-white relative">
      <Container>
        <SectionHeader
          label="Featured Gatherings"
          headline="Our work, in the real world."
          subheadline="Every event is proof of concept: real developers, real curiosity, and tangible progress across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {eventsList.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-violet-600 text-violet-700 font-bold rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-200 shadow-md group"
          >
            Explore all events &amp; workshops
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
