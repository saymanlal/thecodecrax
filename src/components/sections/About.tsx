'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const about = siteConfig.about;
  if (!about) return null;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <SectionHeader
              label="Our Mission"
              headline={about.headline}
              subheadline={about.subheadline}
              align="left"
              className="mb-8"
            />
            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              {about.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-violet-50/70 border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
