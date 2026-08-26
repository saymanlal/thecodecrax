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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-950/70 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-violet-500/50 shadow-md group-hover:scale-105 transition-transform">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="36px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {siteConfig.name}
            </span>
          </div>
        </Link>

        {/* Quick Nav & Top Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#highlights" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Highlights
            </a>
            <a href="#proof-of-work" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Proof Of Work
            </a>
            <a href="#connect" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Connect
            </a>
          </nav>

          {instagram && (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-all hidden xs:flex items-center justify-center"
              aria-label="Instagram Profile"
            >
              <SocialIcon name="instagram" size={17} />
            </a>
          )}

          {/* Theme Toggle Top Right */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
