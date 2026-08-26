'use client';

import { motion } from 'framer-motion';
import { Brain, Globe, Calendar, GraduationCap, MapPin, Users, ArrowRight } from 'lucide-react';
import { getEnabledInitiatives } from '@/data/initiatives';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Globe,
  Calendar,
  GraduationCap,
  MapPin,
  Users,
};

export function Initiatives() {
  const initiativesList = getEnabledInitiatives();
  if (initiativesList.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 relative">
      <Container>
        <SectionHeader
          label="What We Do"
          headline="Building communities that build India."
          subheadline="From hands-on hack nights to campus workshops, here is how thecodecraX enables the next generation of technologists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiativesList.map((item, i) => {
            const Icon = iconMap[item.icon] || Globe;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 bg-white rounded-3xl border border-gray-200/80 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-violet-100/80 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300 shadow-sm">
                    <Icon size={26} className="text-violet-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-violet-600 text-sm font-semibold hover:gap-2.5 transition-all mt-auto"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
