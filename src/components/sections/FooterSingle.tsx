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
    <footer id="connect" className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight">{siteConfig.name}</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed max-w-sm">
              Empowering developer communities across India through hands-on technical sessions, protocol collaborations, and build nights.
            </p>
            <div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={13} />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Social Handles */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Community Channels
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon name={link.icon || link.name} size={15} />
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Building for India&apos;s developer ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
