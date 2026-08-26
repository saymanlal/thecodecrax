'use client';

import Link from 'next/link';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { getEnabledNavLinks } from '@/data/navigation';
import { getEnabledSocialLinks } from '@/data/social';
import { Container } from '@/components/ui/Container';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Footer() {
  const navLinks = getEnabledNavLinks();
  const socialLinks = getEnabledSocialLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-violet-950/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(109,40,217,0.15),rgba(255,255,255,0))]" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-700 to-purple-500 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-sm">tCX</span>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">{siteConfig.name}</span>
                <p className="text-xs text-violet-400 font-medium">India&apos;s Tech Community Network</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-200"
                  >
                    <SocialIcon name={link.icon || link.name} size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-5">
              Connect &amp; Collaborate
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} className="text-violet-400 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="text-gray-400 flex items-center gap-2">
                  <MapPin size={16} className="text-violet-400 shrink-0" />
                  <span>Across Madhya Pradesh &amp; India</span>
                </div>
              </li>
              <li className="pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-semibold hover:bg-violet-600 hover:text-white transition-all"
                >
                  Join our Discord &amp; Meetups <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Built with purpose for India&apos;s builders.
          </p>
        </div>
      </Container>
    </footer>
  );
}
