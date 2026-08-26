import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { getEnabledSocialLinks } from '@/data/social';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to thecodecraX for collaborations, campus partnerships, sponsorships, or speaking opportunities.',
};

export default function ContactPage() {
  const socialLinks = getEnabledSocialLinks();

  return (
    <div className="min-h-screen pt-20 bg-gray-50 text-gray-900">
      <div className="py-20 bg-gray-950 border-b border-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-violet-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-violet-950 rounded-full border border-violet-800/50 mb-4 inline-block">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Let&apos;s build together.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Whether you represent an AI lab, a Web3 foundation, an academic institution, or are an independent builder — we&apos;d love to connect.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct channels */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Channels</h2>
            
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-gray-200 hover:border-violet-500 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center group-hover:bg-violet-600 transition-colors">
                <Mail size={22} className="text-violet-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Email</p>
                <p className="font-bold text-gray-900 text-base group-hover:text-violet-700 transition-colors">
                  {siteConfig.contact.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-gray-200">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">
                <MapPin size={22} className="text-violet-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Locations</p>
                <p className="font-bold text-gray-900 text-base">
                  Madhya Pradesh &amp; Across India
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Follow &amp; Message</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:border-violet-400 hover:text-violet-700 text-sm font-semibold transition-all shadow-xs"
                  >
                    <SocialIcon name={link.icon || link.name} size={16} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Scope */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaboration Areas</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We partner with high-impact teams to bring real technology resources and education to students and builders.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Campus workshops & student developer bootcamps',
                  'Hackathon organization & local tracks',
                  'Developer grants & ecosystem bounties',
                  'Tech talks, guest lectures & AMAs',
                  'Co-hosting regional meetups in Tier-2/3 cities',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-600 mt-2 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=Collaboration%20with%20thecodecraX`}
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all shadow-md shadow-violet-600/20 text-center"
            >
              <Mail size={18} />
              <span>Reach out via Email</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
