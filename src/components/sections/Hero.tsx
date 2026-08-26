'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-gray-950 overflow-hidden pt-28 pb-20">
      {/* Dynamic atmospheric glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[120px]" />
      </div>

      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #8B5CF6 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span>AI &amp; Web3 Community Network • Pan-India</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            AI and Web3 shouldn&apos;t depend on{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              your pin code.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link
              href={hero.primaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-950 transition-all duration-200 hover:scale-[1.02] group"
            >
              {hero.primaryCTA.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={hero.secondaryCTA.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-200"
            >
              <Sparkles size={18} className="text-violet-400" />
              {hero.secondaryCTA.label}
            </Link>
          </motion.div>

          {/* Social Proof Mini Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-violet-400" />
              <span>Jabalpur • Bhopal • Indore &amp; Beyond</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-violet-400" />
              <span>Tier-1 to Tier-3 Builder Ecosystems</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
