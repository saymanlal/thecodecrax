'use client';

import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { type Event } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { formatDate } from '@/lib/utils';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const hasExternalLink = Boolean(event.eventUrl || event.registrationUrl);
  const externalUrl = event.registrationUrl || event.eventUrl;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-900/10 transition-all duration-300 flex flex-col h-full">
      {/* Cover image banner */}
      <div className="relative h-56 w-full overflow-hidden bg-violet-950">
        <ImageWithFallback
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
          {event.category.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="violet">
              {cat}
            </Badge>
          ))}
        </div>
        {event.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-amber-400 text-amber-950 font-bold text-xs rounded-full shadow-md">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Body content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-violet-600" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-violet-600" />
            {event.location.city}, {event.location.state || event.location.country}
          </span>
        </div>

        <h3 className="font-extrabold text-gray-900 text-xl mb-3 leading-snug group-hover:text-violet-700 transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
          {event.shortDescription}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-violet-700 font-bold text-sm hover:gap-2.5 transition-all"
          >
            View Story
            <ArrowRight size={16} />
          </Link>

          {hasExternalLink && externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-violet-600 transition-colors"
            >
              {event.registrationUrl ? 'Register' : 'Event Link'}
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
