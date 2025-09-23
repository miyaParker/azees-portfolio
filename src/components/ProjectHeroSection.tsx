'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectHeroSectionProps {
  title: string;
  client: string;
  industry: string;
  platform: string;
  backgroundColor: string;
  backgroundImage?: string;
}

export default function ProjectHeroSection({
  title,
  client,
  industry,
  platform,
  backgroundColor,
  backgroundImage = '/hero.png'
}: ProjectHeroSectionProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Project Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-bold text-white leading-tight max-w-4xl">
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Info bar */}
        <div className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Client */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                <p className="text-white/95 text-lg">{client}</p>
              </motion.div>

              {/* Industry */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Industry</h3>
                <p className="text-white/95 text-lg">{industry}</p>
              </motion.div>

              {/* Platform */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Platform</h3>
                <p className="text-white/95 text-lg">{platform}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}