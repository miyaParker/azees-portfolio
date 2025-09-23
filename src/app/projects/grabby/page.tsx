'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const GrabbyPage = () => {
  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      <Navbar variant="dark" isAbsolute={false} />

      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[150px] min-h-screen flex flex-col overflow-hidden bg-gray-900">
        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center px-4 sm:px-8 max-w-4xl mx-auto">
            <motion.h1
              className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shop smarter, faster, and easier with Grabby. Seamless shopping at your fingertips anytime, anywhere.
            </motion.h1>
          </div>
        </div>

        {/* Project Details Footer */}
        <div className="relative z-10 bg-[#C50536] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Client */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/90 text-lg">CineTrips</p>
              </motion.div>

              {/* Industry */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/90 text-lg">Entertainment</p>
              </motion.div>

              {/* Platform */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/90 text-lg">iOS</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Intro Image Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/projects/grabby/intro.png"
              alt="Grabby Project Introduction"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>


      {/* Project Overview Section */}
      <section className="w-full max-w-[1513px] overflow-hidden mx-auto py-20 px-[20px] md:px-[40px] xl:px-[80px] bg-[#FFFBF8]">
        <div className="mx-auto">
          <div className="relative min-h-[600px] lg:min-h-[700px]">
            {/* Left Side - Project Details */}
            <motion.div
              className="w-full lg:max-w-[70%] space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Overview Title */}
              <motion.h2
                className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold text-[#C50536]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-[#C50536]">Project Overview</span>
              </motion.h2>

              {/* Project Description */}
              <motion.div
                className="space-y-6 text-black text-justify leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  Grabby is a mobile-first e-commerce app designed to simplify and modernize the online shopping experience. The project aimed to create an intuitive platform that allows users to discover products, browse categories, place bids, and complete purchases with ease and convenience.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  The app focuses on user experience with features like smart search functionality, organized product listings, secure bidding system, and real-time bid tracking. The design prioritizes clarity and accessibility, ensuring users can navigate and complete their shopping journey efficiently.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  This case study covers the end-to-end UX/UI design process, from user research and wireframing to prototyping and final visual design, with a strong emphasis on mobile responsiveness and user-centered design principles.
                </p>
              </motion.div>

              {/* Mobile Mockup for Small Screens */}
              <motion.div
                className="md:hidden flex justify-center items-center my-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Image
                    src="/projects/grabby/mockup.png"
                    alt="Grabby Mobile Mockup"
                    width={535}
                    height={640}
                    className="w-[300px] sm:w-[450px] h-auto relative -translate-x-[20%]"
                    priority
                  />
                </div>
              </motion.div>

              {/* Project Details Grid */}
              <motion.div
                className="w-max lg:w-full mx-auto md:mx-0 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Left Side - My Role and Tools */}
                <div className="flex flex-col space-y-4 md:space-y-8 min-[1024px]:pb-32 min-[1280px]:pb-0">
                  {/* My Role */}
                  <div className="space-y-4 w-max lg:w-full">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/projects/cinetrips/role.png"
                          alt="Role Icon"
                          width={64}
                          height={64}
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                        />
                      </div>
                      <h3 className="text-center md:text-left text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-medium text-gray-900">My Role</h3>
                    </div>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]" style={{ color: '#212121' }}>Lead UX/UI Designer</p>
                  </div>

                  {/* Tools Used */}
                  <div className="space-y-4 ">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/projects/cinetrips/tools.png"
                        alt="Tools Icon"
                        width={64}
                        height={64}
                        className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                      />
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-medium text-gray-900">Tools Used</h3>
                    </div>
                    <div className="flex space-x-3">
                      <Image
                        src="/projects/cinetrips/figma.png"
                        alt="Figma"
                        width={41}
                        height={63}
                        className="w-[15px] h-[24px] sm:w-[19px] sm:h-[28px] md:w-[28px] md:h-[42px] lg:w-[27px] lg:h-[36px] xl:w-[31px] xl:h-[40px]"
                      />
                      <Image
                        src="/projects/cinetrips/photoshop.png"
                        alt="Photoshop"
                        width={64}
                        height={62}
                        className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                      />
                      <Image
                        src="/projects/cinetrips/illustrator.png"
                        alt="Illustrator"
                        width={64}
                        height={62}
                        className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - My Responsibilities */}
                <div className="space-y-4 w-max lg:w-1/2 xl:w-1/2">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/projects/cinetrips/tasks.png"
                      alt="Tasks Icon"
                      width={64}
                      height={64}
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-medium text-gray-900">My Responsibilities</h3>
                  </div>
                  <ul className="space-y-2" style={{ color: '#212121' }}>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#C50536] rounded-full mr-3"></span>
                      UX Researcher
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#C50536] rounded-full mr-3"></span>
                      UX Designer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#C50536] rounded-full mr-3"></span>
                      UX Writer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#C50536] rounded-full mr-3"></span>
                      UI Designer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#C50536] rounded-full mr-3"></span>
                      Brand Identity Designer
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Mobile Mockup - Hidden on small screens, absolute on medium+ */}
            <motion.div
              className="hidden md:block md:absolute flex justify-center items-center
                         md:right-0 md:-bottom-[100px] lg:top-0 lg:-right-[90px] xl:-right-[110px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/projects/grabby/mockup.png"
                  alt="Grabby Mobile Mockup"
                  width={535}
                  height={640}
                  className="w-[550px] lg:w-[660px] xl:w-[800px] h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="w-full max-w-[1513px] overflow-hidden mx-auto py-20 px-[20px] md:px-[40px] xl:px-[80px] bg-[#FFF4F7] relative">
        {/* Decorative quarter circle bottom-left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[520px] h-[360px] md:w-[640px] md:h-[420px] bg-[#FFD0DD] rounded-tr-full"
          aria-hidden="true"
        />
        <motion.div
          className="space-y-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Problem Statement and Solution */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Problem Statement (Image Left) */}
            <motion.div
              className="relative w-full space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold text-black">
                Problem <span className="text-[#C50536]">Statement</span>
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-black leading-relaxed max-w-[640px]">
                Many online shoppers struggle to find a reliable and user-friendly e‑commerce app that offers
                a seamless shopping experience, with clear product listings and an easy checkout process.
                Additionally, many users are hesitant to bid on items online, as they may not understand the
                bidding process or be unsure of its reliability.
              </p>
              <Image
                src="/projects/grabby/problem-statement.png"
                alt="Grabby Problem Statement"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
                priority
              />
            </motion.div>

            {/* Possible Solution */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-bold text-black">
                Possible <span className="text-[#C50536]">Solution</span>
              </h2>
              <div className="space-y-4 text-[16px] lg:text-[18px] xl:text-[20px] text-black leading-relaxed">
                <p>
                  The "Grabby" app offers a user-friendly and reliable platform for a seamless shopping experience,
                  featuring clear search and well-organized product listings, and a streamlined checkout process with clear steps.
                </p>
                <p>
                  For bidding, it provides clear explanations, bid tracking, and security measures to ensure reliability and trustworthiness.
                </p>
                <p>
                  The app is designed to be accessible to all users, including features like screen reader support and high-contrast modes.
                </p>
                <p>
                  The app solves issues of unreliable e-commerce platforms, provides a trustworthy bidding system, and its accessibility features make it valuable for all users.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Removed additional mockups per design: single left image only */}
        </motion.div>
      </section>

      {/* Design Thinking Process Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-[1513px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">

              <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-black">
                <svg className="inline-block mr-1 w-[24px] md:w-[32px] lg:w-[55px] lg:h-auto" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.3161 29.0376V35.8888C34.3161 41.6095 32.0329 43.8962 26.3111 43.8962H19.485C13.7879 43.8962 11.4791 41.6095 11.4791 35.8888V29.0376C11.4791 23.3424 13.7633 21.0557 19.485 21.0557H26.3357C32.0329 21.0557 34.3161 23.3424 34.3161 29.0376Z" stroke="#C50536" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M44.1037 19.2537V26.1048C44.1037 31.8256 41.8196 34.1038 36.0978 34.1038H34.3161V29.0376C34.3161 23.3424 32.0328 21.0557 26.311 21.0557H21.2667V19.2537C21.2667 13.5329 23.55 11.2717 29.2718 11.2717H36.1233C41.8196 11.2717 44.1037 13.5584 44.1037 19.2537Z" stroke="#C50536" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M52.8875 35.1068C52.8875 44.8227 45.0321 52.677 35.3201 52.677L37.9553 48.2824" stroke="#C50536" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.69531 20.0526C2.69531 10.3452 10.5508 2.49097 20.2628 2.49097L17.6276 6.87708" stroke="#C50536" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <span className="text-[#C50536]">Design Thinking</span> Process
              </h2>
            </div>
          </motion.div>
          {/* Content and Mockup */}
          <div className="relative">
            <motion.div
              className="w-full text-justify"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-20 text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed text-justify">
                The design thinking process for the e-commerce app focused on understanding users' needs and pain points, ideating possible solutions, prototyping and testing those solutions, and refining the app based on user feedback. The result is a user-friendly and reliable app that addresses users' concerns and provides a seamless shopping experience.
              </p>
            </motion.div>

            {/* Right Side - iPhone Mockup (Relative positioned for small screens) */}
            <motion.div
              className="md:hidden flex justify-center mt-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/projects/cinetrips/iphone.png"
                alt="CineTrips iPhone Success Screen"
                width={535}
                height={640}
                className="w-[260px] h-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Design Process Diagram */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icons Row */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 -space-x-1 md:space-x-3 lg:space-x-4 mb-6 md:mb-8 lg:mb-10">
              {/* Empathize Icon */}
              <div className="w-[80px] xl:w-[137px] h-auto flex items-center justify-center shrink-0">
                <Image
                  src="/projects/cinetrips/empathize.png"
                  alt="Empathize Icon"
                  width={137}
                  height={137}
                  className="w-full h-full"
                />
              </div>

              {/* Arrows between Empathize -> Define */}
              <div className="hidden md:flex items-center -space-x-2">
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-100"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-100"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-100"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-100"
                />
              </div>
              {/* Empathize text (mobile) */}
              <div className="md:hidden text-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-800 mb-2">Empathize</h3>
                <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px]   text-gray-600 space-y-1">
                  <li>User Research</li>
                  <li>User Interview</li>
                  <li>Competitor Analysis</li>
                </ul>
              </div>
              {/* Vertical arrows for small screens */}
              <div className="flex md:hidden flex-col items-center space-y-0 -mt-2">
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-100" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-100" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-100" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-100" />
              </div>

              {/* Define Icon */}
              <div className="w-[80px] xl:w-[137px] h-auto flex items-center justify-center shrink-0">
                <Image
                  src="/projects/cinetrips/define.png"
                  alt="Define Icon"
                  width={137}
                  height={137}
                  className="w-full h-full"
                />
              </div>

              {/* Arrows between Define -> Ideate */}
              <div className="hidden md:flex items-center -space-x-2">
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-75"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-75"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-75"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-75"
                />
              </div>
              {/* Define text (mobile) */}
              <div className="md:hidden text-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-800 mb-2">Define</h3>
                <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px]  text-gray-600 space-y-1">
                  <li>User Persona</li>
                  <li>User Journey Map</li>
                  <li>Goal Statement</li>
                  <li>Empathy Map</li>
                </ul>
              </div>
              {/* Vertical arrows for small screens */}
              <div className="flex md:hidden flex-col items-center space-y-0 -mt-2">
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-75" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-75" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-75" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-75" />
              </div>

              {/* Ideate Icon */}
              <div className="w-[80px] xl:w-[137px] h-auto flex items-center justify-center shrink-0">
                <Image
                  src="/projects/cinetrips/ideate.png"
                  alt="Ideate Icon"
                  width={137}
                  height={137}
                  className="w-full h-full"
                />
              </div>

              {/* Arrows between Ideate -> Design */}
              <div className="hidden md:flex items-center -space-x-2">
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-50"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-50"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-50"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-50"
                />
              </div>
              {/* Ideate text (mobile) */}
              <div className="md:hidden text-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-800 mb-2">Ideate</h3>
                <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Brainstorming</li>
                  <li>User Flow</li>
                </ul>
              </div>
              {/* Vertical arrows for small screens */}
              <div className="flex md:hidden flex-col items-center space-y-0 -mt-2">
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-50" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-50" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-50" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-50" />
              </div>

              {/* Design Icon */}
              <div className="w-[80px] xl:w-[137px] h-auto flex items-center justify-center shrink-0">
                <Image
                  src="/projects/cinetrips/design.png"
                  alt="Design Icon"
                  width={137}
                  height={137}
                  className="w-full h-full"
                />
              </div>

              {/* Arrows between Design -> Test */}
              <div className="hidden md:flex items-center -space-x-2">
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-25"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-25"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-25"
                />
                <Image
                  src="/projects/cinetrips/arrow-right.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-3 h-3 md:w-4 md:h-4 opacity-25"
                />
              </div>
              {/* Design text (mobile) */}
              <div className="md:hidden text-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-800 mb-2">Design</h3>
                <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Paper Wireframes</li>
                  <li>Visual Design</li>
                  <li>Prototype</li>
                </ul>
              </div>
              {/* Vertical arrows for small screens */}
              <div className="flex md:hidden flex-col items-center space-y-0 -mt-2">
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-25" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-25" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-25" />
                <Image src="/projects/cinetrips/arrow-right.svg" alt="Arrow" width={16} height={16} className="w-3 h-3 rotate-90 opacity-25" />
              </div>

              {/* Test text (mobile) after last icon */}
              <div className="md:hidden text-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-800 mb-2">Test</h3>
                <ul className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Check Usability</li>
                  <li>Survey Insight</li>
                  <li>Improvements</li>
                </ul>
              </div>

              {/* Test Icon */}
              <div className="w-[80px] xl:w-[137px] h-auto flex items-center justify-center shrink-0">
                <Image
                  src="/projects/cinetrips/test.png"
                  alt="Test Icon"
                  width={64}
                  height={64}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Text Content Row (hidden on small screens) */}
            <div className="hidden md:flex md:flex-row items-start justify-center md:space-x-2 gap-2">
              {/* Empathize Text */}
              <div className="text-center md:w-max-content">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-medium text-gray-800 mb-2 sm:mb-3 md:mb-4">Empathize</h3>
                <ul className="text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>User Research</li>
                  <li>User Interview</li>
                  <li>Competitor Analysis</li>
                </ul>
              </div>

              {/* Define Text */}
              <div className="text-center md:w-max-content">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-medium text-gray-800 mb-2 sm:mb-3 md:mb-4">Define</h3>
                <ul className="text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>User Persona</li>
                  <li>User Journey Map</li>
                  <li>Goal Statement</li>
                  <li>Empathy Map</li>
                </ul>
              </div>

              {/* Ideate Text */}
              <div className="text-center md:w-max-content">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-medium text-gray-800 mb-2 sm:mb-3 md:mb-4">Ideate</h3>
                <ul className="text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Brainstorming</li>
                  <li>User Flow</li>
                </ul>
              </div>

              {/* Design Text */}
              <div className="text-center md:w-max-content">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-medium text-gray-800 mb-2 sm:mb-3 md:mb-4">Design</h3>
                <ul className="text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Paper Wireframes</li>
                  <li>Visual Design</li>
                  <li>Prototype</li>
                </ul>
              </div>

              {/* Test Text */}
              <div className="text-center md:w-max-content">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[26px] font-medium text-gray-800 mb-2 sm:mb-3 md:mb-4">Test</h3>
                <ul className="text-[16px] lg:text-[20px] xl:text-[24px] text-gray-600 space-y-1">
                  <li>Check Usability</li>
                  <li>Survey Insight</li>
                  <li>Improvements</li>
                </ul>
              </div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="py-20 px-4 sm:px-8 max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-black">Project </span>
              <span className="text-[#C50536]">Timeline</span>
            </h2>

          </motion.div>

          {/* Timeline Image Placeholder */}
          <motion.div
            className="bg-white rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image src="/projects/grabby/timeline.png" alt="Timeline" width={1513} height={1000} />
          </motion.div>
        </div>
      </section>
      {/* Empathize Phase Section */}
      <section className="py-20 px-4 sm:px-8 bg-[white]">
        <div className="max-w-[1190px] mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold">
              <span className="text-black">Empathize </span>
              <span className="text-[#C50536]">Phase</span>
            </h2>
          </motion.div>
          <div className="bg-[#FFFBF8] p-8">
            {/* Qualitative Research Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative mt-2 flex-shrink-0">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-[#C50536]/5"></span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#C50536]/5"></span>
                  <span className="relative block w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-[#C50536] rounded-full"></span>
                </div>
                <h3 className="text-[24px] md:text-[26px] font-bold text-gray-800">Qualitative Research</h3>
              </div>
              <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed ml-8 text-justify">
                In this study, 10 respondents between the ages of 18–55 were interviewed using Google Meet, Zoom, Webex and other social media conference platforms to gather their feedback and thoughts on competitors. The interviews yielded several key themes related to the app’s user experience, functionality, and design.
              </p>
            </motion.div>

            {/* Interview Questions Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative mt-2 flex-shrink-0">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-[#C50536]/5"></span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-[#C50536]/5"></span>
                  <span className="relative block w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-[#C50536] rounded-full"></span>
                </div>
                <h3 className="text-[24px] md:text-[26px] font-bold text-gray-800">Interview Questions</h3>
              </div>
              <div className="ml-8 space-y-4">
                {[
                  "What are your current online shopping habits? How often do you shop online?",
                  "What do you find frustrating about shopping online?",
                  "What would you consider to be the most important features of an e-commerce app?",
                  "How do you typically search for products online?",
                  "What motivates you to purchase products online?",
                  "Have you used any e-commerce apps in the past? If so, what did you like or dislike about them?",
                  "What payment methods do you prefer when shopping online?",
                  "How do you typically track your orders once you've made a purchase online?",
                  "How important is it to you to have access to customer reviews and ratings when shopping online?",
                  "How likely are you to recommend an e-commerce app to a friend or family member?"
                ].map((question, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="relative mt-3 flex-shrink-0">
                      <span className="relative block w-2 h-2 bg-black rounded-full shrink-0"></span>
                    </div>
                    <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed text-justify">{question}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Key Insights Section */}
          <motion.div
            className="bg-[#FFE6F2] p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[24px] md:text-[26px] font-bold text-[#C50536] mb-8">Key Insight Derived</h3>
            <div className="space-y-4">
              {[
                "User-friendliness is a critical factor for a successful e-commerce app, with users expecting clear navigation, search functions, and a straightforward checkout process.",
                "Trust and security are important concerns for users, with a reliable payment system and clear explanations of the bidding process needed to inspire confidence.",
                "The visual design of the app is an important factor in user experience, with users preferring a clean, modern look and clear product images and descriptions.",
                "Accessibility features, such as screen reader support and high-contrast modes, are important to users of all ages and abilities.",
                "User reviews and ratings are highly valued by users, with many relying on them to make purchase decisions.",
                "A seamless tracking system for orders is expected by users, with regular updates on the status of orders and estimated delivery times.",
                "Convenience and efficiency are major motivators for online shopping, with users looking for an easy and hassle-free shopping experience.",
                "Mobile optimization is crucial for an e-commerce app, with many users preferring to shop on their mobile devices.",
                "Personalization and recommendation features can enhance the user experience, with users looking for customized recommendations based on their browsing and purchase history."
              ].map((insight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="relative mt-3 flex-shrink-0">
                    <span className="relative block w-2 h-2 bg-black rounded-full shrink-0"></span>
                  </div>
                  <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed text-justify">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Audit Section */}
      <section className="w-full  bg-white">
        <div className=" mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 max-w-[1513px] mx-auto py-20 px-[20px] sm:px-[40px] lg:px-[80px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-6">
              <span className="text-gray-900">Competitive </span>
              <span className="text-[#C50536]">Audit</span>
            </h2>
            <p className="text-gray-800 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mx-auto leading-relaxed text-justify">
              After conducting our research, we identified several direct competitors for Grabby in the market. To gain a better understanding of the competition, we selected three established competitors and conducted a review of their strengths and weaknesses. By analyzing this data, we aim to identify opportunities for improving Grabby’s functionality and performance in the market.
            </p>
          </motion.div>

          {/* Competitive Audit Table */}
          <motion.div
            className="relative max-w-[1513px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >


            <div className="overflow-x-auto max-w-[1513px] px-[20px] sm:px-[40px] lg:px-[80px] mx-auto">
              {/* Top-right decorative vector */}
              <div className="pointer-events-none absolute -top-10 -right-10 hidden md:block">
                <svg width="161" height="286" viewBox="0 0 161 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M71.3096 143.016H96.9646L96.9815 285.525H99.8378L99.8123 143.016L111.22 143.008L111.237 285.525H114.085L114.068 143.008H125.467L125.484 285.517H128.34L128.324 143.008H139.723L139.74 285.517H142.588L142.571 143.008L285.084 142.991V140.135L142.571 140.16V128.753L285.084 128.736V125.888L142.571 125.905V114.506L285.084 114.489V111.633L142.571 111.65L142.562 100.251L285.084 100.234V97.3861L142.562 97.4032V71.7493C142.554 32.4011 110.651 0.499192 71.2926 0.507692C31.943 0.507692 0.040085 32.4181 0.0485857 71.7663C0.0485857 111.123 31.96 143.025 71.3096 143.016ZM128.315 128.761L139.723 128.753V140.16H128.315V128.761ZM125.467 128.761H114.068V140.16H125.467V128.761ZM111.212 128.761H99.8123V140.16H111.22L111.212 128.761ZM96.9646 128.761V140.16L71.3096 140.169C33.5326 140.169 2.90479 109.55 2.89629 71.7663C2.88779 33.9907 33.5156 3.3554 71.2926 3.3554C109.078 3.3469 139.706 33.9737 139.714 71.7493V97.4032H128.315L128.307 71.7493C128.307 40.2725 102.779 14.7541 71.2926 14.7541C39.8146 14.7626 14.2957 40.281 14.2957 71.7663C14.3042 103.252 39.8231 128.77 71.3096 128.761H96.9646ZM128.315 100.251H139.714V111.658H128.315V100.251ZM125.467 97.4032L125.459 71.7493C125.459 41.845 101.206 17.6018 71.2926 17.6018C41.3872 17.6103 17.1434 41.862 17.1434 71.7663C17.1519 101.679 41.4043 125.922 71.3096 125.913H96.9646V114.506L71.3096 114.515C47.6947 114.515 28.5512 95.3803 28.5512 71.7663C28.5427 48.1523 47.6862 29.0092 71.3011 29.0092C94.9074 29.0007 114.059 48.1436 114.059 71.7576V97.4032H125.467ZM111.212 114.506H99.8123V125.913L111.212 125.905V114.506ZM114.068 125.905V114.506H125.467V125.905H114.068ZM114.068 111.658L114.059 100.26L125.467 100.251V111.658H114.068ZM111.212 71.7576V97.4032L99.8123 97.4119L99.8038 71.7576C99.8038 56.0149 87.0443 43.2561 71.3011 43.2561C55.5578 43.2561 42.7983 56.0236 42.7983 71.7663C42.7983 87.509 55.5664 100.268 71.3096 100.26H96.9561L96.9646 111.658L71.3096 111.667C49.2674 111.667 31.399 93.7993 31.399 71.7663C31.399 49.7249 49.2589 31.8569 71.3011 31.8569C93.3348 31.8569 111.203 49.7162 111.212 71.7576ZM96.9561 71.7576C96.9561 57.5875 85.4717 46.1036 71.3011 46.1121C57.1305 46.1121 45.6461 57.5962 45.6546 71.7663C45.6546 85.9279 57.139 97.4119 71.3096 97.4119H96.9561V71.7576ZM99.8123 100.26V111.658H111.212V100.26H99.8123ZM128.315 114.506H139.714L139.723 125.905H128.315V114.506Z" fill="url(#paint0_linear_1650_18499)" />
                  <defs>
                    <linearGradient id="paint0_linear_1650_18499" x1="25.6951" y1="16.1824" x2="285.1" y2="291.212" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Center-left decorative vector */}
              <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 hidden md:block">
                <svg width="54" height="142" viewBox="0 0 54 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M-86.9395 88.5543C-96.6346 88.5543 -104.494 80.7005 -104.494 71.0016C-104.494 61.3027 -96.6346 53.448 -86.9395 53.448H-16.7191C-7.02364 53.448 0.83606 61.3027 0.83606 71.0016C0.83606 80.7005 -7.02364 88.5543 -16.7191 88.5543H-86.9395ZM-86.9395 56.9585H-16.7191C-8.96273 56.9585 -2.67496 63.2493 -2.67496 71.0016C-2.67496 78.7539 -8.96273 85.0438 -16.7191 85.0438H-86.9395C-94.6955 85.0438 -100.983 78.7539 -100.983 71.0016C-100.983 63.2493 -94.6955 56.9585 -86.9395 56.9585Z" fill="url(#paint0_radial_2111_380)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M-115.027 71.0015C-115.027 86.5147 -102.452 99.0867 -86.9396 99.0867H-16.7191C-1.20642 99.0867 11.3691 86.5147 11.3691 71.0015C11.3691 55.4883 -1.20642 42.9163 -16.7191 42.9163H-86.9396C-102.452 42.9163 -115.027 55.4883 -115.027 71.0015ZM-16.7191 46.4268H-86.9396C-100.513 46.4268 -111.517 57.4264 -111.517 71.0015C-111.517 84.5766 -100.513 95.5762 -86.9396 95.5762H-16.7191C-3.1455 95.5762 7.85807 84.5766 7.85807 71.0015C7.85807 57.4264 -3.1455 46.4268 -16.7191 46.4268Z" fill="url(#paint1_radial_2111_380)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M-86.9396 109.619C-108.269 109.619 -125.561 92.3291 -125.561 71.0017C-125.561 49.6742 -108.269 32.3848 -86.9396 32.3848H-16.7191C4.61079 32.3848 21.9022 49.6742 21.9022 71.0017C21.9022 92.3291 4.61079 109.619 -16.7191 109.619H-86.9396ZM-86.9396 35.8953H-16.7191C2.67171 35.8953 18.3911 51.6123 18.3911 71.0017C18.3911 90.391 2.67171 106.108 -16.7191 106.108H-86.9396C-106.33 106.108 -122.05 90.391 -122.05 71.0017C-122.05 51.6123 -106.33 35.8953 -86.9396 35.8953Z" fill="url(#paint2_radial_2111_380)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M-136.094 71.0014C-136.094 98.1516 -114.087 120.151 -86.9396 120.151H-16.7192C10.428 120.151 32.4352 98.1516 32.4352 71.0014C32.4352 43.8513 10.428 21.8521 -16.7192 21.8521H-86.9396C-114.087 21.8521 -136.094 43.8513 -136.094 71.0014ZM-16.7192 25.3626H-86.9396C-112.148 25.3626 -132.583 45.7978 -132.583 71.0014C-132.583 96.205 -112.148 116.639 -86.9396 116.639H-16.7192C8.48894 116.639 28.9242 96.205 28.9242 71.0014C28.9242 45.7978 8.48892 25.3626 -16.7192 25.3626Z" fill="url(#paint3_radial_2111_380)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M-86.9396 130.683C-119.904 130.683 -146.627 103.966 -146.627 71.0016C-146.627 38.0372 -119.904 11.3123 -86.9396 11.3123H-16.7191C16.2454 11.3123 42.9684 38.0372 42.9684 71.0016C42.9684 103.966 16.2454 130.683 -16.7191 130.683H-86.9396ZM-86.9396 14.8311H-16.7191C14.3063 14.8311 39.4572 39.9753 39.4572 71.0016C39.4572 102.028 14.3063 127.172 -16.7191 127.172H-86.9396C-117.965 127.172 -143.116 102.028 -143.116 71.0016C-143.116 39.9753 -117.965 14.8311 -86.9396 14.8311Z" fill="url(#paint4_radial_2111_380)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M-86.9396 141.223C-125.721 141.223 -157.16 109.78 -157.16 71.0016C-157.16 32.2229 -125.721 0.779785 -86.9396 0.779785H-16.7191C22.0626 0.779785 53.5014 32.2229 53.5014 71.0016C53.5014 109.78 22.0626 141.223 -16.7191 141.223H-86.9396ZM-86.9396 4.29034H-16.7191C20.1235 4.29034 49.9903 34.161 49.9903 71.0016C49.9903 107.842 20.1235 137.712 -16.7191 137.712H-86.9396C-123.782 137.712 -153.649 107.842 -153.649 71.0016C-153.649 34.161 -123.782 4.29034 -86.9396 4.29034Z" fill="url(#paint5_radial_2111_380)" />
                  <defs>
                    <radialGradient id="paint0_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.0871 18.7253 93.6233 -51.8293 71.0012)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.0872 18.7253 93.6238 -51.8293 71.0015)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.087 18.7253 93.6231 -51.8293 71.0017)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.0873 18.7253 93.6242 -51.8294 71.0014)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint4_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.0871 18.7253 93.6235 -51.8293 71.0017)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint5_radial_2111_380" cx="0" cy="0" r="1" gradientTransform="matrix(140.441 -28.0872 18.7253 93.6236 -51.8293 71.0012)" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <table className="w-full border border-[#C50536] relative z-20  mx-auto min-w-[813px]">
                <thead>
                  <tr className="bg-[#FFF0F7] ">
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-1/5 max-w-[280px] bg-[#FFD0DD]">Brands</th>
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-2/5">Strengths</th>
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-2/5">Weaknesses</th>
                  </tr>
                </thead>
                <tbody>
                  {/* JUMIA Row */}
                  <tr>
                    <td className="border border-[#C50536] px-6 py-8 align-middle bg-[#FFD0DD] max-w-[280px]">
                      <div className="flex items-center justify-center">
                        <Image src="/projects/grabby/jumia.png" alt="Jumia" width={130} height={48} className="h-auto w-auto" />
                      </div>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Wide range of products across electronics, fashion, home and groceries.</li>
                        <li>2. User‑friendly interface with clear product images and descriptions.</li>
                        <li>3. Multiple payment options including cash on delivery, cards and mobile money.</li>
                        <li>4. Responsive customer service improves issue resolution and satisfaction.</li>
                        <li>5. Regular promotions and discounts that boost conversions and sales.</li>
                      </ol>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Delivery issues including delays and occasional damaged/incorrect items.</li>
                        <li>2. Limited product information for some items creates uncertainty.</li>
                        <li>3. Occasional app crashes causing frustration.</li>
                        <li>4. Limited search filters make finding products harder.</li>
                        <li>5. High data usage which may affect users on limited plans.</li>
                      </ol>
                    </td>
                  </tr>

                  {/* KONGA Row */}
                  <tr>
                    <td className="border border-[#C50536] px-6 py-8 align-middle max-w_[280px] bg-[#FFD0DD]">
                      <div className="flex items-center justify-center">
                        <Image src="/projects/grabby/konga.png" alt="Konga" width={130} height={48} className="h-auto w-auto" />
                      </div>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Vast selection of products across many categories.</li>
                        <li>2. Simple, easy‑to‑use interface with clear images and descriptions.</li>
                        <li>3. Several payment options including cash on delivery and mobile money.</li>
                        <li>4. Fast delivery times with some next‑day eligible items.</li>
                      </ol>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Limited product availability for certain items.</li>
                        <li>2. Limited search filters make refining results difficult.</li>
                        <li>3. Occasional app crashes reported by some users.</li>
                        <li>4. Quality control issues reported by some users.</li>
                        <li>5. Limited promotions/discounts compared to competitors.</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Persona Section */}
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] sm:px-[40px] lg:px-[80px] bg-white">
        <div className="mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-4">
              <span className="text-black">User </span>
              <span className="text-[#C50536]">Persona</span>
            </h2>
            <p className="text-gray-700 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] mx-auto leading-relaxed text-justify">
              Creating personas is crucial for the success of a product as they help guide design decisions by prioritizing common user needs during the planning phase before actual design work begins. Personas enable the product team to develop a collective understanding of user goals and capabilities, which aids in creating a user-centric design. By creating personas, the team can better empathize with users and design a product that caters to their needs, leading to higher user satisfaction and success of the product.
            </p>
          </motion.div>

          {/* User Personas Content */}
          <div className="space-y-16">
            {/* Samuel Persona */}
            <motion.div
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 z-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Top-right decorative vector for Samuel */}
              <div className="pointer-events-none absolute -top-8 -right-6 hidden md:block">
                <svg width="161" height="286" viewBox="0 0 161 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M71.3096 143.016H96.9646L96.9815 285.525H99.8378L99.8123 143.016L111.22 143.008L111.237 285.525H114.085L114.068 143.008H125.467L125.484 285.517H128.34L128.324 143.008H139.723L139.74 285.517H142.588L142.571 143.008L285.084 142.991V140.135L142.571 140.16V128.753L285.084 128.736V125.888L142.571 125.905V114.506L285.084 114.489V111.633L142.571 111.65L142.562 100.251L285.084 100.234V97.3861L142.562 97.4032V71.7493C142.554 32.4011 110.651 0.499192 71.2926 0.507692C31.943 0.507692 0.040085 32.4181 0.0485857 71.7663C0.0485857 111.123 31.96 143.025 71.3096 143.016ZM128.315 128.761L139.723 128.753V140.16H128.315V128.761ZM125.467 128.761H114.068V140.16H125.467V128.761ZM111.212 128.761H99.8123V140.16H111.22L111.212 128.761ZM96.9646 128.761V140.16L71.3096 140.169C33.5326 140.169 2.90479 109.55 2.89629 71.7663C2.88779 33.9907 33.5156 3.3554 71.2926 3.3554C109.078 3.3469 139.706 33.9737 139.714 71.7493V97.4032H128.315L128.307 71.7493C128.307 40.2725 102.779 14.7541 71.2926 14.7541C39.8146 14.7626 14.2957 40.281 14.2957 71.7663C14.3042 103.252 39.8231 128.77 71.3096 128.761H96.9646ZM128.315 100.251H139.714V111.658H128.315V100.251ZM125.467 97.4032L125.459 71.7493C125.459 41.845 101.206 17.6018 71.2926 17.6018C41.3872 17.6103 17.1434 41.862 17.1434 71.7663C17.1519 101.679 41.4043 125.922 71.3096 125.913H96.9646V114.506L71.3096 114.515C47.6947 114.515 28.5512 95.3803 28.5512 71.7663C28.5427 48.1523 47.6862 29.0092 71.3011 29.0092C94.9074 29.0007 114.059 48.1436 114.059 71.7576V97.4032H125.467ZM111.212 114.506H99.8123V125.913L111.212 125.905V114.506ZM114.068 125.905V114.506H125.467V125.905H114.068ZM114.068 111.658L114.059 100.26L125.467 100.251V111.658H114.068ZM111.212 71.7576V97.4032L99.8123 97.4119L99.8038 71.7576C99.8038 56.0149 87.0443 43.2561 71.3011 43.2561C55.5578 43.2561 42.7983 56.0236 42.7983 71.7663C42.7983 87.509 55.5664 100.268 71.3096 100.26H96.9561L96.9646 111.658L71.3096 111.667C49.2674 111.667 31.399 93.7993 31.399 71.7663C31.399 49.7249 49.2589 31.8569 71.3011 31.8569C93.3348 31.8569 111.203 49.7162 111.212 71.7576ZM96.9561 71.7576C96.9561 57.5875 85.4717 46.1036 71.3011 46.1121C57.1305 46.1121 45.6461 57.5962 45.6546 71.7663C45.6546 85.9279 57.139 97.4119 71.3096 97.4119H96.9561V71.7576ZM99.8123 100.26V111.658H111.212V100.26H99.8123ZM128.315 114.506H139.714L139.723 125.905H128.315V114.506Z" fill="url(#paint0_linear_1650_18499)" />
                  <defs>
                    <linearGradient id="paint0_linear_1650_18499" x1="25.6951" y1="16.1824" x2="285.1" y2="291.212" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#C50536" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Left column */}
              <div>
                {/* Name chip */}
                <div className="inline-block bg-[#C50536] text-white text-[20px] md:text-[22px] font-semibold rounded-tl-none rounded-bl-none rounded-tr-[60px] rounded-br-[60px] px-6 py-3 mb-6">
                  Samuel Ekele
                </div>

                {/* Photo */}
                <div className="w-full max-w-[360px] rounded-3xl overflow-hidden bg-gray-100">
                  <Image src="/projects/grabby/samuel.jpg" alt="Samuel Ekele" width={720} height={720} className="w-full h-full object-cover" />
                </div>

                {/* Quote */}
                <div className="mt-4 inline-block bg-[#F2F2F2] text-gray-700 px-6 py-3 rounded-[60px] text-center italic">
                  “Victory is for the prepared.”
                </div>

                {/* Facts list */}
                <div className='flex gap-1'>
                  <div className="mt-6 space-y-2 text-[#C50536] text-right font-bold uppercase">
                    <p className="text-[18px] md:text-[20px]">Age:</p>
                    <p className="text-[18px] md:text-[20px]">Family:</p>
                    <p className="text-[18px] md:text-[20px]">Location:</p>
                    <p className="text-[18px] md:text-[20px]">Education:</p>
                    <p className="text-[18px] md:text-[20px]">Occupation:</p>
                    <p className="text-[18px] md:text-[20px]">Favorite Apps:</p>
                  </div>
                  <div className="mt-6 space-y-2 text-gray-900 text-left">
                    <p className="text-[18px] md:text-[20px]">29</p>
                    <p className="text-[18px] md:text-[20px]">Married</p>
                    <p className="text-[18px] md:text-[20px]">Abuja, Nigeria</p>
                    <p className="text-[18px] md:text-[20px]">Benue State University</p>
                    <p className="text-[18px] md:text-[20px]">Business Analyst</p>
                    <p className="text-[18px] md:text-[20px]">Jumia, Konga</p>
                  </div>
                </div>
                {/* Bio card */}
                <div className="mt-6 bg-[#FFE6F2] rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.4452 35.0329H11.2818C4.0163 35.0329 2.19971 33.2476 2.19971 25.9373V11.402C2.19971 4.17669 4.0163 2.39111 11.2818 2.39111H29.4452C36.7098 2.39111 38.5264 4.17669 38.5264 11.402V25.9373C38.5264 33.2476 36.7098 35.0329 29.4452 35.0329Z" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23.9954 11.4019H33.0775" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.812 18.7119H33.0775" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29.4443 25.9375H33.0775" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.0063 17.4368C15.8221 17.4368 17.2935 15.9072 17.2935 14.1221C17.2935 12.337 15.8221 10.8066 14.0063 10.8066C12.1906 10.8066 10.7183 12.337 10.7183 14.1221C10.7183 15.9072 12.1906 17.4368 14.0063 17.4368Z" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.3631 26.5324C20.109 23.8973 18.0203 21.8573 15.3868 21.6023C14.4781 21.5173 13.5524 21.5173 12.6258 21.6023C9.99231 21.8573 7.9037 23.8973 7.64868 26.5324" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-[22px] font-bold text-[#C50536]">Bio</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Samuel is an Abuja based Business Analyst. He is a blogger that loves surfing the internet. He values time a lot and prefers shopping items online for ease and comfort and the ability to see varieties of products at a go.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6 mt-20">
                {/* Goals card */}
                <div className="bg-[#C50536]/[0.08] rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.0061 7.95969C35.0886 8.12969 35.1107 8.38404 35.069 8.55405C35.0265 8.80906 34.9237 8.97923 34.7706 9.14924L30.4115 13.4849C30.3104 13.5699 30.1896 13.6548 30.0579 13.7398C29.9253 13.8248 29.7833 13.8244 29.6405 13.8244H23.5523L20.6034 16.7996C20.9358 17.4796 21.0115 18.2451 20.8177 19.0102C20.623 19.7752 20.1708 20.3696 19.5409 20.8796C18.9118 21.3046 18.145 21.4748 17.3766 21.4748C16.6081 21.3898 15.8873 21.0496 15.3415 20.4546C14.7966 19.9445 14.4617 19.2647 14.3963 18.4996C14.3308 17.7346 14.5391 16.8849 14.9845 16.2899C15.4291 15.6949 16.0828 15.1848 16.8291 15.0148C17.5755 14.8448 18.3669 14.9297 19.0631 15.2697L22.012 12.2945V6.17411C22.0111 6.08911 22.0392 5.9191 22.0936 5.74909C22.1488 5.66409 22.2288 5.49458 22.3299 5.40958L26.6891 1.07389C26.8412 0.903884 27.0359 0.819379 27.2475 0.734375C27.4592 0.734375 27.6785 0.734043 27.8783 0.819047C28.0772 0.90405 28.2472 1.07406 28.3671 1.24406C28.4869 1.41407 28.5507 1.58425 28.5507 1.83926V7.27899H33.9997C34.2147 7.27899 34.4255 7.36416 34.6049 7.44917C34.7842 7.61917 34.9236 7.78968 35.0061 7.95969ZM31.3687 9.48959H27.4609C27.1719 9.48959 26.8948 9.31925 26.6899 9.14924C26.4859 8.97923 26.3712 8.63972 26.3712 8.3847V4.47404L24.1916 6.68463V11.6147H29.1891L31.3687 9.48959ZM34.2326 12.8042C34.7885 14.5043 35.0894 16.29 35.0894 18.1601C35.0877 21.9003 33.9206 25.4701 31.7538 28.4452C29.5869 31.4204 26.5335 33.6308 23.0295 34.7358C19.5256 35.9259 15.7521 35.9259 12.2507 34.7358C8.74842 33.6308 5.69752 31.4204 3.53581 28.4452C1.37409 25.4701 0.211225 21.8153 0.216325 18.1601C0.220576 14.505 1.3911 10.8493 3.55962 7.87418C5.72899 4.89906 8.78499 2.68946 12.2898 1.58441C15.7946 0.479364 19.5681 0.479364 23.0686 1.58441L21.3073 3.36916C18.0719 2.60412 14.6649 2.85947 11.6055 4.13452C8.54608 5.49458 6.00442 7.78901 4.36719 10.6791C2.72912 13.5693 2.08732 16.9701 2.5387 20.2852C2.99009 23.5154 4.50998 26.5748 6.86551 28.9549C9.22189 31.335 12.2847 32.8656 15.5864 33.2906C18.888 33.7156 22.2466 33.1201 25.1487 31.505C28.0517 29.805 30.3384 27.2552 31.6603 24.1951C32.9821 21.1349 33.266 17.7344 32.4695 14.5043L34.2326 12.8042ZM28.3322 16.035C28.8006 18.3301 28.5167 20.7102 27.523 22.8353C26.5293 24.9604 24.8784 26.6603 22.8145 27.7654C20.7514 28.8704 18.3856 29.2949 16.0683 28.9549C13.751 28.6149 11.6046 27.5102 9.94871 25.8951C8.29193 24.1951 7.21318 22.0698 6.8723 19.7747C6.53143 17.4796 6.94629 15.1 8.05562 13.0599C9.16496 10.9348 10.9093 9.31925 13.031 8.2992C15.1519 7.27916 17.5373 7.02465 19.8324 7.53467V9.74443C17.9801 9.23441 16.0233 9.40442 14.2619 10.1694C12.4997 10.9345 11.0325 12.2094 10.0839 13.8244C9.13519 15.5245 8.75949 17.4796 9.01366 19.3497C9.26698 21.2198 10.1374 23.0052 11.4899 24.3652C12.8415 25.7253 14.6011 26.5748 16.4959 26.8298C18.3916 27.0848 20.3178 26.66 21.978 25.725C23.639 24.7899 24.9413 23.3453 25.6852 21.5603C26.4298 19.7752 26.5743 17.8201 26.0966 16.035H28.3322Z" fill="#C50536" />
                    </svg>
                    <h4 className="text-[22px] font-bold text-[#C50536]">Goals</h4>
                  </div>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Buy goods online conveniently from the comfort of your home.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Time management and ease of delivery.</span></li>
                  </ul>
                </div>

                {/* Frustrations card */}
                <div className="bg-[#C50536]/[0.08] rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0128 38.2939H25.9106C34.9927 38.2939 38.6251 34.6393 38.6251 25.6289V14.6631C38.6251 5.65271 34.9927 1.99805 25.9106 1.99805H15.0128C5.9315 1.99805 2.29834 5.65271 2.29834 14.6631V25.6289C2.29834 34.6393 5.9315 38.2939 15.0128 38.2939Z" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.3804 14.2377C13.1961 12.4527 16.1569 12.4527 17.9913 14.2377" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.9321 14.2377C24.7487 12.4527 27.7086 12.4527 29.5431 14.2377" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.923 30.4742H27.0004C27.9091 30.4742 28.6351 29.7938 28.6351 28.8587C28.6351 24.3536 24.9841 20.6987 20.4617 20.6987C15.9394 20.6987 12.2883 24.3536 12.2883 28.8587C12.2883 29.7938 13.0151 30.4742 13.923 30.4742Z" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-[22px] font-bold text-[#C50536]">Frustrations</h4>
                  </div>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Faulty payment gateways.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Limited payment options.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Lack of quality items being delivered.</span></li>
                    <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#C50536] shrink-0"></span><span>Delayed delivery.</span></li>
                  </ul>
                </div>

                {/* Motivations card */}
                <div className="bg-[#C50536]/[0.08] rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0128 38.64H25.9106C34.9919 38.64 38.6251 34.9849 38.6251 25.8895V15.0084C38.6251 5.91297 34.9919 2.25781 25.9106 2.25781H15.0128C5.9315 2.25781 2.29834 5.91297 2.29834 15.0084V25.8895C2.29834 34.9849 5.9315 38.64 15.0128 38.64Z" stroke="#C50536" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.8184 16.3693C28.3239 16.3693 29.5429 15.1791 29.5429 13.649C29.5429 12.1189 28.3239 10.9287 26.8184 10.9287C25.3138 10.9287 24.094 12.1189 24.094 13.649C24.094 15.1791 25.3138 16.3693 26.8184 16.3693Z" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.1048 16.3693C15.6094 16.3693 16.8293 15.1791 16.8293 13.649C16.8293 12.1189 15.6094 10.9287 14.1048 10.9287C12.6002 10.9287 11.3804 12.1189 11.3804 13.649C11.3804 15.1791 12.6002 16.3693 14.1048 16.3693Z" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.923 22.8291H27.0004C27.9091 22.8291 28.6351 23.5095 28.6351 24.4445C28.6351 28.9497 24.9841 32.6045 20.4617 32.6045C15.9394 32.6045 12.2883 28.9497 12.2883 24.4445C12.2883 23.5095 13.0151 22.8291 13.923 22.8291Z" stroke="#C50536" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h4 className="text-[22px] font-bold text-[#C50536]">Motivations</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Ease', score: 4 },
                      { label: 'Price', score: 4 },
                      { label: 'Speed', score: 4 },
                      { label: 'Comfort', score: 4 },
                      { label: 'Flexibility', score: 4 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <span className="w-24 text-gray-800">{item.label}</span>
                        <div className="flex items-center gap-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] rounded-full ${i < item.score ? 'bg-[#C50536]' : 'bg-gray-300'}`}></span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
          {/* Omolara Persona */}
          <motion.div
            className="mt-20 relative grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Top-right decorative vector for Omolara */}
            <div className="pointer-events-none absolute -top-8 -right-6 hidden md:block">
              <svg width="286" height="286" viewBox="0 0 286 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.7578 143.103H97.4043L97.4298 285.654H100.278L100.261 143.103H111.66L111.677 285.654H114.525L114.508 143.103H125.916L125.932 285.654L128.78 285.569L128.763 143.103H140.163L140.18 285.569H143.036L143.01 143.103H285.532V140.213H143.01V128.823H285.524V126.017H143.01V114.627L285.524 114.541V111.736H143.01V100.346H285.524V97.4559H143.01L143.002 71.8701C143.002 32.5134 111.09 0.551396 71.7323 0.6364C32.3827 0.6364 0.479782 32.5134 0.488283 71.8701C0.496784 111.227 32.3997 143.103 71.7578 143.103ZM128.763 128.823H140.163V140.213H128.763V128.823ZM125.907 128.823H114.508V140.213H125.907V128.823ZM111.66 128.823H100.261V140.213H111.66V128.823ZM97.4043 128.823V140.213L71.7578 140.298C33.9724 140.298 3.34448 109.612 3.33598 71.8701C3.33598 34.0435 33.9553 3.44218 71.7408 3.44218C109.518 3.44218 140.146 34.0435 140.154 71.8701V97.4559H128.755V71.8701C128.746 40.3338 103.219 14.8322 71.7408 14.8322C40.2543 14.8322 14.7354 40.4188 14.7354 71.8701C14.7439 103.321 40.2713 128.823 71.7493 128.823H97.4043ZM128.755 100.346H140.154L140.163 111.736H128.755V100.346ZM125.907 97.4559L125.899 71.8701C125.899 41.9488 101.646 17.7226 71.7408 17.7226C41.827 17.7226 17.5831 41.9488 17.5916 71.8701C17.5916 101.791 41.844 126.017 71.7493 126.017H97.4043V114.627H71.7493C48.1344 114.627 28.991 95.5012 28.991 71.8701C28.991 48.2391 48.1259 29.1126 71.7408 29.1126C95.3556 29.1126 114.499 48.2391 114.499 71.8701L114.508 97.4559H125.907ZM111.66 114.627H100.252V126.017H111.66V114.627ZM114.508 126.017V114.627H125.907V126.017H114.508ZM114.508 111.736V100.346H125.907V111.736H114.508ZM111.651 71.8701V97.4559L100.252 97.5406V71.8701C100.244 56.1445 87.484 43.3084 71.7408 43.3084C55.9976 43.3084 43.2381 56.1445 43.2381 71.8701C43.2466 87.5958 56.0061 100.346 71.7493 100.346H97.4043V111.736H71.7493C49.7156 111.736 31.8472 93.8861 31.8387 71.8701C31.8387 49.8542 49.6986 31.9184 71.7408 31.9184C93.783 31.9184 111.651 49.7692 111.651 71.8701ZM97.3958 71.8701C97.3958 57.6745 85.9114 46.1989 71.7408 46.1989C57.5787 46.1989 46.0943 57.6745 46.0943 71.8701C46.0943 85.9807 57.5787 97.5406 71.7493 97.5406H97.4043L97.3958 71.8701ZM100.252 100.346V111.736H111.651V100.346H100.252ZM128.755 114.627H140.163V126.017H128.763L128.755 114.627Z" fill="url(#paint0_linear_1650_18633)" />
                <defs>
                  <linearGradient id="paint0_linear_1650_18633" x1="26.1348" y1="16.2771" x2="285.541" y2="291.273" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7300" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

            </div>

            {/* Left column */}
            <div>
              {/* Name chip */}
              <div className="inline-block bg-[#FF7300] text-white text-[20px] md:text-[22px] font-semibold rounded-tl-none rounded-bl-none rounded-tr-[60px] rounded-br-[60px] px-6 py-3 mb-6">
                Atoyebi Omolara
              </div>

              {/* Photo */}
              <div className="w-full max-w-[360px] rounded-3xl overflow-hidden bg-gray-100">
                <Image src="/projects/grabby/omolara.jpg" alt="Atoyebi Omolara" width={720} height={720} className="w-full h-full object-cover" />
              </div>

              {/* Quote */}
              <div className="mt-4 inline-block bg-[#F2F2F2] text-gray-700 px-6 py-3 rounded-[60px] text-center italic">
                “Nothing is ever as it seems.”
              </div>

              {/* Facts list */}
              <div className='flex gap-1'>
                <div className="mt-6 space-y-2 text-[#FF7300] text-right font-bold uppercase">
                  <p className="text-[18px] md:text-[20px]">Age:</p>
                  <p className="text-[18px] md:text-[20px]">Family:</p>
                  <p className="text-[18px] md:text-[20px]">Location:</p>
                  <p className="text-[18px] md:text-[20px]">Education:</p>
                  <p className="text-[18px] md:text-[20px]">Occupation:</p>
                  <p className="text-[18px] md:text-[20px]">Favorite Apps:</p>
                </div>
                <div className="mt-6 space-y-2 text-gray-900 text-left">
                  <p className="text-[18px] md:text-[20px]">27</p>
                  <p className="text-[18px] md:text-[20px]">Single</p>
                  <p className="text-[18px] md:text-[20px]">Lagos, Nigeria</p>
                  <p className="text-[18px] md:text-[20px]">FUNAAB, Abeokuta</p>
                  <p className="text-[18px] md:text-[20px]">Technical Innovation Specialist</p>
                  <p className="text-[18px] md:text-[20px]">Jumia</p>
                </div>
              </div>

              {/* Bio card */}
              <div className="mt-6 bg-[#FF7300]/[0.08] rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4452 35.0329H11.2818C4.0163 35.0329 2.19971 33.2476 2.19971 25.9373V11.402C2.19971 4.17669 4.0163 2.39111 11.2818 2.39111H29.4452C36.7098 2.39111 38.5264 4.17669 38.5264 11.402V25.9373C38.5264 33.2476 36.7098 35.0329 29.4452 35.0329Z" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.9954 11.4019H33.0775" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.812 18.7119H33.0775" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.4443 25.9375H33.0775" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.0063 17.4368C15.8221 17.4368 17.2935 15.9072 17.2935 14.1221C17.2935 12.337 15.8221 10.8066 14.0063 10.8066C12.1906 10.8066 10.7183 12.337 10.7183 14.1221C10.7183 15.9072 12.1906 17.4368 14.0063 17.4368Z" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.3631 26.5324C20.109 23.8973 18.0203 21.8573 15.3868 21.6023C14.4781 21.5173 13.5524 21.5173 12.6258 21.6023C9.99231 21.8573 7.9037 23.8973 7.64868 26.5324" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4 className="text-[22px] font-bold text-[#FF7300]">Bio</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Omolara is a Lagos based Technical Innovation Specialist and works on the busy part of the state (Victoria Island). Due to distance of shopping malls, she prefers to buy her essential items online.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6 mt-20 relative z-20">
              {/* Goals card */}
              <div className="bg-[#FF7300]/[0.08] rounded-3xl p-6 relative z-20">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0061 7.95969C35.0886 8.12969 35.1107 8.38404 35.069 8.55405C35.0265 8.80906 34.9237 8.97923 34.7706 9.14924L30.4115 13.4849C30.3104 13.5699 30.1896 13.6548 30.0579 13.7398C29.9253 13.8248 29.7833 13.8244 29.6405 13.8244H23.5523L20.6034 16.7996C20.9358 17.4796 21.0115 18.2451 20.8177 19.0102C20.623 19.7752 20.1708 20.3696 19.5409 20.8796C18.9118 21.3046 18.145 21.4748 17.3766 21.4748C16.6081 21.3898 15.8873 21.0496 15.3415 20.4546C14.7966 19.9445 14.4617 19.2647 14.3963 18.4996C14.3308 17.7346 14.5391 16.8849 14.9845 16.2899C15.4291 15.6949 16.0828 15.1848 16.8291 15.0148C17.5755 14.8448 18.3669 14.9297 19.0631 15.2697L22.012 12.2945V6.17411C22.0111 6.08911 22.0392 5.9191 22.0936 5.74909C22.1488 5.66409 22.2288 5.49458 22.3299 5.40958L26.6891 1.07389C26.8412 0.903884 27.0359 0.819379 27.2475 0.734375C27.4592 0.734375 27.6785 0.734043 27.8783 0.819047C28.0772 0.90405 28.2472 1.07406 28.3671 1.24406C28.4869 1.41407 28.5507 1.58425 28.5507 1.83926V7.27899H33.9997C34.2147 7.27899 34.4255 7.36416 34.6049 7.44917C34.7842 7.61917 34.9236 7.78968 35.0061 7.95969ZM31.3687 9.48959H27.4609C27.1719 9.48959 26.8948 9.31925 26.6899 9.14924C26.4859 8.97923 26.3712 8.63972 26.3712 8.3847V4.47404L24.1916 6.68463V11.6147H29.1891L31.3687 9.48959ZM34.2326 12.8042C34.7885 14.5043 35.0894 16.29 35.0894 18.1601C35.0877 21.9003 33.9206 25.4701 31.7538 28.4452C29.5869 31.4204 26.5335 33.6308 23.0295 34.7358C19.5256 35.9259 15.7521 35.9259 12.2507 34.7358C8.74842 33.6308 5.69752 31.4204 3.53581 28.4452C1.37409 25.4701 0.211225 21.8153 0.216325 18.1601C0.220576 14.505 1.3911 10.8493 3.55962 7.87418C5.72899 4.89906 8.78499 2.68946 12.2898 1.58441C15.7946 0.479364 19.5681 0.479364 23.0686 1.58441L21.3073 3.36916C18.0719 2.60412 14.6649 2.85947 11.6055 4.13452C8.54608 5.49458 6.00442 7.78901 4.36719 10.6791C2.72912 13.5693 2.08732 16.9701 2.5387 20.2852C2.99009 23.5154 4.50998 26.5748 6.86551 28.9549C9.22189 31.335 12.2847 32.8656 15.5864 33.2906C18.888 33.7156 22.2466 33.1201 25.1487 31.505C28.0517 29.805 30.3384 27.2552 31.6603 24.1951C32.9821 21.1349 33.266 17.7344 32.4695 14.5043L34.2326 12.8042ZM28.3322 16.035C28.8006 18.3301 28.5167 20.7102 27.523 22.8353C26.5293 24.9604 24.8784 26.6603 22.8145 27.7654C20.7514 28.8704 18.3856 29.2949 16.0683 28.9549C13.751 28.6149 11.6046 27.5102 9.94871 25.8951C8.29193 24.1951 7.21318 22.0698 6.8723 19.7747C6.53143 17.4796 6.94629 15.1 8.05562 13.0599C9.16496 10.9348 10.9093 9.31925 13.031 8.2992C15.1519 7.27916 17.5373 7.02465 19.8324 7.53467V9.74443C17.9801 9.23441 16.0233 9.40442 14.2619 10.1694C12.4997 10.9345 11.0325 12.2094 10.0839 13.8244C9.13519 15.5245 8.75949 17.4796 9.01366 19.3497C9.26698 21.2198 10.1374 23.0052 11.4899 24.3652C12.8415 25.7253 14.6011 26.5748 16.4959 26.8298C18.3916 27.0848 20.3178 26.66 21.978 25.725C23.639 24.7899 24.9413 23.3453 25.6852 21.5603C26.4298 19.7752 26.5743 17.8201 26.0966 16.035H28.3322Z" fill="#FF7300" />
                  </svg>
                  <h4 className="text-[22px] font-bold text-[#FF7300]">Goals</h4>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>Price range.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>Diversity of brands.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>Availability of goods.</span></li>
                </ul>
              </div>

              {/* Frustrations card */}
              <div className="bg-[#FF7300]/[0.08] rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0128 38.2939H25.9106C34.9927 38.2939 38.6251 34.6393 38.6251 25.6289V14.6631C38.6251 5.65271 34.9927 1.99805 25.9106 1.99805H15.0128C5.9315 1.99805 2.29834 5.65271 2.29834 14.6631V25.6289C2.29834 34.6393 5.9315 38.2939 15.0128 38.2939Z" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.3804 14.2377C13.1961 12.4527 16.1569 12.4527 17.9913 14.2377" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.9321 14.2377C24.7487 12.4527 27.7086 12.4527 29.5431 14.2377" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.923 30.4742H27.0004C27.9091 30.4742 28.6351 29.7938 28.6351 28.8587C28.6351 24.3536 24.9841 20.6987 20.4617 20.6987C15.9394 20.6987 12.2883 24.3536 12.2883 28.8587C12.2883 29.7938 13.0151 30.4742 13.923 30.4742Z" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4 className="text-[22px] font-bold text-[#FF7300]">Frustrations</h4>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>Item ordered doesn’t match description.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>Delayed delivery.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 w-2 h-2 rounded-full bg-[#FF7300] shrink-0"></span><span>App is not user friendly and too slow.</span></li>
                </ul>
              </div>

              {/* Motivations card */}
              <div className="bg-[#FF7300]/[0.08] rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0128 38.64H25.9106C34.9919 38.64 38.6251 34.9849 38.6251 25.8895V15.0084C38.6251 5.91297 34.9919 2.25781 25.9106 2.25781H15.0128C5.9315 2.25781 2.29834 5.91297 2.29834 15.0084V25.8895C2.29834 34.9849 5.9315 38.64 15.0128 38.64Z" stroke="#FF7300" strokeWidth="3.2591" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.8184 16.3693C28.3239 16.3693 29.5429 15.1791 29.5429 13.649C29.5429 12.1189 28.3239 10.9287 26.8184 10.9287C25.3138 10.9287 24.094 12.1189 24.094 13.649C24.094 15.1791 25.3138 16.3693 26.8184 16.3693Z" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1048 16.3693C15.6094 16.3693 16.8293 15.1791 16.8293 13.649C16.8293 12.1189 15.6094 10.9287 14.1048 10.9287C12.6002 10.9287 11.3804 12.1189 11.3804 13.649C11.3804 15.1791 12.6002 16.3693 14.1048 16.3693Z" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.923 22.8291H27.0004C27.9091 22.8291 28.6351 23.5095 28.6351 24.4445C28.6351 28.9497 24.9841 32.6045 20.4617 32.6045C15.9394 32.6045 12.2883 28.9497 12.2883 24.4445C12.2883 23.5095 13.0151 22.8291 13.923 22.8291Z" stroke="#FF7300" strokeWidth="3.2591" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h4 className="text-[22px] font-bold text-[#FF7300]">Motivations</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Ease', score: 4 },
                    { label: 'Price', score: 3 },
                    { label: 'Speed', score: 4 },
                    { label: 'Comfort', score: 4 },
                    { label: 'Flexibility', score: 4 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <span className="w-24 text-gray-800">{item.label}</span>
                      <div className="flex items-center gap-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] rounded-full ${i < item.score ? 'bg-[#FF7300]' : 'bg-gray-300'}`}></span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empathy Mapping Section */}
      <section className="w-full max-w-[1513px] px-[20[px] sm:px-[40px] lg:px-[80px] mx-auto relative overflow-hidden">

        <div className="overflow-hidden w-full max-w-[1513px] mx-auto py-20 bg-[#FFFBF8] px-[20px] sm:px-[40px] lg:px-[80px] relative z-10">
          {/* Decorative left semicircle */}
          <div className="pointer-events-none absolute translate-x-[-60%] translate-y-[15%] top-10 w-[45vw] sm:w-[38vw] md:w-[32vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[22vw] aspect-square bg-[#FFF4EB] rounded-full"></div>
          <div className="pointer-events-none absolute right-0 translate-x-[60%] translate-y-[15%] top-10 w-[45vw] sm:w-[38vw] md:w-[32vw] lg:w-[28vw] xl:w-[24vw] 2xl:w-[22vw] aspect-square bg-[#FFF4F7] rounded-full"></div>

          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold mb-6 relative z-20">
              <span className="text-gray-900">Empathy </span>
              <span className="text-[#C50536]">Mapping</span>
            </h2>
          </motion.div>

          {/* Empathy Map Grid */}
          <motion.div
            className=" relative z-50 grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[30px] lg:gap-[60px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Says Card */}
            <div className="bg-[#FFEAD8] rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Says</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Availability of bidding system.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Online shopping is fast and reliable.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Sometimes the items advertised online are not what was delivered</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Delayed delivery</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>One should be able to return item with ease.</span></li>
              </ul>
            </div>

            {/* Thinks Card */}
            <div className="bg-[#FFD0DD] rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Thinks</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Verification of product quality can be challenging.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Ensuring payment details are safe and secure.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Too many congestion of items on a page.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>You get to see what you want to buy live when you shop in store.</span></li>
              </ul>
            </div>

            {/* Does Card */}
            <div className="bg-[#FFEAD8] rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Does</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Often check product details before purchase.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Search for items needed.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Having varieties of option to choose from is a plus.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Having to save payment details to use for subsequent transactions.</span></li>
              </ul>
            </div>

            {/* Feels Card */}
            <div className="bg-[#FFD0DD] rounded-2xl p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Feels</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Lack of reviews can be offsetting.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Feels bad because they can’t get to bid for items.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>Dispute between customers and vendors are often not resolved.</span></li>
                <li className="flex items-start"><span className="text-black text-lg mr-3">•</span><span>The comfort that comes with shopping online in comfort of my home is why i like online shopping.</span></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-0 max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="w-full py-10 lg:py-30 max-w-[1513px] mx-auto bg-[#FFF4F7]">
          {/* Section Header */}
          <motion.div
            className="block lg:hidden text-center mb-16 relative z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-center mx-auto sm:text-3xl lg:text-4xl font-bold text-pink-500 relative z-10">
              <span className='text-black'>Pain </span><span className='text-[#C50536]'>Points</span>
            </h2>
          </motion.div>
          <Image src="/projects/grabby/pain-point.png" alt="Pain points mockup" width={520} height={800} className="block relative translate-x-1/6 -translate-y-1/5 lg:hidden w-full h-auto" />


          {/* Pain Points Layout with Central Phone */}
          <motion.div
            className="-translate-y-1/12 sm:-translate-y-1/3 lg:translate-y-0 relative w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative semicircle background */}
            <div className="hidden lg:block absolute left-0 top-0 w-[340px] h-[680px] bg-[#FFD0DD] rounded-r-[340px] z-0"></div>
            {/* Absolutely positioned mockup image on the left */}
            <div className="hidden lg:block absolute left-0 xl:left-20 top-1/20">
              {/* <div className="relative"> */}
              {/* Section Header */}
              <motion.div
                className="absolute -translate-y-[250%] translate-x-[70%] text-center w-max relative z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl text-center mx-auto sm:text-2xl lg:text-3xl font-bold text-pink-500 relative z-10">
                  <span className='text-black'>Pain </span><span className='text-[#C50536]'>Points</span>
                </h2>
              </motion.div>
              <Image src="/projects/grabby/pain-point.png" alt="Pain points mockup" width={520} height={800} className="w-[600px] lg:w-[600px] h-auto relative z-10 -translate-y-1/5" />
              {/* </div> */}
            </div>
            {/* Text grid constrained to ~60% width to create space for image */}
            <div className="justify-items-center lg:justify-end lg:mr-0 lg:ml-auto w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-y-6">
              {[
                {
                  n: 1,
                  title: 'Pain point 1',
                  text: 'Confusing or cluttered navigation, making it difficult for users to find what they are looking for.'
                },
                {
                  n: 2,
                  title: 'Pain point 2',
                  text: 'Lack of trust in the payment system or uncertainty about the bidding process, leading to hesitation in making purchases or bids.'
                },
                {
                  n: 3,
                  title: 'Pain point 3',
                  text: 'Difficulty in tracking orders or obtaining updates on the status of their purchases.'
                },
                {
                  n: 4,
                  title: 'Pain point 4',
                  text: 'Inadequate customer support, making it difficult for users to get help or resolve issues with their orders.'
                },
                {
                  n: 5,
                  title: 'Pain point 5',
                  text: 'Lack of detailed product information or unclear product images, leading to uncertainty about the quality or suitability of the product.'
                },
                {
                  n: 6,
                  title: 'Pain point 6',
                  text: 'Limited payment options, making it difficult for some users to complete their purchases.'
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center px-4 w-full max-w-[340px]">
                  <div className="mx-auto w-10 h-10 rounded-full border border-[#C50536] text-[#C50536] flex items-center justify-center font-semibold mb-3">
                    {item.n}
                  </div>
                  <h3 className="text-[22px] font-bold text-[#C50536] mb-2">{item.title}</h3>
                  <p className="text-gray-800 text-[16px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Task Flow Section */}
      <section className="w-full max-w-[1513px] mx-auto py-0 px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] py-20 px-[20px] sm:px-[40px] lg:px-[80px] mx-auto bg-[#FFFBF8]">
          {/* Section Header */}
          <motion.div
            className="mb-6 sm:mb-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-500">
              <span className='text-black'>User Task </span><span className='text-[#C50536]'>Flow</span>
            </h2>
            <div className="mt-4 flex items-start gap-3">
              <span className="mt-[10px] inline-block w-3 h-3 rounded-full bg-[#FF7A00] shrink-0"></span>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                The Process of users take to purchase item on Grabby
              </p>
            </div>
          </motion.div>

          {/* Diagram */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full mx-auto">
              <Image
                src="/projects/grabby/user-flow.png"
                alt="User Task Flow diagram"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* High Fidelity Wireframes Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px] ">
        <div className="max-w-[1513px] mx-auto bg-[#FFF4F7] pt-20 ">
          <motion.div
            className="mb-10 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className='text-black'>High Fidelity </span><span className='text-[#C50536]'>Wireframes</span>
            </h2>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full mx-auto">
              <Image
                src="/projects/grabby/wireframes.png"
                alt="High Fidelity Wireframes"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Visual Style Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] mx-auto bg-white py-20 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-black">Visual Style </span>
              <span className="text-[#C50536]">Used</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Section - Font Display */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-[#C50536] rounded-full ring-4 ring-[#FFD0DD]"></div>
                  <h3 className="text-2xl font-bold text-black">Font Used</h3>
                </div>

                <div className="relative inline-block">
                  <div className="text-6xl md:text-7xl font-bold font-['Poppins'] text-[#C50536]">
                    Poppins
                  </div>
                  <div className="absolute inset-0 border-2 border-black rounded-sm pointer-events-none">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-black"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-black"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black"></div>
                  </div>
                </div>

                <div className="space-y-2 text-black font-['Poppins']">
                  <div className="text-xl md:text-2xl break-all">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                  <div className="text-xl md:text-2xl break-all">abcdefghijklmnopqrstuvwxyz</div>
                  <div className="text-xl md:text-2xl break-all">1234567890</div>
                </div>
              </div>

              {/* Right Section - Font Description */}
              <div className="space-y-6">
                <p className="text-lg text-black leading-relaxed font-['Poppins']">
                  Poppins is a versatile, modern sans-serif font designed by Ninad Kale and released by the Google Fonts team. It has a tall x-height for improved legibility and comes in nine weights with matching italics. Poppins' clean and contemporary look makes it a popular choice for a range of designs, from branding to advertising.
                </p>
                {/* Font Weights Panel (moved under description) */}
                <div className="bg-[#FFF1E8] rounded-2xl p-8 shadow-sm">
                  <div className="flex flex-wrap gap-x-8 gap-y-6 items-center justify-start font-['Poppins'] text-xl">
                    <span className="font-bold text-black">Poppins Bold</span>
                    <span className="font-medium text-black">Poppins Medium</span>
                    <span className="font-light text-black">Poppins Light</span>
                    <span className="font-semibold text-black">Poppins SemiBold</span>
                    <span className="font-normal text-black">Poppins Regular</span>
                  </div>
                </div>
              </div>
            </div>




            {/* Colors Section */}
            <div className="w-full py-20 px-[20px] sm:px-[40px] lg:px-[80px] mt-16 bg-[#C50536]/5">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-3 bg-[#C50536] rounded-full"></div>
                <h3 className="text-2xl font-medium text-black">Colours Used</h3>
              </div>

              <div className="">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {/* Primary Colour */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#19002D" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Primary Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#19002D</div>
                    </div>
                  </div>

                  {/* Secondary Colour */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#C50536" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Secondary Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#C50536</div>
                    </div>
                  </div>

                  {/* In App Colour 1 */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#2A004C" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">In App Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#2A004C</div>
                    </div>
                  </div>

                  {/* In App Colour 2 */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#52336C" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">In App Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#52336C</div>
                    </div>
                  </div>

                  {/* Success Colour */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#0DBF0D" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Success Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#0DBF0D</div>
                    </div>
                  </div>

                  {/* Text Color 1 */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#FFFFFF" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Text Color</div>
                      <div className="text-xs text-gray-500 font-mono">#FFFFFF</div>
                    </div>
                  </div>

                  {/* Text Color 2 */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#D2D2D2" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Text Color</div>
                      <div className="text-xs text-gray-500 font-mono">#D2D2D2</div>
                    </div>
                  </div>

                  {/* Error Colour */}
                  <div className="flex flex-col items-center space-y-3">
                    <svg className="w-[80px] md:w-[100px] lg:w-[140px] h-auto" width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill="#C50536" />
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Error Colour</div>
                      <div className="text-xs text-gray-500 font-mono">#C50536</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo & Icons Section */}
            <div className="w-full max-w-[1513px] mx-auto">
              <div className="bg-[#FF7300]/5 py-20 px-[20px] sm:px-[40px] lg:px-[80px] w-full max-w-[1513px] mx-auto">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-3 h-3 bg-[#C50536] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-black">Logo & Icons</h3>
                </div>
                {/* Grabby Logo */}
                <div className="flex items-center justify-start mb-12">
                  <Image
                    src="/projects/grabby/logo.png"
                    alt="Grabby logo"
                    width={400}
                    height={120}
                    className="w-auto h-auto max-w-full"
                    priority={false}
                  />
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-11 gap-4">
                  {/* Row 1 */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L16 7m-5 5a2 2 0 11-4 0 2 2 0 014 0zM6 10H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2M6 10V8a2 2 0 012-2h2M6 10h2a2 2 0 012 2v2" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  {/* Row 2 */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="text-lg font-bold text-purple-900">100</div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>

                  {/* Row 3 */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  {/* Row 4 */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High Fidelity Prototype Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] mx-auto bg-[#FFD3AD] py-20 px-[20px] sm:px-[40px] lg:px-[80px]">
          <motion.div
            className="mb-10 sm:mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className='text-black'>High Fidelity </span><span className='text-[#C50536]'>Prototype</span>
            </h2>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full mx-auto ">
              <Image
                src="/projects/grabby/hifi.png"
                alt="High Fidelity Prototype screens"
                width={1920}
                height={3000}
                className="w-full h-auto"
                priority={false}
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* High Fidelity Prototype Link Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] mx-auto bg-white py-[60px]">
          <div className="text-center mb-[16px] sm:mb-[20px] md:mb-[24px]">
            <h3 className="font-bold text-[28px] md:text-[36px] lg:text-[44px] leading-[36px] md:leading-[46px] lg:leading-[54px]">
              <span className="text-black">High Fidelity </span>
              <span className="text-[#C50536]">Prototype Link</span>
            </h3>
          </div>
          <div className="mx-auto max-w-[1200px] text-center px-[16px] sm:px-[20px]">
            <a
              href="https://www.figma.com/design/7Dns01JoKSVmkZ6pDnGhT3/Abdulazees-Design-Portfolio?node-id=0-1&p=f&t=nJdvHgudrP7Hm4Kz-0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0067A2] underline break-words break-all text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]"
            >
              https://www.figma.com/design/7Dns01JoKSVmkZ6pDnGhT3/Abdulazees-Design-Portfolio?node-id=0-1&p=f&t=nJdvHgudrP7Hm4Kz-0
            </a>
          </div>
        </div>
      </section>
      {/* Lessons & Next Steps Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] mx-auto bg-[#FFFBF8] py-[80px] px-[20px] sm:px-[40px] lg:px-[80px]">
          {/* Title */}
          <div className="text-center mb-[40px]">
            <h2 className="font-bold text-[44px] leading-[54px]">
              <span className="text-black">Lessons </span>
              <span className="text-[#C50536]">& Next Steps</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-[80px]">

            {/* Lessons Learned */}
            <div>
              <div className="flex items-center gap-[12px] mb-[24px]">
                <span className="inline-flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.1195 54.5784C42.8856 54.5784 54.856 42.6077 54.856 27.8421C54.856 13.0764 42.8856 1.10742 28.1195 1.10742C13.3533 1.10742 1.38293 13.0764 1.38293 27.8421C1.38293 42.6077 13.3533 54.5784 28.1195 54.5784Z" fill="#C50536" fillOpacity="0.05" stroke="#C50536" strokeWidth="2" />
                    <path d="M42.052 34.473V17.6416C42.052 15.9415 40.6868 14.7525 39.0283 14.8375H38.945C36.0191 15.0925 31.5749 16.6229 29.0945 18.153L28.8581 18.3223C28.4535 18.5773 27.7854 18.5773 27.3807 18.3223L27.033 18.0666C24.5526 16.5366 20.1221 15.0925 17.1963 14.8375C15.5383 14.6675 14.1868 15.9415 14.1868 17.6416V34.473C14.1868 35.7481 15.2736 37.0225 16.6111 37.1925L17.0151 37.2788C20.0385 37.7038 24.7056 39.2339 27.3807 40.6789H27.4368C27.8126 40.9339 28.4119 40.9339 28.774 40.6789C31.4491 39.2339 36.1305 37.7038 39.1677 37.2788L39.6276 37.1925C40.9656 37.0225 42.052 35.7481 42.052 34.473Z" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.1194 18.7461V39.6567" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.2" d="M22.1979 22.9121H19.0632" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.2434 27.1621H19.0632" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[28px] leading-[34px] font-bold text-black">Lessons Learned</h3>
              </div>
              <div className="space-y-[18px] text-[16px] leading-[28px] text-black/80">
                <p>
                  The success of any project relies heavily on understanding the brief and conducting thorough user research. This is crucial in identifying user pain points and designing appropriate solutions that address these problems effectively. In the case of product design, this process is iterative and nonlinear, which means that it requires continuous research, ideation, and testing to ensure that the final product is a good fit for its intended users.
                </p>
                <p>
                  The design thinking process is integral in the development of any product, and it involves empathizing with the user, defining the problem, ideating potential solutions, prototyping, and testing. This iterative approach allows for constant improvement and refinement of the product, ensuring that it meets user needs and expectations.
                </p>
                <p>
                  As part of a product design team, collaboration and effective communication are essential to building a successful product. Working together, team members can leverage their unique skills and expertise to solve complex problems and create a product that meets the needs of its users.
                </p>
                <p>
                  In summary, by following the design thinking process, conducting proper user research, and working collaboratively as a team, product designers can develop solutions that address user problems effectively and deliver a product that meets user needs and expectations.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <div className="flex items-center gap-[12px] mb-[24px]">
                <span className="inline-flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.1195 54.8964C42.8856 54.8964 54.856 42.9258 54.856 28.1601C54.856 13.3945 42.8856 1.42383 28.1195 1.42383C13.3533 1.42383 1.38293 13.3945 1.38293 28.1601C1.38293 42.9258 13.3533 54.8964 28.1195 54.8964Z" fill="#C50536" fillOpacity="0.05" stroke="#C50536" strokeWidth="2" />
                    <path d="M18.0879 39.2949H38.151" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.9859 24.1641H19.2025C18.5894 24.1641 18.0879 24.6731 18.0879 25.2681V34.8742C18.0879 35.4692 18.5894 35.9782 19.2025 35.9782H20.9859C21.5988 35.9782 22.1 35.4692 22.1 34.8742V25.2681C22.1 24.6731 21.5988 24.1641 20.9859 24.1641Z" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M29.0112 20.5938H27.2277C26.6148 20.5938 26.1133 21.1044 26.1133 21.6995V34.875C26.1133 35.4701 26.6148 35.9791 27.2277 35.9791H29.0112C29.6241 35.9791 30.1256 35.4701 30.1256 34.875V21.6995C30.1256 21.1044 29.6241 20.5938 29.0112 20.5938Z" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.0367 17.0234H35.2532C34.6403 17.0234 34.1379 17.5325 34.1379 18.1275V34.8742C34.1379 35.4692 34.6403 35.9783 35.2532 35.9783H37.0367C37.6496 35.9783 38.1511 35.4692 38.1511 34.8742V18.1275C38.1511 17.5325 37.6496 17.0234 37.0367 17.0234Z" stroke="#C50536" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="text-[28px] leading-[34px] font-bold text-[#C50536]">Next Steps</h3>
              </div>
              <div className="space-y-[18px] text-[16px] leading-[28px] text-black/80">
                <p>
                  To ensure that the e-commerce app I designed meets the needs of users, we plan to conduct more user research and usability testing. This will help me to identify user pain points and areas for improvement in the app. I believe that by continuously iterating on the product, I can provide the best possible experience for users.
                </p>
                <p>
                  To bring my app to life, I intend to work closely with developers who will help me to build and launch the product. Collaborating with developers is essential to ensure that the app is developed in a way that aligns with my design vision and meets the needs of my target users.
                </p>
                <p>
                  I also recognize that the e-commerce landscape is constantly evolving, and I must remain adaptable and responsive to changes in user behavior and preferences. As such, I will continue to research and monitor industry trends and emerging technologies to ensure that my app remains relevant and competitive in the market.
                </p>
                <p>
                  In summary, I plan to conduct more user research and usability testing, collaborate with developers to build the app, and remain adaptable to changes in the e-commerce landscape to deliver the best possible experience for my users.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-[40px] text-center">
            <p className="text-[#C50536] text-[18px] leading-[28px]">
              Email: <span className="text-black/80">Olayinkaazees93@gmail.com</span>
            </p>
            <p className="text-[#0077C8] text-[18px] leading-[28px] mt-[6px]">
              Contact: <span className="text-black/80">+447867270582</span>
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Let's Connect Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Lets Connect</h2>
            <div className="w-full h-px bg-gray-600"></div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Branding and Social Media */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-blue-400">
                AODZN
                <span className="text-blue-400 text-sm">.</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">About Me</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Service</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Resume</a></li>
                <li><a href="#" className="text-white hover:text-blue-400 transition-colors">Project</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
              <div className="space-y-2">
                <div className="text-white">+447867270582</div>
                <div className="text-white">Olayinkaazees93@gmail.com</div>
                <div className="text-white">AbdulazeesOlayinka.com</div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">Get the latest information</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-600 mb-8"></div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm">
              Copyright© 2025 Abdulazees Olayinka. All Rights Reserved.
            </div>
            <div className="text-white text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">User Terms & Conditions</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default GrabbyPage;