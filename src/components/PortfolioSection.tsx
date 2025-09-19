'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's have a look at my{' '}
            <span className="text-[#03A3CC]">Portfolio</span>
          </motion.h2>
          
          <motion.button
            className="bg-[#03A3CC] text-white px-8 py-4 rounded-[60px] font-bold text-lg hover:bg-[#0288B3] transition-colors duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All
          </motion.button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CineTrips Project Card */}
          <motion.div
            className="bg-white rounded-3xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/cinetrips.png"
              alt="CineTrips Project"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          {/* Grabby Project Card */}
          <motion.div
            className="bg-white rounded-3xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/grabby.png"
              alt="Grabby Project"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {['Product Design', 'Logo Design', 'Graphic Design', 'Dashboard Design'].map((filter, index) => (
            <motion.button
              key={filter}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-[24px] font-normal hover:bg-gray-200 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Project Detail */}
        <motion.div
          className="bg-white rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h3 className="text-[48px] font-bold text-gray-800">CineTrips - Cinema Booking App</h3>
            <div className="w-12 h-12 bg-[#03A3CC] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-[24px] font-normal text-center leading-relaxed">
            CineTrips is a mobile-first cinema booking app that makes discovering movies, choosing seats, and booking tickets effortless. Designed with speed, usability, and smart features like real-time seat selection and QR ticketing, it delivers a seamless movie-going experience from discovery to showtime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;