import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { getEnabledSocialLinks } from '@/data/social';
import { siteConfig } from '@/data/site';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join thecodecraX',
  description: 'Become part of India’s growing AI and Web3 community. Attend events, share knowledge, and build together.',
};

export default function JoinPage() {
  const socialLinks = getEnabledSocialLinks();
  const instagramLink = socialLinks.find((l) => l.icon === 'instagram');

  return (
    <div className="min-h-screen pt-20 bg-gray-950 text-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950 border border-violet-800/50 text-violet-300 text-xs font-semibold mb-6">
            <Sparkles size={14} />
            <span>Open Community Network</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            You&apos;re one step away from building with us.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            thecodecraX is free and open to all. No complicated gatekeeping. Connect with our community and get access to workshops, mentorship, and event invites.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-16">
            {instagramLink && (
              <a
                href={instagramLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl bg-gray-900 border border-violet-900/40 hover:border-violet-500 hover:bg-gray-850 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md">
                    <SocialIcon name="instagram" size={26} />
                  </div>
                  <h3 className="font-extrabold text-2xl text-white mb-2">Follow on Instagram</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Real-time announcements, meetup dates, speaker line-ups, and community stories.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-violet-400 font-bold text-sm group-hover:gap-3 transition-all">
                  <span>@thecodecrax</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            )}

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-8 rounded-3xl bg-gray-900 border border-violet-900/40 hover:border-violet-500 hover:bg-gray-850 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-white mb-6 shadow-md shadow-violet-600/30">
                  <Mail size={26} />
                </div>
                <h3 className="font-extrabold text-2xl text-white mb-2">Email the Core Team</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  For collaborations, speaking at an event, or bringing thecodecraX to your campus.
                </p>
              </div>
              <div className="flex items-center gap-2 text-violet-400 font-bold text-sm group-hover:gap-3 transition-all">
                <span>{siteConfig.contact.email}</span>
                <ArrowRight size={16} />
              </div>
            </a>
          </div>

          {/* Benefits */}
          <div className="p-8 rounded-3xl bg-gray-900/60 border border-gray-800 text-left">
            <h3 className="text-lg font-bold text-white mb-4">What you get as part of thecodecraX:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-violet-400 shrink-0" />
                <span>Hands-on technical workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-violet-400 shrink-0" />
                <span>Direct connections with Web3 &amp; AI builders</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-violet-400 shrink-0" />
                <span>Hackathon mentorship and project feedback</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-violet-400 shrink-0" />
                <span>Opportunities to speak and lead local chapters</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
