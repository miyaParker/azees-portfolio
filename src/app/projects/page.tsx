'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CascadedCard from '@/components/CascadedCard';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { useMemo, useState } from 'react';
import FullWidthSlider from '@/components/FullWidthSlider';

const PortfolioPage = () => {
  const graphicImages = useMemo(() => (
    [
      { src: '/graphic-design/g-1.png', alt: 'Graphic 1' },
      { src: '/graphic-design/g-2.png', alt: 'Graphic 2' },
      { src: '/graphic-design/g-3.png', alt: 'Graphic 3' },
      { src: '/graphic-design/g-4.png', alt: 'Graphic 4' },
      { src: '/graphic-design/g-5.png', alt: 'Graphic 5' },
      { src: '/graphic-design/g-6.png', alt: 'Graphic 6' },
      { src: '/graphic-design/g-7.png', alt: 'Graphic 7' },
      { src: '/graphic-design/g-8.png', alt: 'Graphic 8' },
      { src: '/graphic-design/g-9.png', alt: 'Graphic 9' },
      { src: '/graphic-design/g-10.png', alt: 'Graphic 10' },
      { src: '/graphic-design/g-11.png', alt: 'Graphic 11' },
      { src: '/graphic-design/g-12.png', alt: 'Graphic 12' },
    ]
  ), []);

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSliderAt = (index: number) => {
    setSliderIndex(index);
    setIsSliderOpen(true);
  };

  const brandImages = useMemo(() => (
    [
      { src: '/brands/inside-africa.png', alt: 'Inside Africa' },
      { src: '/brands/eholaz.png', alt: 'Eholaz' },
      { src: '/brands/peeg.png', alt: 'Peeg' },
      { src: '/brands/obz.png', alt: 'OBZ' },
      { src: '/brands/mej.png', alt: 'MEJ' },
      { src: '/brands/blueberry.png', alt: 'Blueberry' },
      { src: '/brands/creme.png', alt: 'Creme' },
      { src: '/brands/lasgidi.png', alt: 'Lasgidi' },
      { src: '/brands/grabby.png', alt: 'Grabby' },
    ]
  ), []);

  const [isBrandSliderOpen, setIsBrandSliderOpen] = useState(false);
  const [brandSliderIndex, setBrandSliderIndex] = useState(0);

  const openBrandSliderAt = (index: number) => {
    setBrandSliderIndex(index);
    setIsBrandSliderOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="projects" />

      {/* Hero Section - My Portfolio */}
      <section className="pt-[120px] lg:pt-[180px] mb-[120px] lg:mb-[150px] px-4 sm:px-8 relative h-max">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto relative z-10 text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My <span className="text-[#03A3CC]">Portfolio</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept to execution, I provide design and strategy services that ensure your product not only looks good but also works seamlessly for users.
          </motion.p>

          {/* Category Preview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-0 lg:pt-[60px] items-center justify-center">
            {/* UI/UX Design Card */}
            <CascadedCard
              title="UI/UX Design"
              // height="h-[400px]"
              delay={0}
            >
              <Image src="/ui:ux.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
             
            </CascadedCard>

            {/* Brand Design Card */}
            <CascadedCard
              title="Brand Design"
              // height="h-[400px]"
              delay={0.8}
            >
             <Image src="/brand.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
            </CascadedCard>

            {/* Graphic Design Card */}
            <CascadedCard
              title="Graphic Design"
              // height="h-[400px]"
              delay={1.6}
            >
              <Image src="/social.png" alt="UI/UX Design" width={1000} height={1000} className="h-full w-full object-cover" />
            </CascadedCard>
          </div>
        </div>
      </section>

      {/* UI/UX Design Section */}
      <section className="mb-[120px] lg:mb-[150px] px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              UI/UX <span className="text-[#03A3CC]">Design</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Creating intuitive and engaging user experiences through thoughtful design and user-centered approach.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="space-y-8">
            {/* Row 1: CineTrips (Big) + Rosita Cuisine (Small) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.a
                href="/projects/cinetrips"
                className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/cinetrips.png"
                  alt="CineTrips - Movie Booking App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">CineTrips</h3>
                    <p className="text-white/90 text-lg">Movie Booking App</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/projects/rosita-cuisine"
                className="relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/rosita-cuisine.png"
                  alt="Rosita Cuisine - Food Delivery App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Rosita Cuisine</h3>
                    <p className="text-white/90">Food Delivery App</p>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Row 2: Baldev (Small) + CheckBox (Big) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.a
                href="/projects/baldev"
                className="relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/baldev.png"
                  alt="Baldev - Skills Resources"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Baldev</h3>
                    <p className="text-white/90">Skills Resources</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/projects/checkbox"
                className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/checkbox.png"
                  alt="CheckBox - Management Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">CheckBox</h3>
                    <p className="text-white/90 text-lg">Management Dashboard</p>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Row 3: Grabby (Big) + Easy Commute (Small) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.a
                href="/projects/grabby"
                className="lg:col-span-2 relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/grabby.png"
                  alt="Grabby - E-commerce Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">Grabby</h3>
                    <p className="text-white/90 text-lg">E-commerce Platform</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/projects/easy-commute"
                className="relative h-96 rounded-3xl overflow-hidden block group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/projects/easy-commute.png"
                  alt="Easy Commute - Transportation App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="relative z-10 p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Easy Commute</h3>
                    <p className="text-white/90">Transportation App</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Design Section */}
      <section className="px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Brand <span className="text-[#03A3CC]">Design</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Building memorable brand identities that resonate with your audience and stand out in the market.
            </p>
          </motion.div>

          {/* Logo Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {brandImages.map((img, idx) => (
              <button key={img.src} className="relative" onClick={() => openBrandSliderAt(idx)} aria-label={`Open ${img.alt ?? 'brand'} in slider`}>
                <Image src={img.src} alt={img.alt ?? 'Brand'} width={395} height={395} />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Graphic <span className="text-[#03A3CC]">Design</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Creating visually compelling graphics that communicate your message effectively across all platforms.
            </p>
          </motion.div>

          {/* Graphic Showcase Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {graphicImages.map((img, idx) => (
              <button key={img.src} className="relative" onClick={() => openSliderAt(idx)} aria-label={`Open ${img.alt ?? 'graphic'} in slider`}>
                <Image src={img.src} alt={img.alt ?? 'Graphic'} width={395} height={395} />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
      <FullWidthSlider
        images={graphicImages}
        isOpen={isSliderOpen}
        initialIndex={sliderIndex}
        onClose={() => setIsSliderOpen(false)}
        onChangeIndex={(i) => setSliderIndex(i)}
      />
      <FullWidthSlider
        images={brandImages}
        isOpen={isBrandSliderOpen}
        initialIndex={brandSliderIndex}
        onClose={() => setIsBrandSliderOpen(false)}
        onChangeIndex={(i) => setBrandSliderIndex(i)}
      />
    </div>
  );
};

export default PortfolioPage;