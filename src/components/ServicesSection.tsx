'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CascadedCard from './CascadedCard';

const ServicesSection = () => {
  return (
    <section className="pt-[100px] pb-[300px] px-4 sm:px-8 bg-gray-900 relative h-max">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="text-[#03A3CC]">Services</span>
          </h2>
          <p className="text-white text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            From concept to execution, I provide design and strategy services that ensure your product not only looks good but also works seamlessly for users.
          </p>
        </motion.div>

        {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative top-[200px]">
            {/* UI/UX Design Card */}
            <CascadedCard
              title="UI/UX Design"
              // height="h-[400px]"
              delay={0.2}
            >
              <Image src="/ui:ux.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
             
            </CascadedCard>

            {/* Brand Design Card */}
            <CascadedCard
              title="Brand Design"
              // height="h-[400px]"
              delay={0.4}
            >
             <Image src="/brand.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
            </CascadedCard>

            {/* Graphic Design Card */}
            <CascadedCard
              title="Graphic Design"
              // height="h-[400px]"
              delay={0.6}
            >
              <Image src="/social.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
            </CascadedCard>
          </div>
        </div>
    </section>
  );
};

export default ServicesSection;