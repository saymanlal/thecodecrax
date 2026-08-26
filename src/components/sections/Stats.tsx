'use client';

import { motion } from 'framer-motion';
import { getEnabledStats } from '@/data/stats';
import { Container } from '@/components/ui/Container';

export function Stats() {
  const statsList = getEnabledStats();
  if (statsList.length === 0) return null;

  return (
    <section className="py-16 bg-gray-900 border-y border-violet-950/50 relative">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent mb-2 tracking-tight">
                {stat.value}
              </p>
              <h3 className="text-white font-bold text-base md:text-lg mb-1">{stat.label}</h3>
              {stat.description && (
                <p className="text-gray-400 text-xs md:text-sm leading-snug">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
