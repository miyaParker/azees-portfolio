'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1513px] mb-10 xl:mb-20 mx-auto pt-[80px] md:pt-[120px] h-screen min-h-[900px] md:min-h-[500px] md:max-h-[750px] lg:max-h-[850px] bg-white  relative">
      {/* Header Navigation */}


      {/* Main Hero Content */}
      <div id="about-me" className="w-full h-full flex flex-col md:flex-row items-start mx-auto lg:pt-16 md:pb-32 relative">
        {/* Left Side - Text Content */}
        <motion.div
          className="w-full md:w-[70%] text-center lg:text-center pt-4 lg:pt-8 "
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
              className="ml-3 w-[20px] h-auto md:w-[28px] lg:w-[32px]"
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
            className="text-5xl min-[600px]:text-6xl min-[768px]:text-[60px] min-[900px]:text-[70px] min-[1024px]:text-[80px] min-[1200px]:text-[85px] min-[1400px]:text-[100px] font-semibold text-gray-900 mb-6 leading-[105%] tracking-[0%] relative"
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
            Product & Brand <br /><span className='relative inline-block'>Designer<motion.svg
              width="70"
              height="70"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -translate-x-full -translate-y-[10%] rotate-180 w-[40px] md:w-[50px] h-auto lg:w-[70px]"
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
            </motion.svg></span>

          </motion.h1>
            {/* Right Side - Image for small screens */}
      <motion.div
        className="md:hidden  w-full h-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Hero Image */}
        <motion.div
          className="w-full max-w-[400px] h-auto mx-auto relative -top-30"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/hero-img-mb.png"
            alt="Abdulazees - Product & Brand Designer"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* Right Side - CTA Buttons Container */}
          <motion.div
            className="relative bottom-[80px]  bg-gradient-to-r from-gray-500 to-gray-700 rounded-[40px] p-[6px] lg:p-[10px] border border-gray-400 w-max mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex items-center">
              <Link href="/projects">  <motion.button
                className="cursor-pointer bg-[#03A3CC] text-white px-[16px] lg:px-[32px]  py-[10px] lg:py-[15px] rounded-[40px] font-medium flex items-center justify-center space-x-2 hover:bg-[#0288B3] transition-colors w-max"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Portfolio</span>
                <motion.div
                // animate={{ x: [0, 3, 0] }}
                // transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="rotate-45 w-[20px] lg:w-[24px] h-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0702 9.57L12.0002 3.5L5.93018 9.57" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 20.5V3.67004" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </motion.div>
              </motion.button>
              </Link>

              <Link href="/#footer">
                <motion.button
                  className="cursor-pointer text-white px-4 lg:px-6 :px-8 py-3 sm:py-4 rounded-[40px] font-medium hover:bg-gray-600 transition-colors w-max"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        {/* Left Side - Testimonial Quote */}
        <motion.div
          className="relative -top-40 flex flex-col w-full px-[20px]  max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="flex justify-center items-center flex-col space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {/* Rating Stars */}
            <div className="flex space-x-1">
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
                  <StarIcon className="w-4 h-4 min-[600px]:w-6 min-[600px]:h-6 lg:w-8 lg:h-8 text-[#03A3CC]" />
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <div className="">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10 Years+</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </motion.div>
          <motion.div
            className="mb-4"
          >
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.135 17.9452H5.1C5.22 10.9402 6.6 9.7852 10.905 7.2352C11.4 6.9352 11.565 6.3052 11.265 5.7952C10.98 5.3002 10.335 5.1352 9.84 5.4352C4.77 8.4352 3 10.2652 3 18.9802V27.0652C3 29.6302 5.085 31.7002 7.635 31.7002H12.135C14.775 31.7002 16.77 29.7052 16.77 27.0652V22.5652C16.77 19.9402 14.775 17.9452 12.135 17.9452Z" fill="#344054" />
              <path d="M28.3651 17.9452H21.3301C21.4501 10.9402 22.8301 9.7852 27.1351 7.2352C27.6301 6.9352 27.7951 6.3052 27.4951 5.7952C27.1951 5.3002 26.5651 5.1352 26.0551 5.4352C20.9851 8.4352 19.2151 10.2652 19.2151 18.9952V27.0802C19.2151 29.6452 21.3001 31.7152 23.8501 31.7152H28.3501C30.9901 31.7152 32.9851 29.7202 32.9851 27.0802V22.5802C33.0001 19.9402 31.0051 17.9452 28.3651 17.9452Z" fill="#344054" />
            </svg>
          </motion.div>
          <p className="text-gray-900 mx-auto text-md font-medium leading-relaxed text-left">
            Abdul's Professional execution elevated our brand experience. Strongly endorsed.
          </p>
        </motion.div>
      </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="hidden md:block absolute bottom-0 md:bottom-auto right-0 md:-translate-y-[25%] lg:-translate-y-[15%] w-full max-w-[600px] lg:max-w-[758px] md:w-[450px] lg:w-[500px] xl:w-[758px] h-auto mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Hero Image */}
          <motion.div
            className="w-full h-full overflow-hidden"
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

      {/* Bottom Section - Testimonials and CTA for medium to lg screens */}
      <div className="w-full max-w-[1513px] mx-auto relative">
        <motion.div
          className="hidden md:flex w-full px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] absolute bottom-0 left-0 flex flex-col md:flex-row items-start md:items-center justify-between z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Left Side - Testimonial Quote */}
          <motion.div
            className="hidden min-[500px]:block flex flex-col items-end flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div
              className="mb-4"
            // animate={{
            //   scale: [1, 1.1, 1]
            // }}
            // transition={{
            //   duration: 2,
            //   repeat: Infinity,
            //   ease: "easeInOut"
            // }}
            >
              <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.135 17.9452H5.1C5.22 10.9402 6.6 9.7852 10.905 7.2352C11.4 6.9352 11.565 6.3052 11.265 5.7952C10.98 5.3002 10.335 5.1352 9.84 5.4352C4.77 8.4352 3 10.2652 3 18.9802V27.0652C3 29.6302 5.085 31.7002 7.635 31.7002H12.135C14.775 31.7002 16.77 29.7052 16.77 27.0652V22.5652C16.77 19.9402 14.775 17.9452 12.135 17.9452Z" fill="#344054" />
                <path d="M28.3651 17.9452H21.3301C21.4501 10.9402 22.8301 9.7852 27.1351 7.2352C27.6301 6.9352 27.7951 6.3052 27.4951 5.7952C27.1951 5.3002 26.5651 5.1352 26.0551 5.4352C20.9851 8.4352 19.2151 10.2652 19.2151 18.9952V27.0802C19.2151 29.6452 21.3001 31.7152 23.8501 31.7152H28.3501C30.9901 31.7152 32.9851 29.7202 32.9851 27.0802V22.5802C33.0001 19.9402 31.0051 17.9452 28.3651 17.9452Z" fill="#344054" />
              </svg>
            </motion.div>
            <p className="text-gray-900 text-lg xl:text-xl font-medium leading-relaxed text-left">
              Abdul's Professional execution elevated our brand experience. Strongly endorsed.
            </p>
          </motion.div>

          {/* <div className='flex flex-col md:flex-row items-start gap-4'> */}
          {/* Center - Rating and Experience */}
          <motion.div
            className="flex flex-col space-y-2 flex-1 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {/* Rating Stars */}
            <div className="flex space-x-1">
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
                  <StarIcon className="w-4 h-4 min-[600px]:w-6 min-[600px]:h-6 xl:w-8 lg:h-8 text-[#03A3CC]" />
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <div className="">
              <div className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900">10 Years+</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </motion.div>

          {/* Right Side - CTA Buttons Container */}
          <motion.div
            className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-[40px] p-[6px] lg:p-[10px] border border-gray-400 w-max"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex items-center justify-center w-max">
              <Link href="/projects">  <motion.button
                className="cursor-pointer bg-[#03A3CC] text-white px-[16px] lg:px-[32px]  py-[10px] lg:py-[15px] rounded-[40px] font-medium flex items-center justify-center space-x-2 hover:bg-[#0288B3] transition-colors w-max"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Portfolio</span>
                <motion.div
                // animate={{ x: [0, 3, 0] }}
                // transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="rotate-45 w-[20px] lg:w-[24px] h-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0702 9.57L12.0002 3.5L5.93018 9.57" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 20.5V3.67004" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </motion.div>
              </motion.button>
              </Link>

              <Link href="/#footer">
                <motion.button
                  className="cursor-pointer text-white px-4 lg:px-6 :px-8 py-3 sm:py-4 rounded-[40px] font-medium hover:bg-gray-600 transition-colors w-max"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire me
                </motion.button>
              </Link>
            </div>
          </motion.div>
          {/* </div> */}

        </motion.div>
      </div>

    


    </div >
  );
};

export default HeroSection;