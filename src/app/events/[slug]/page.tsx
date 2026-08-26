import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, ExternalLink, Tag } from 'lucide-react';
import { getEventBySlug, getPublishedEvents } from '@/data/events';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = getPublishedEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.shortDescription,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const hasExternalLink = Boolean(event.eventUrl || event.registrationUrl);
  const externalUrl = event.registrationUrl || event.eventUrl;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Cover Header */}
      <div className="relative h-80 md:h-[420px] bg-gray-950 overflow-hidden">
        <ImageWithFallback
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover opacity-45"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        
        <Container className="relative h-full flex flex-col justify-end pb-10 z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-white text-sm font-semibold mb-6 transition-colors w-fit bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md"
          >
            <ArrowLeft size={16} /> Back to All Events
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {event.category.map((cat) => (
              <Badge key={cat} variant="violet">{cat}</Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl">
            {event.title}
          </h1>
        </Container>
      </div>

      {/* Content Grid */}
      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200/90 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Event</h2>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">
                {event.description}
              </p>

              {event.collaborators && event.collaborators.length > 0 && (
                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Collaborators &amp; Partners
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {event.collaborators.map((c) => (
                      <div key={c.name} className="px-4 py-2 rounded-xl bg-violet-50 border border-violet-100">
                        {c.url ? (
                          <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-violet-700 font-semibold hover:underline">
                            {c.name}
                          </a>
                        ) : (
                          <span className="text-violet-700 font-semibold">{c.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Highlights */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200/90 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Moments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-violet-950 group">
                      <ImageWithFallback
                        src={img}
                        alt={`${event.title} snapshot ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-200/90 shadow-sm sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Event Snapshot</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <Calendar size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Date</p>
                    <p className="text-gray-900 font-semibold text-sm">{formatDate(event.date)}</p>
                    {event.endDate && (
                      <p className="text-gray-500 text-xs">to {formatDate(event.endDate)}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-gray-900 font-semibold text-sm">
                      {event.location.city}
                      {event.location.state && `, ${event.location.state}`}
                    </p>
                    <p className="text-gray-500 text-xs">{event.location.country}</p>
                  </div>
                </div>
              </div>

              {hasExternalLink && externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all shadow-md shadow-violet-600/30"
                >
                  {event.registrationUrl ? 'Register on Lu.ma / Portal' : 'View External Page'}
                  <ExternalLink size={16} />
                </a>
              )}

              {event.instagramUrl && (
                <a
                  href={event.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-pink-50 border border-pink-200 text-pink-700 font-semibold rounded-2xl hover:bg-pink-100 transition-colors text-sm"
                >
                  <SocialIcon name="instagram" size={16} className="text-pink-600" />
                  <span>Check on Instagram</span>
                </a>
              )}

              {/* Tags */}
              {event.tags.length > 0 && (
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Tag size={13} /> Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
