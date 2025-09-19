'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[1440px] mx-auto relative">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="home" />

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-start px-4 sm:px-8 pt-8 lg:pt-16 pb-32 overflow-hidden relative">
        {/* Left Side - Text Content */}
        <motion.div 
          className="flex-1 max-w-[962px] text-center lg:text-center pt-4 lg:pt-8 w-full lg:w-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hello Speech Bubble */}
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white border-2 border-gray-900 rounded-full px-4 py-2 text-sm font-medium relative text-gray-900">
              Hello!
            </div>
            <motion.svg 
              width="32" 
              height="33" 
              viewBox="0 0 32 33" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path 
                d="M2.24512 20C2.24512 17 5.24512 11 2.24512 2M9.74512 23.5C14.0785 19.3333 22.9451 9.2 23.7451 2M12.7451 30.5C15.4118 30.5 22.5451 29.1 29.7451 23.5" 
                stroke="#05B4E0" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-[100px] font-semibold text-gray-900 mb-6 leading-[105%] tracking-[0%] relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm{' '}
            <motion.span 
              className="text-[#03A3CC]"
              animate={{ 
                color: ["#03A3CC", "#0288B3", "#03A3CC"]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Abdulazees,
            </motion.span>
            <br />
            Product & Brand Designer
            <motion.svg 
              width="70" 
              height="70" 
              viewBox="0 0 32 33" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[20%] bottom-[-40px] rotate-180"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <path 
                d="M2.24512 20C2.24512 17 5.24512 11 2.24512 2M9.74512 23.5C14.0785 19.3333 22.9451 9.2 23.7451 2M12.7451 30.5C15.4118 30.5 22.5451 29.1 29.7451 23.5" 
                stroke="#05B4E0" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.h1>

        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="relative lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-full lg:w-[758px] h-[400px] sm:h-[500px] lg:h-[962px] mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Hero Image */}
          <motion.div 
            className="w-full h-full rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/hero-img.png"
              alt="Abdulazees - Product & Brand Designer"
              width={758}
              height={962}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section - Testimonials and CTA */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8 sm:pb-16 flex flex-col lg:flex-row items-center justify-between z-20 space-y-6 lg:space-y-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {/* Left Side - Testimonial Quote */}
        <motion.div 
          className="flex flex-col items-start max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            className="mb-4"
            animate={{ 
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.135 17.9452H5.1C5.22 10.9402 6.6 9.7852 10.905 7.2352C11.4 6.9352 11.565 6.3052 11.265 5.7952C10.98 5.3002 10.335 5.1352 9.84 5.4352C4.77 8.4352 3 10.2652 3 18.9802V27.0652C3 29.6302 5.085 31.7002 7.635 31.7002H12.135C14.775 31.7002 16.77 29.7052 16.77 27.0652V22.5652C16.77 19.9402 14.775 17.9452 12.135 17.9452Z" fill="#344054"/>
              <path d="M28.3651 17.9452H21.3301C21.4501 10.9402 22.8301 9.7852 27.1351 7.2352C27.6301 6.9352 27.7951 6.3052 27.4951 5.7952C27.1951 5.3002 26.5651 5.1352 26.0551 5.4352C20.9851 8.4352 19.2151 10.2652 19.2151 18.9952V27.0802C19.2151 29.6452 21.3001 31.7152 23.8501 31.7152H28.3501C30.9901 31.7152 32.9851 29.7202 32.9851 27.0802V22.5802C33.0001 19.9402 31.0051 17.9452 28.3651 17.9452Z" fill="#344054"/>
            </svg>
          </motion.div>
          <p className="text-gray-900 text-lg sm:text-xl font-medium leading-relaxed text-left">
            Abdul's Professional execution elevated our brand experience. Strongly endorsed.
          </p>
        </motion.div>

        {/* Center - Rating and Experience */}
        <motion.div 
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {/* Rating Stars */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              >
                <StarIcon className="w-8 h-8 text-[#03A3CC]" />
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">10 Years+</div>
            <div className="text-sm text-gray-600">Experience</div>
          </div>
        </motion.div>

        {/* Right Side - CTA Buttons Container */}
        <motion.div 
          className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-full p-1 border border-gray-400 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="flex flex-col sm:flex-row">
            <motion.button 
              className="bg-[#03A3CC] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-[#0288B3] transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Portfolio</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↗
              </motion.div>
            </motion.button>
            
            <motion.button 
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-600 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire me
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;