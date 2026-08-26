'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { siteConfig } from '@/data/site';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { getEnabledSocialLinks } from '@/data/social';

export function HeaderSingle() {
  const socialLinks = getEnabledSocialLinks();
  const instagram = socialLinks.find((s) => s.icon === 'instagram') || socialLinks[0];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Left */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-gray-900 dark:text-white">
            {siteConfig.name}
          </span>
        </Link>

        {/* Quick Nav & Right Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-5 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#highlights" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Highlights
            </a>
            <a href="#proof-of-work" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Proof Of Work
            </a>
            <a href="#connect" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Connect
            </a>
          </nav>

          {instagram && (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5"
              aria-label="Instagram Profile"
            >
              <SocialIcon name="instagram" size={18} />
            </a>
          )}

          {/* Theme Toggle Top Right */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
