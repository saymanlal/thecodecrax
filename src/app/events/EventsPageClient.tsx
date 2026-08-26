'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Event } from '@/types';
import { EventCard } from '@/components/events/EventCard';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface EventsPageClientProps {
  events: Event[];
  categories: string[];
}

export function EventsPageClient({ events, categories }: EventsPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? events
      : events.filter((e) => e.category.includes(activeCategory));

  return (
    <Container className="py-14">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer',
              activeCategory === cat
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-violet-300 hover:text-violet-700'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
          <p className="text-gray-500 font-medium">No events found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      )}
    </Container>
  );
}
