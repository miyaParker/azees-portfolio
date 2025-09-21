'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection = () => {
  return (
    <section className="w-full max-w-[1513px] mx-auto py-20 lg:py-40 px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px] bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row  items-center justify-between mb-10 lg:mb-16">
          <motion.h2 
            className="text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl  font-bold text-gray-800 mb-6 lg:mb-0 w-full max-w-[400px] lg:max-w-max mx-auto lg:mx-0 leading-[120%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's have a look at my{' '}
            <span className="text-[#03A3CC]">Portfolio</span>
          </motion.h2>
          
          <Link href="/projects">
          <motion.button
            className="cursor-pointer bg-[#03A3CC] text-white px-6 py-2 lg:px-8 lg:py-4 rounded-[60px] font-bold text-lg hover:bg-[#0288B3] transition-colors duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All
          </motion.button>
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mb-12">
          {/* CineTrips Project Card */}
          <Link href="/projects/cinetrips">  <motion.div
            className="bg-white relative overflow-hidden"
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
              className="w-full h-auto"
            />
          </motion.div>
          </Link>

          {/* Grabby Project Card */}
          <Link href="/projects/grabby">    
          <motion.div
            className="bg-white relative overflow-hidden"
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
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>
          </Link>
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
              className="bg-gray-100 text-gray-700 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-[18px] lg:text-[24px] font-normal hover:bg-gray-200 transition-colors duration-300"
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
          <Link href="/projects/cinetrips" className="mb-4">
            <h3 className="hover:text-[#03A3CC] duration-300 transition-all ease-out w-full text-center text-[28px] sm:text-[32px] lg:text-[48px] font-bold text-gray-800 leading-[150%]"><span>CineTrips - Cinema Booking App</span><div className="group-hover:bg-[#03A3CC]/20 duration-300 hover:duration-300 transition-all ease-out ml-2 inline-flex top-4 h-8 w-8 lg:w-12 lg:h-12 bg-[#03A3CC] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            </h3>
            
          </Link>
          <p className="text-center text-gray-600 text-[18px] lg:text-[24px] font-normal text-center leading-relaxed">
            CineTrips is a mobile-first cinema booking app that makes discovering movies, choosing seats, and booking tickets effortless. Designed with speed, usability, and smart features like real-time seat selection and QR ticketing, it delivers a seamless movie-going experience from discovery to showtime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;