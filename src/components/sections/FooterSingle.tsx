'use client';

import Image from 'next/image';
import { Mail, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { getEnabledSocialLinks } from '@/data/social';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function FooterSingle() {
  const socialLinks = getEnabledSocialLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="py-16 sm:py-20 border-t border-black/10 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-violet-500 shadow-md">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight">{siteConfig.name}</span>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              Expanding access to AI models, Web3 protocols, and developer communities across India. Co-creating with ecosystem builders, campuses, and global foundations.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline"
              >
                <Mail size={14} />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Social Handles (Editable from code) */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Community Channels &amp; Handles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-violet-500 dark:hover:border-violet-400 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      <SocialIcon name={link.icon || link.name} size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {link.name}
                      </p>
                      {link.handle && (
                        <p className="text-[11px] text-gray-500 dark:text-gray-400">
                          {link.handle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Building for India&apos;s Next Generation of Builders</span>
            <Sparkles size={13} className="text-violet-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
