'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyHireMeSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 relative overflow-hidden" style={{ backgroundColor: '#F2F7F5' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image with Blue Card (Right on mobile) */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Blue Card with Inner Shadow */}
            <div className="relative bg-[#03A3CC]" style={{ 
              width: '442px', 
              height: '525px', 
              borderRadius: '118px',
              boxShadow: '0 35px 70px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(0, 0, 0, 0.2)'
            }}>
              {/* Inner Shadow Effect - Top and Left only */}
              <div 
                className="absolute inset-0"
                style={{
                  borderRadius: '118px',
                  boxShadow: 'inset 4px 0 8px rgba(0, 0, 0, 0.15), inset 0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              ></div>
              
              {/* Image Container - Absolutely positioned with legs extending outside */}
              <div className="absolute z-50" style={{ bottom: '-150px', transform: 'translateX(-15%)', width: '759px' }}>
                              <Image
                src="/hire-me.png"
                alt="Abdulazees - UI/UX Designer"
                width={759}
                height={713}
                className="w-[759px] h-auto rounded-2xl"
              />
              </div>
            </div>
          </motion.div>

          {/* Right Section - Content (Left on mobile) */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
              Why Hire me?
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              I combine creative design, strategic thinking, and hands-on experience to deliver solutions that not only look good but also drive measurable results. With a track record of boosting engagement, cutting delivery times, and improving user adoption, I bring both creativity and impact to every project.
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Project Completed */}
              <motion.div 
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                  100+
                </div>
                <div className="text-lg text-gray-600">
                  Project Completed
                </div>
              </motion.div>

              {/* Brand Worked With */}
              <motion.div 
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                  50+
                </div>
                <div className="text-lg text-gray-600">
                  Brand Worked With
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-[#03A3CC] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0288B3] transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;