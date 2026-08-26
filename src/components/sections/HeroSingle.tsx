'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { getEnabledStats } from '@/data/stats';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { getEnabledSocialLinks } from '@/data/social';

export function HeroSingle() {
  const statsList = getEnabledStats();
  const socialLinks = getEnabledSocialLinks();
  const instagram = socialLinks.find((s) => s.icon === 'instagram') || socialLinks[0];

  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 text-center transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 1. Top center aligned logo */}
        <div className="flex justify-center mb-5">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-md">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 2. Community Name */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
          {siteConfig.name}
        </h1>

        {/* 3. Tagline */}
        <p className="text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          {siteConfig.tagline}
        </p>

        {/* 4. Eye-catching 3-line mission */}
        <div className="max-w-2xl mx-auto mb-8 p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-left sm:text-center space-y-2.5">
          {siteConfig.mission.map((line, idx) => (
            <p
              key={idx}
              className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors"
          >
            <span>View Highlights</span>
            <ArrowRight size={15} />
          </a>

          {instagram && (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              <SocialIcon name="instagram" size={16} />
              <span>@thecodecrax</span>
            </a>
          )}
        </div>

        {/* 5. Clean Counter Animation Style */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
          {statsList.map((st) => (
            <div
              key={st.label}
              className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-0.5">
                <AnimatedCounter end={st.value} suffix={st.suffix || '+'} />
              </p>
              <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {st.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
