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
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden text-center transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/15 dark:bg-violet-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        {/* 1. TOP CENTER ALIGNED LOGO IN CIRCULAR FORMAT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-indigo-500 shadow-2xl shadow-violet-600/30">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gray-950 ring-4 ring-white/10">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-1.5 rounded-full ring-2 ring-white dark:ring-gray-950 shadow-md">
              <Sparkles size={14} />
            </div>
          </div>
        </motion.div>

        {/* 2. COMMUNITY NAME IN BOLD HEADING */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-3"
        >
          <span className="bg-gradient-to-r from-gray-900 via-violet-800 to-purple-900 dark:from-white dark:via-violet-200 dark:to-purple-300 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* 3. TAGLINE */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-2xl font-bold text-violet-600 dark:text-violet-400 mb-8 max-w-2xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* 4. EYE-CATCHING 3-LINE MISSION */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-gray-900/70 border border-violet-200/70 dark:border-violet-900/40 backdrop-blur-xl shadow-xl shadow-violet-900/5 text-left sm:text-center space-y-3"
        >
          {siteConfig.mission.map((line, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base md:text-lg font-medium text-gray-700 dark:text-gray-200 leading-relaxed flex items-start sm:justify-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 shrink-0" />
              <span>{line}</span>
            </p>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30 hover:scale-105 transition-all duration-200"
          >
            Explore Highlights
            <ArrowRight size={16} />
          </a>

          {instagram && (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-pink-500/10 dark:bg-pink-500/15 border border-pink-500/30 text-pink-700 dark:text-pink-300 hover:bg-pink-500/20 hover:scale-105 transition-all duration-200"
            >
              <SocialIcon name="instagram" size={18} />
              <span>Follow @thecodecrax</span>
            </a>
          )}
        </motion.div>

        {/* 5. ANIMATED COUNTERS (+ FORMAT) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-black/10 dark:border-white/10"
        >
          {statsList.map((st) => (
            <div
              key={st.label}
              className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/80 dark:border-white/5 transition-all hover:border-violet-400 dark:hover:border-violet-500/40"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent mb-1">
                <AnimatedCounter end={st.value} suffix={st.suffix || '+'} />
              </p>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-1">
                {st.label}
              </h3>
              {st.description && (
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  {st.description}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
