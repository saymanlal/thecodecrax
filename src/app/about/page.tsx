import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { About } from '@/components/sections/About';
import { Initiatives } from '@/components/sections/Initiatives';
import { Presence } from '@/components/sections/Presence';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { getActiveTeam } from '@/data/team';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export const metadata: Metadata = {
  title: 'About thecodecraX',
  description: 'Democratizing AI and Web3 education, tech communities, and builder opportunities across India.',
};

export default function AboutPage() {
  const teamList = getActiveTeam();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="py-20 bg-gray-950 border-b border-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-violet-950 rounded-full border border-violet-800/50 mb-4 inline-block">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              We&apos;re building access, not just events.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              thecodecraX started with a simple belief: the next major wave of AI and Web3 builders is spread across all of India, waiting for access and community.
            </p>
          </div>
        </Container>
      </div>

      <About />
      <Initiatives />

      {/* Team section */}
      {teamList.length > 0 && (
        <section className="py-24 bg-white border-t border-gray-100">
          <Container>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-violet-600 font-bold text-xs uppercase tracking-widest mb-2 block">Team</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                The people behind the movement.
              </h2>
              <p className="text-gray-600 text-base">
                Community organizers, engineers, and educators passionate about open tech ecosystems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamList.map((member) => (
                <div key={member.id} className="p-8 rounded-3xl bg-violet-50/50 border border-violet-100 text-center hover:border-violet-300 transition-all">
                  <div className="w-24 h-24 rounded-2xl bg-violet-600 mx-auto mb-5 overflow-hidden relative shadow-md">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-xl mb-1">{member.name}</h3>
                  <p className="text-violet-700 font-semibold text-sm mb-3">{member.role}</p>
                  {member.bio && <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Presence />
      <JoinCTA />
    </div>
  );
}
