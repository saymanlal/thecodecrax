import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Initiatives } from '@/components/sections/Initiatives';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { getEnabledSocialLinks } from '@/data/social';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join thecodecraX community — AI and Web3 builders, students, and practitioners across India.',
};

export default function CommunityPage() {
  const socialLinks = getEnabledSocialLinks();

  return (
    <div className="pt-20 bg-white">
      <div className="py-20 bg-gray-950 border-b border-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-violet-950 rounded-full border border-violet-800/50 mb-4 inline-block">
              Community Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              A community where builders show up.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We don&apos;t just host chats with idle members. We organize hands-on build sessions, hackathons, and local meetups that foster real technical skills.
            </p>
          </div>
        </Container>
      </div>

      {/* Pathways */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                How you can get involved today
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Join our Social Channels',
                    desc: 'Stay informed on upcoming workshops, call-for-speakers, and regional meetup announcements.',
                  },
                  {
                    step: '02',
                    title: 'Attend a Local Meetup',
                    desc: 'Come in person, build with peers, solve technical problems, and network with fellow builders.',
                  },
                  {
                    step: '03',
                    title: 'Host or Speak in Your City',
                    desc: 'Want to launch a thecodecraX chapter at your college campus or city? We provide support, swag, and curriculum.',
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5 p-5 rounded-2xl bg-violet-50/50 border border-violet-100">
                    <span className="text-violet-600 font-black text-xl shrink-0">{step}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Official Channels</h3>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-gray-200 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-600/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <SocialIcon name={link.icon || link.name} size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-extrabold text-gray-900 text-lg group-hover:text-violet-700 transition-colors">{link.name}</p>
                    <p className="text-gray-500 text-xs truncate max-w-xs">{link.url}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Initiatives />
      <JoinCTA />
    </div>
  );
}
