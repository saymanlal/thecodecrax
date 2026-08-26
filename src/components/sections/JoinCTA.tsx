'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { getEnabledSocialLinks } from '@/data/social';
import { Container } from '@/components/ui/Container';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function JoinCTA() {
  const socialLinks = getEnabledSocialLinks();
  const instagramLink = socialLinks.find((l) => l.icon === 'instagram');

  return (
    <section className="py-24 bg-gradient-to-br from-violet-950 via-purple-950 to-gray-950 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/30 border border-violet-400/40 text-violet-300 text-xs font-semibold mb-6">
            <Sparkles size={14} />
            <span>Open to Builders Everywhere</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Ready to build the future with us?
          </h2>
          <p className="text-violet-200 text-lg leading-relaxed mb-10">
            Whether you&apos;re a college student, seasoned engineer, researcher, or creator — you belong here.
            Zero prerequisites. Pure curiosity and craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-950 font-extrabold rounded-2xl hover:bg-violet-100 transition-all duration-200 shadow-2xl hover:scale-105 group cursor-pointer"
            >
              Join the Community
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {instagramLink && (
              <a
                href={instagramLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet-900/50 border border-violet-500/40 text-white font-semibold rounded-2xl hover:bg-violet-800/60 transition-all duration-200"
              >
                <SocialIcon name="instagram" size={18} className="text-pink-400" />
                Follow @thecodecrax
              </a>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
