import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { getPublishedEvents, getEventCategories } from '@/data/events';
import { EventsPageClient } from './EventsPageClient';

export const metadata: Metadata = {
  title: 'Events & Workshops',
  description: 'Explore all AI workshops, Web3 meetups, hackathons, and gatherings organized by thecodecraX across India.',
};

export default function EventsPage() {
  const events = getPublishedEvents();
  const categories = getEventCategories();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="py-20 bg-gray-950 border-b border-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-violet-950/80 rounded-full border border-violet-800/40 mb-4 inline-block">
              Community Events
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Real gatherings. Real code. Real momentum.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Every event is proof of work. Explore our past and upcoming AI sessions, Web3 workshops, and regional developer meetups.
            </p>
          </div>
        </Container>
      </div>

      <EventsPageClient events={events} categories={categories} />
    </div>
  );
}
