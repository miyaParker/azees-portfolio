'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import BackToTopButton from '@/components/BackToTopButton';

const CineTripsPage = () => {
  return (
    <div className="overflow-x-hidden text-white " style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="projects" />

      {/* Hero Section */}
      <section className="pt-[120px] md:pt-[150px] min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="CineTrips Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main content */}
        <div className="w-full min-h-screen h-full relative z-10 flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center flex items-center justify-center w-full max-w-[1513px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px]"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-bold text-white leading-tight">
              A simpler way to book cinema tickets and enjoy movies, anytime, anywhere.
            </h1>
          </motion.div>
          <div className="w-full mt-auto py-8" style={{ backgroundColor: "#D70A84" }}>
            <div className="w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12  max-w-[1513px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px]">
                {/* Client */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/95 text-[14px] sm:text-[16px] md:text-[18px]">CineTrips</p>
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
                  <p className="text-white/95 text-[14px] sm:text-[16px] md:text-[18px]">Entertainment</p>
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
                  <p className="text-white/95 text-[14px] sm:text-[16px] md:text-[18px]">Mobile App</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Intro Section */}
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] bg-white">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/projects/cinetrips/intro-img.png"
              alt="CineTrips Intro Card"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="w-full max-w-[1513px] overflow-hidden mx-auto px-[20px] md:px-[40px] xl:px-[80px] bg-white">
        <div className="mx-auto">
          <div className="relative min-h-[600px] lg:min-h-[700px]">
            {/* Left Side - Project Details */}
            <motion.div
              className="w-full lg:max-w-[60%] min-[1440px]:max-w-[876px] space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Overview Title */}
              <motion.h2
                className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-semibold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-[#4F127F]">Project</span> <span className="text-[#D70A84]">Overview</span>
              </motion.h2>

              {/* Project Description */}
              <motion.div
                className="space-y-6 text-gray-600 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  CineTrips is a mobile-first cinema ticket booking app designed to simplify and modernise the movie-going experience. The project aimed to create an intuitive platform that allows users to discover films, view cinemas, choose seats, add food and drinks, and book tickets in just a few taps.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  The app focuses on user experience with features like real-time seat selection, QR code ticketing for contactless entry, Latest movie thriller preview and smart recommendations based on location and viewing history. The design prioritises speed and usability, ensuring users can complete their booking journey efficiently.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                  This case study covers the end-to-end UX/UI design process, from user research and wireframing to prototyping and final visual design, with a strong emphasis on mobile responsiveness and tech-driven convenience.
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
                    src="/projects/cinetrips/overview.png"
                    alt="CineTrips Mobile Mockup"
                    width={535}
                    height={640}
                    className="w-[300px] sm:w-[350px] h-auto"
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
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#D70A84] rounded-full mr-3"></span>
                      UX Researcher
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#D70A84] rounded-full mr-3"></span>
                      UX Designer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#D70A84] rounded-full mr-3"></span>
                      UX Writer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#D70A84] rounded-full mr-3"></span>
                      UI Designer
                    </li>
                    <li className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                      <span className="w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] md:w-[8px] md:h-[8px] lg:w-[9px] lg:h-[9px] xl:w-[10px] xl:h-[10px] bg-[#D70A84] rounded-full mr-3"></span>
                      Brand Identity Designer
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Mobile Mockup - Hidden on small screens, absolute on medium+ */}
            <motion.div
              className="hidden md:block md:absolute flex justify-center items-center
                         md:right-0 md:-bottom-[200px] lg:top-0 xl:-right-[100px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/projects/cinetrips/overview.png"
                  alt="CineTrips Mobile Mockup"
                  width={535}
                  height={640}
                  className="w-[360px] lg:w-[360px] xl:w-[480px] h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Thinking Process Section */}
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] bg-white">
        <div className="mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">

              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold text-purple-900">
                <Image
                  src="/projects/cinetrips/recovery-convert.png"
                  alt="Design Thinking Process Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8 inline-block"
                /> <span className="text-[#D70A84]">Design Thinking</span> Process
              </h2>
            </div>
          </motion.div>

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

          {/* Content and Mockup */}
          <div className="relative">
            {/* Left Side - Text Content */}
            <motion.div
              className="w-full md:max-w-[70%] space-y-6 text-justify"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed">
                The design thinking process for CineTrips followed five key stages: <strong>empathize, define, ideate, design</strong> and <strong>test</strong>.
                I began by empathizing with users through research and interviews to understand their frustrations with existing cinema booking platforms. Common issues included cluttered interfaces, limited booking options, and slow navigation.
              </p>

              <p className="text-gray-700 text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed">
                Next, I defined the core problems users faced and created user personas to guide the solution. In the ideation stage, I brainstormed multiple ways to simplify and improve the ticket booking experience while making it more engaging and reliable.
              </p>

              <p className="text-gray-700 text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed">
                Moving into the design phase, I developed wireframes and high-fidelity prototypes that brought my ideas to life. These prototypes were then tested with real users, whose feedback helped me identify what worked and what needed improvement.
              </p>

              <p className="text-gray-700 text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[28px] leading-relaxed">
                Through several iterations, I refined the app to be sleek, intuitive, and efficient. The final result is CineTrips, a cinema ticket booking app that makes discovering films, selecting seats, and making payments easy and enjoyable for everyone.
              </p>
            </motion.div>

            {/* Right Side - iPhone Mockup (Absolute positioned for medium+ screens) */}
            <motion.div
              className="hidden md:block absolute top-0 -right-[60px] xl:-right-[80px] z-10 md:w-[35%] md:top-1/2 md:-translate-y-1/2 z-5"
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
                className="w-full"
                priority
              />
            </motion.div>

            {/* Right Side - iPhone Mockup (Relative positioned for small screens) */}
            <motion.div
              className="md:hidden relative -right-[20px] flex justify-center mt-8"
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
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="max-w-[1513px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] mx-auto py-20 px-4 sm:px-8 bg-white relative ">
        <div className="max-w-[1513px] mx-auto bg-white rounded-3xl px-[20px] sm:px-[40px] lg:px-[80px] relative py-10 md:py-30">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold mb-6">
              <span className="text-purple-900">Project </span>
              <span className="text-[#D70A84]">Timeline</span>
            </h2>

          </motion.div>

          {/* Timeline Image */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full pb-6">
              <Image
                src="/projects/cinetrips/timeline.png"
                alt="Project Timeline"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
              {/* Bottom Vector Decoration (relative to image) */}

            </div>
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none  -bottom-40">
              <Image
                src="/projects/cinetrips/vector.png"
                alt="Decorative vector"
                width={1200}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

        </div>

      </section>

      {/* Empathize Phase Section */}
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] bg-white">
        <div className="max-w-[1513px] mx-auto">

          <div className="bg-[#FFFBF8] p-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[36px] md:text-[44px] font-bold">
                <span className="text-black">Empathize </span>
                <span className="text-[#D70A84]">Phase</span>
              </h2>
            </motion.div>
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
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#40066E]/5"></span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#40066E]/5"></span>
                  <span className="relative block w-3 h-3 bg-[#D70A84] rounded-full"></span>
                </div>
                <h3 className="text-[24px] md:text-[26px] font-bold text-gray-800">Qualitative Research</h3>
              </div>
              <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed ml-8">
                To better understand user expectations and pain points around cinema ticket booking, I conducted interviews with 10 participants aged between 18 and 55. These interviews were held via Google Meet, Zoom, Webex, and other online conferencing tools. The goal was to gather in-depth feedback on existing cinema booking experiences, competitors, and desired features in a movie ticketing app. The conversations revealed several key insights related to user experience, functionality, and overall app design preferences.
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
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#40066E]/5"></span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#40066E]/5"></span>
                  <span className="relative block w-3 h-3 bg-[#D70A84] rounded-full"></span>
                </div>
                <h3 className="text-[24px] md:text-[26px] font-bold text-gray-800">Interview Questions</h3>
              </div>
              <div className="ml-8 space-y-4">
                {[
                  "How do you usually book cinema tickets?",
                  "Have you ever faced issues while booking tickets through an app or website? If yes, what kind?",
                  "What features do you value most when booking a movie ticket online?",
                  "How important is it for you to see trailers, cast details, or reviews before booking?",
                  "How do you prefer to select your seat—manually or auto-assign?",
                  "What influences your decision to book a particular cinema or screening time?",
                  "How do you usually pay for movie tickets? Any preferred payment methods?",
                  "Do you book tickets alone or for groups? How important is it for the app to support group bookings?",
                  "How do you keep track of your bookings or showtimes?",
                  "Would you recommend your preferred booking platform to friends or family? Why or why not?"
                ].map((question, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="relative mt-3 flex-shrink-0">
                      <span className="relative block w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed">{question}</p>
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
            <h3 className="text-[24px] md:text-[26px] font-bold text-[#D70A84] mb-8">Key Insight Derived</h3>
            <div className="space-y-4">
              {[
                "Ease of navigation and speed are critical. Users expect a smooth, quick process from browsing to booking without unnecessary steps or delays.",
                "Visual appeal and clarity matter. A clean layout with clear movie posters, screening times, and seat maps improves the user experience.",
                "Seat selection is a high-priority feature. Users prefer an interactive seat map that lets them choose exactly where to sit, especially for group bookings.",
                "Payment trust and flexibility are essential. Users want multiple secure payment options, including Apple Pay, Google Pay, and card payments.",
                "Mobile-first experience is expected. Most users book tickets on their smartphones, so mobile optimization is non-negotiable.",
                "Information richness influences booking decisions. Users want trailers, movie summaries, age ratings, and cast info before buying a ticket.",
                "Notifications and reminders enhance convenience. Users value timely reminders before showtime and alerts about ticket availability or new releases.",
                "Social features like sharing bookings, inviting friends, or reviewing experiences are considered helpful by many.",
                "User reviews and ratings for both films and cinemas are highly influential when deciding what and where to watch.",
                "Personalization adds value. Recommendations based on past bookings or preferred genres make users feel understood and save time."
              ].map((insight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="relative mt-3 flex-shrink-0">
                    <span className="relative block w-2 h-2 bg-black rounded-full"></span>
                  </div>
                  <p className="text-gray-700 text-[18px] md:text-[20px] leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Audit Section */}
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold mb-6">
              <span className="text-gray-900">Competitive </span>
              <span className="text-[#D70A84]">Audit</span>
            </h2>
            <p className="text-gray-800 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] max-w-[1190px] mx-auto leading-relaxed text-justify">
              To assess the competitive landscape for CineTrips in the UK, I reviewed three major cinema booking platforms widely used across the country. Each was evaluated for user experience, functionality, content offering, and technological strengths and limitations. This helped identify strategic opportunities for CineTrips to differentiate and deliver a more compelling experience.
            </p>
          </motion.div>

          {/* Competitive Audit Table */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[813px] border border-[#C50536]">
                <thead>
                  <tr className="bg-[#FFF0F7]">
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-1/5 max-w-[280px]">Brands</th>
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-2/5">Strengths</th>
                    <th className="border border-[#C50536] px-6 py-5 xl:h-[170px] text-center text-[20px] lg:text-[30px] font-semibold text-gray-900 w-2/5">Weaknesses</th>
                  </tr>
                </thead>
                <tbody>
                  {/* ODEON Row */}
                  <tr>
                    <td className="border border-[#C50536] px-6 py-8 align-middle bg-[#FFF4CE] max-w-[280px]">
                      <div className="flex items-center justify-center">
                        <Image src="/projects/cinetrips/odeon.png" alt="ODEON" width={160} height={60} className="h-auto w-auto" />
                      </div>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Limitless Membership Integration: Seamless app sync with Odeon Limitless plan.</li>
                        <li>2. Barcode Ticketing: QR code-based entry, reliable in most cinemas.</li>
                        <li>3. Snacks & Upgrades: Pre-order popcorn and drinks or upgrade seating.</li>
                        <li>4. Cinema Selection & Filtering: Strong filters by location, film, and time.</li>
                        <li>5. Push Notifications: Reminders for bookings and offers.</li>
                      </ol>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Chain‑Exclusive: Works only for Odeon cinemas, limiting flexibility.</li>
                        <li>2. Outdated User Interface: Feels clunky and dated.</li>
                        <li>3. Glitches and Bugs: Failed payments, freezes, login issues.</li>
                        <li>4. Limited Discovery Tools: No personalized suggestions or trending content.</li>
                        <li>5. No Social Features: No group booking, sharing tools, or friend invites.</li>
                      </ol>
                    </td>
                  </tr>

                  {/* VUE Row */}
                  <tr>
                    <td className="border border-[#C50536] px-6 py-8 align-middle max-w-[280px] bg-[#DBF2FF]">
                      <div className="flex items-center justify-center">
                        <Image src="/projects/cinetrips/vue.png" alt="Vue" width={120} height={60} className="h-auto w-auto" />
                      </div>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Modern and Clean Design: Minimal, user‑friendly interface.</li>
                        <li>2. Fast Checkout: Apple Pay, Google Pay, and card support.</li>
                        <li>3. Reliable QR Tickets: Barcodes sent to email and stored in‑app.</li>
                        <li>4. Snappy Performance: Loads quickly and handles browsing efficiently.</li>
                        <li>5. Showtime Filters: Filter by date, format, and accessibility.</li>
                      </ol>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Vue‑Only Support: Works only for Vue; other chains need separate apps.</li>
                        <li>2. No Watchlist or Personalization features.</li>
                        <li>3. No User Ratings/Reviews available.</li>
                        <li>4. Limited Social Integration for sharing or planning.</li>
                        <li>5. Inconsistent Seating Maps across locations.</li>
                      </ol>
                    </td>
                  </tr>

                  {/* CINEWORLD Row */}
                  <tr>
                    <td className="border border-[#C50536] px-6 py-8 align-middle max-w-[280px] bg-[#FFB3B3]">
                      <div className="flex items-center justify-center">
                        <Image src="/projects/cinetrips/cineworld.png" alt="Cineworld" width={140} height={60} className="h-auto w-auto" />
                      </div>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Unlimited Membership Support: Supports Cineworld Unlimited cards for managing bookings.</li>
                        <li>2. Good Film Detail Pages: Includes synopsis, age rating, running time, and available formats.</li>
                        <li>3. Fast Ticket Access: Booked tickets stored in-app and sent via email.</li>
                        <li>4. Notifications: Alerts for member screenings and special events.</li>
                        <li>5. Generally Fast-Loading: Minimal lag, even during weekends.</li>
                      </ol>
                    </td>
                    <td className="border border-[#C50536] px-6 py-8 align-top bg-[#FFF4F7]">
                      <ol className="space-y-2 text-gray-900">
                        <li>1. Limited to Cineworld: Restricts user choice to one chain.</li>
                        <li>2. No Video Content: Trailers often require users to leave the app.</li>
                        <li>3. No Group Booking Tool: No way to invite friends or collaborative seat selection.</li>
                        <li>4. Clunky Design: Outdated UI and lack of polish in areas like seat maps.</li>
                        <li>5. Frequent Login Errors: Random logouts and account access issues after updates.</li>
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
      <section className="w-full max-w-[1513px] mx-auto py-20 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] bg-white">
        <div className="w-full mx-auto max-w-[1513px] ">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-bold mb-6">
              <span className="text-gray-900">User </span>
              <span className="text-[#D70A84]">Persona</span>
            </h2>
            <p className="text-gray-900 text-[24px] mx-auto leading-relaxed text-justify">
              Creating user personas was a crucial step in the development of the CineTrips app, as it helped shape a user-focused approach from the very beginning. By identifying and understanding the goals, behaviours, and pain points of typical users, I was able to make informed design decisions that prioritize real needs rather than assumptions. These personas allowed me to build empathy for different user types, ensuring the app's features and interface align with their expectations. Ultimately, this approach contributed to a more intuitive, enjoyable, and accessible cinema booking experience, increasing user satisfaction and the overall success of CineTrips.
            </p>
          </motion.div>

          {/* First User Persona */}
          <motion.div
            className="rounded-3xl p-6 md:p-8"
            style={{ backgroundColor: 'rgba(215, 10, 132, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Profile, Bio, Behaviour */}
              <div className="space-y-6">
                {/* Profile */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
                      <Image src="/projects/cinetrips/sarah.png" alt="Sarah Thompson" fill className="object-cover" />
                    </div>
                    <h3 className="text-[20px] font-bold text-gray-900">Sarah Thompson</h3>
                  </div>
                  <div className="mt-5 space-y-2 text-[20px] text-center md:text-left text-gray-700">
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Age</span><span className="text-[#151410]">32 Years</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Gender</span><span className="text-[#151410]">Female</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Occupation</span><span className="text-[#151410]">Digital Marketing Manager</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Location</span><span className="text-[#151410]">Manchester, UK</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Relationship</span><span className="text-[#151410]">In a relationship</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Tech Comfort</span><span className="text-[#151410]">High</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Favourite Genre</span><span className="text-[#151410]">Psychological thrillers, romance, comedies, Indie films</span></div>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">🔍</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Bio</h4>
                  </div>
                  <p className="text-[20px] text-gray-700 leading-relaxed w-full">
                    Sarah is a busy professional who loves winding down with a good film after a hectic workweek. She typically goes to the cinema 2–3 times a month, either with her partner or close friends. She values a smooth, no-hassle experience when booking tickets and likes to plan movie nights in advance.
                  </p>
                </div>

                {/* Behaviour */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">📈</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Behaviour</h4>
                  </div>
                  <ul className="text-[20px] text-gray-700 space-y-2 ">
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Regularly checks reviews and ratings before choosing a movie</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Books tickets at least 1–2 days in advance</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Shares upcoming films with friends via WhatsApp or Instagram</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Shops online frequently and expects high UX standards from every app she uses</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Often browses for films while commuting or during lunch breaks</span></li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Goals, Frustrations, Wants & Needs, Quote */}
              <div className="space-y-6">
                {/* Goals */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">🎯</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Goals</h4>
                  </div>
                  <div className="text-[20px] text-gray-700 space-y-2">
                    <p>•To easily discover new, high-rated films that align with her tastes</p>
                    <p>•To coordinate movie nights with her partner and friends without switching apps</p>
                    <p>•To earn perks or discounts for being a regular cinema-goer</p>
                    <p>•To support local/independent cinemas while still enjoying mainstream blockbusters</p>
                  </div>
                </div>

                {/* Frustrations */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">😤</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Frustrations</h4>
                  </div>
                  <div className="text-[20px] text-gray-700 space-y-2">
                    <p>• Having to use different apps for different cinemas</p>
                    <p>• Lack of detailed information like cast bios or behind-the-scenes trivia</p>
                    <p>• Difficulty finding screenings with accessibility features for her friend with hearing loss</p>
                    <p>• Hidden fees during checkout</p>
                  </div>
                </div>

                {/* Wants & Needs */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">💡</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Wants & Needs</h4>
                  </div>
                  <div className="text-[20px] text-gray-700 space-y-2">
                    <p>• A reliable app that works across cinema chains</p>
                    <p>• Accessibility features for her friend with hearing loss</p>
                    <p>• Personalised recommendations with tailored watchlists</p>
                    <p>• A clear breakdown of fees before checkout</p>
                    <p>• Transparent seat selection and the ability to invite friends</p>
                    <p>• Integration with loyalty/rewards programs or vouchers</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="mb-3">
                    <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.9035 0.000205994C32.3331 0.000205994 35.9297 3.59676 35.9297 8.06421C35.9297 12.2666 32.7115 15.6739 28.6229 16.0525C29.4558 17.5667 30.9701 19.1948 33.5446 20.7471C34.264 21.1636 34.7182 21.9207 34.7182 22.7158C34.7182 24.3436 33.0523 25.4795 31.5381 24.7982C27.1461 22.8291 19.8396 18.0214 19.8396 8.06441C19.8396 3.59689 23.4362 0.000409215 27.9036 0.000409215L27.9035 0.000205994Z" fill="#D70A84" />
                      <path d="M7.98873 0C12.4562 0 16.0527 3.59655 16.0527 8.064C16.0527 12.2664 12.8346 15.6737 8.74592 16.0523C9.57882 17.5665 11.0931 19.1946 13.6677 20.7469C14.3871 21.1634 14.8412 21.9205 14.8412 22.7156C14.8412 24.3434 13.1754 25.4793 11.6611 24.798C7.30747 22.8292 0.000513077 18.059 0.000513077 8.06421C-0.0375151 3.59642 3.55901 0 7.98873 0Z" fill="#D70A84" />
                    </svg>
                  </div>
                  <p className="text-[20px] text-gray-700 leading-relaxed">
                    "Stories help us make sense of the world, and cinema brings those stories to life in the most vivid way. Every time I watch a film, I'm reminded that connection, emotion, and perspective are just a screen away; sometimes that's exactly what we need to feel human again."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second User Persona - Daniel Akanji */}
          <motion.div
            className="rounded-3xl p-6 md:p-8 mt-8"
            style={{ backgroundColor: 'rgba(151, 71, 255, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Profile, Bio, Behaviour */}
              <div className="space-y-6">
                {/* Profile */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden mx-auto mb-4">
                      <Image src="/projects/cinetrips/daniel.png" alt="Daniel Akanji" fill className="object-cover" />
                    </div>
                    <h3 className="text-[20px] font-bold text-gray-900">Daniel Akanji</h3>
                  </div>
                  <div className="mt-5 space-y-2 text-[20px] text-left text-gray-700">
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Age</span><span className="text-[#151410]">25 Years</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Gender</span><span className="text-[#151410]">Male</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Occupation</span><span className="text-[#151410]">Graduate Student (Arts)</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Location</span><span className="text-[#151410]">Birmingham, UK</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Relationship</span><span className="text-[#151410]">Single</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px]">Tech Comfort</span><span className="text-[#151410]">Moderate to High</span></div>
                    <div className="flex flex-col md:flex-row items-center gap-4"><span className="text-gray-500 w-max md:min-w-[150px] inline-block">Favourite Genre</span><span className="text-[#151410]">Action, sci-fi, horror, superhero movies</span></div>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">🔍</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Bio</h4>
                  </div>
                  <p className="text-[20px] text-gray-700 leading-relaxed w-full">
                    Daniel is a passionate film lover who sees movies as both entertainment and a learning tool for his degree. He goes to the cinema at least once a week and often invites his course mates. He prefers late-night or weekend screenings and follows upcoming releases closely.
                  </p>
                </div>

                {/* Behaviour */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">📈</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Behaviour</h4>
                  </div>
                  <ul className="text-[20px] text-gray-700 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Books tickets impulsively, often on the same day</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Shares opinions on films via Twitter or Letterboxd</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Regularly watches trailers on YouTube before checking local showtimes</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Prefers digital over physical tickets</span></li>
                    <li className="flex items-start gap-2"><span className="text-black">•</span><span className="word-break-keep">Compares prices and seats before booking, even if it takes a few extra minutes</span></li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Goals, Frustrations, Wants & Needs, Quote */}
              <div className="space-y-6">
                {/* Goals */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">🎯</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Goals</h4>
                  </div>
                  <ul className="text-[20px] text-gray-700 space-y-2">
                    <li>•To discover and book screenings quickly, especially last-minute</li>
                    <li>•To access student deals or special discounts</li>
                    <li>•To build a personal movie-watching log</li>
                    <li>•To see what others think of a film before committing</li>
                  </ul>
                </div>

                {/* Frustrations */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">😤</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Frustrations</h4>
                  </div>
                  <ul className="text-[20px] text-gray-700 space-y-2">
                    <li>•Needing to download separate apps for Odeon, Vue, and Cineworld</li>
                    <li>•No unified way to compare showtimes and prices across different cinemas</li>
                    <li>•Not knowing which cinemas offer student discounts or loyalty points</li>
                    <li>•Losing track of booked films or rewatching the same trailers elsewhere</li>
                  </ul>
                </div>

                {/* Wants & Needs */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[18px]">💡</span>
                    <h4 className="text-[18px] font-bold text-gray-900">Wants & Needs</h4>
                  </div>
                  <ul className="text-[20px] text-gray-700 space-y-2">
                    <li>• An all-in-one cinema app for showtimes, trailers, and ticketing</li>
                    <li>• Quick, secure payment options and Apple/Google Pay integration</li>
                    <li>• A personal profile that keeps track of watched films</li>
                    <li>• User ratings and community reviews</li>
                    <li>• Notifications for midnight premieres or exclusive fan screenings</li>
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-white rounded-2xl p-6">
                  <div className="mb-3">
                    <svg width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.9035 0.000205994C32.3331 0.000205994 35.9297 3.59676 35.9297 8.06421C35.9297 12.2666 32.7115 15.6739 28.6229 16.0525C29.4558 17.5667 30.9701 19.1948 33.5446 20.7471C34.264 21.1636 34.7182 21.9207 34.7182 22.7158C34.7182 24.3436 33.0523 25.4795 31.5381 24.7982C27.1461 22.8291 19.8396 18.0214 19.8396 8.06441C19.8396 3.59689 23.4362 0.000409215 27.9036 0.000409215L27.9035 0.000205994Z" fill="#D70A84" />
                      <path d="M7.98873 0C12.4562 0 16.0527 3.59655 16.0527 8.064C16.0527 12.2664 12.8346 15.6737 8.74592 16.0523C9.57882 17.5665 11.0931 19.1946 13.6677 20.7469C14.3871 21.1634 14.8412 21.9205 14.8412 22.7156C14.8412 24.3434 13.1754 25.4793 11.6611 24.798C7.30747 22.8292 0.000513077 18.059 0.000513077 8.06421C-0.0375151 3.59642 3.55901 0 7.98873 0Z" fill="#D70A84" />
                    </svg>
                  </div>
                  <p className="text-[20px] text-gray-700 leading-relaxed">
                    "For me, the cinema isn't just a place to escape. It's a place to explore. Every film is a window into someone else's world. Whether it's an epic space battle or a quiet indie drama, I come out with a new way of thinking. That's the magic of movies. They entertain, but they also teach, challenge, and inspire."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empathy Mapping Section */}
      <section className="w-full py-20 max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto bg-white">
        <div className="">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold mb-6">
              <span className="text-gray-800">Empathy </span>
              <span className="text-[#D70A84]">Mapping</span>
            </h2>
          </motion.div>

          {/* Empathy Mapping Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Says Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Card */}
              <div className="hidden md:block absolute inset-0 rounded-2xl transform rotate-3 w-full max-w-[595px]" style={{ backgroundColor: '#09868D' }}></div>
              {/* Main Card */}
              <div className="w-full max-w-[595px] relative rounded-2xl p-8 transform md:-rotate-2" style={{ backgroundColor: '#77F8FF' }}>
                <h3 className="text-[24px] font-medium text-gray-900 mb-6">Says</h3>
                <ul className="space-y-3 text-[18px] text-gray-800">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I just want to find a film and book seats without the app slowing me down."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"If a booking app crashes while I'm paying, I probably won't try again."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I'd love an app that lets me split payment easily when going with friends."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"Trailers help me decide; why don't all apps have them?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I like knowing what's on at different cinemas, so I can compare before choosing."</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Thinks Card */}
            <motion.div
              className="relative md:bottom-30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Card */}
              <div className="hidden md:block absolute inset-0 rounded-2xl transform -rotate-3 w-full max-w-[595px]" style={{ backgroundColor: '#D70A84' }}></div>
              {/* Main Card */}
              <div className="relative rounded-2xl p-8 transform md:rotate-2 w-full max-w-[595px]" style={{ backgroundColor: '#FFE5F2' }}>
                <h3 className="text-[24px] font-medium text-gray-900 mb-6">Thinks</h3>
                <ul className="space-y-3 text-[18px] text-gray-800">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I hope this app will remember my preferences and payment details."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"It would be great to have trailers, reviews, and seat maps all in one place."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I don't want to waste time switching between cinema websites."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"I need an affordable way to book without hidden fees."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>"Booking with friends should be easier; we always end up texting seat numbers."</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Does Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Background Card */}
              <div className="hidden md:block absolute inset-0 rounded-2xl transform md:-rotate-3 w-full max-w-[595px]" style={{ backgroundColor: '#777307' }}></div>
              {/* Main Card */}
              <div className="relative rounded-2xl p-8 transform md:-rotate-2 w-full max-w-[595px]" style={{ backgroundColor: '#FFFB8E' }}>
                <h3 className="text-[24px] font-medium text-gray-900 mb-6">Does</h3>
                <ul className="space-y-3 text-[18px] text-gray-800">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Checks multiple apps or websites to compare movie listings, times, and prices.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Shares booking links with friends before confirming.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Watches trailers before booking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Uses student discounts or promo codes when possible.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Often books last-minute, sometimes while travelling to the cinema.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Relies on mobile apps daily for entertainment, shopping, and travel.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Feels Card */}
            <motion.div
              className="relative md:bottom-30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Background Card */}
              <div className="hidden md:block absolute inset-0 rounded-2xl transform -rotate-3 w-full max-w-[595px]" style={{ backgroundColor: '#083B6D' }}></div>
              {/* Main Card */}
              <div className="relative rounded-2xl p-8 transform md:rotate-2 w-full max-w-[595px]" style={{ backgroundColor: '#BCDBFA' }}>
                <h3 className="text-[24px] font-medium text-gray-900 mb-6">Feels</h3>
                <ul className="space-y-3 text-[18px] text-gray-800">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Frustrated when apps lag, crash, or have unclear seat layouts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Excited when discovering new films or limited screenings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Relieved when bookings are confirmed quickly without errors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Happy when securing good deals or discounts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-3 mt-1">•</span>
                    <span>Anxious when unsure if a booking has gone through successfully.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 max-w-[1513px] px-[20px] md:px-[40px] lg:px-[60px] mx-auto" style={{ backgroundColor: '#FBE6F3' }}>
        <div className="">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold mb-6" style={{ color: '#D70A84' }}>
              Pain Points
            </h2>
          </motion.div>

          {/* Pain Points Layout with Central Phone */}
          <motion.div
            className="relative flex flex-col lg:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">

              {/* Top Left */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 1</h3>
                  <p className="text-justify text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    Confusing booking flow. Many users find it difficult to navigate from movie selection to final payment without making mistakes or having to backtrack. The process feels cluttered, with unclear steps and too many options presented at once.
                  </p>
                </div>
              </motion.div>
              {/* Middle Left */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 2</h3>
                  <p className="text-justify text-center lg:text-left text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    Lack of personalized recommendations. Users feel overwhelmed by the number of movies listed without any tailored suggestions. They have to manually browse through multiple titles, which can be time-consuming and discouraging, especially when they are undecided.
                  </p>
                </div>
              </motion.div>
              {/* Bottom Left */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 3</h3>
                  <p className="text-justify text-center lg:text-left text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    Difficulty finding last-minute tickets. People who decide to watch a film spontaneously often face trouble finding available seats quickly. Current competitor apps make them scroll through multiple showtimes and locations instead of presenting instant last-minute availability.
                  </p>
                </div>
              </motion.div>



            </div>
            {/* Central Pain Points Image */}
            <div className="relative z-10 -left-10">
              <motion.div
                className="w-[320px] xl:w-[595px] h-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/cinetrips/pain.png"
                  alt="Pain Points Illustration"
                  width={320}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Pain Points positioned around the phone */}


            <div className="flex flex-col items-center justify-center">
              {/* Top Right */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 4</h3>
                  <p className="text-justify text-center lg:text-left text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    No easy way to share bookings with friends. Group movie-going is common, but users struggle to share their bookings or seat selections in a way that makes coordinating with friends seamless. Sending screenshots or manually typing details feels outdated and inefficient.
                  </p>
                </div>
              </motion.div>
              {/* Middle Right */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 5</h3>
                  <p className="text-justify text-center lg:text-left text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    Limited showtime flexibility. Some users want to plan movie trips around busy schedules, but rigid filtering makes it hard to search for specific time windows (e.g., 'only after 8pm' or 'morning shows only'). They end up browsing irrelevant showtimes.
                  </p>
                </div>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                className="w-full max-w-[400px]"
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-center lg:text-left text-[32px] xl:text-[40px] font-semibold text-[#D70A84] mb-4">Pain point 6</h3>
                  <p className="text-justify text-center lg:text-left text-gray-700 leading-relaxed text-[18px] xl:text-[23px] ">
                    Inconsistent pricing information. Ticket prices often appear without fees or surge pricing included, which leads to unpleasant surprises during checkout. This lack of transparency erodes trust and can make users abandon their booking altogether.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Task Mapping Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-bold mb-6">
              <span className="text-[#D70A84]">Task </span>
              <span className="text-[#D70A84]">Mapping</span>
            </h2>
          </motion.div>

          {/* Task Mapping Table */}
          <motion.div
            className="bg-white overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-white">
                    <th className="px-6 py-4 text-left text-[18px] font-bold text-gray-900 w-1/4 border-r border-gray-300">User Task</th>
                    <th className="px-6 py-4 text-left text-[18px] font-bold text-gray-900 w-1/4 border-r border-gray-300">User Goal</th>
                    <th className="px-6 py-4 text-left text-[18px] font-bold text-gray-900 w-1/4 border-r border-gray-300">Key Steps</th>
                    <th className="px-6 py-4 text-left text-[18px] font-bold text-gray-900 w-1/4">Potential Pain Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Search for a movie</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Find a movie to watch</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Open app → Browse or search movies → View details (trailers, ratings, synopsis)</td>
                    <td className="px-6 py-4 text-gray-700">Overwhelming options, lack of personalized suggestions</td>
                  </tr>
                  <tr className="bg-[#FFF4F7]">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Select Showtime</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Choose a convenient screening time</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Select movie → View showtimes → Filter by date/time/location → Pick suitable slot</td>
                    <td className="px-6 py-4 text-gray-700">Limited filters, difficulty finding last-minute showtimes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Choose Seats</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Pick preferred seats easily</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">View seat map → Select available seats → Confirm seat choice</td>
                    <td className="px-6 py-4 text-gray-700">Confusing seat layout, unclear availability</td>
                  </tr>
                  <tr className="bg-[#FFF4F7]">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Book Tickets</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Complete purchase securely and quickly</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Enter payment details → Review order → Confirm payment</td>
                    <td className="px-6 py-4 text-gray-700">Complex flow, hidden fees, payment failures</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Invite friends / share</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Coordinate movie plans with others</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Share booking link/details via messaging or social media</td>
                    <td className="px-6 py-4 text-gray-700">No built-in sharing options, manual coordination needed</td>
                  </tr>
                  <tr className="bg-[#FFF4F7]">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Manage Bookings</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">View or modify existing tickets</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Access booking history → Cancel or reschedule if needed</td>
                    <td className="px-6 py-4 text-gray-700">Difficult navigation, lack of clear options</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Discover New Movies</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Get personalized recommendations and updates</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Receive suggestions based on history → Browse curated lists → View trailers</td>
                    <td className="px-6 py-4 text-gray-700">Generic lists, no personalized content</td>
                  </tr>
                  <tr className="bg-[#FFF4F7]">
                    <td className="px-6 py-4 text-gray-900 font-medium border-r border-gray-300">Redeem Loyalty Rewards</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Use points or vouchers to save money</td>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-300">Access rewards → Apply discount codes at checkout</td>
                    <td className="px-6 py-4 text-gray-700">Poor integration, unclear redemption process</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High Fidelity Wireframes Section */}
      <section className="py-20 w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] mx-auto" style={{ backgroundColor: '#FFF4F7' }}>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full text-center absolute top-0 left-0"
          >
            <h2 className="w-max mx-auto text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight">
              <span className="text-gray-900 block">High Fidelity </span>
              <span className="text-[#D70A84] block">Wireframes</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative top-15"
          >
            <div className="flex justify-center">
              <Image
                src="/projects/cinetrips/wireframes.png"
                alt="High Fidelity Wireframes"
                width={1200}
                height={800}
                className="w-full max-w-6xl h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Style Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight text-[#D70A84] mb-8">
              Visual Style Used
            </h2>

            <div className="flex items-center mb-8">
              <div className="w-3 h-3 bg-[#D70A84] rounded-full mr-3"></div>
              <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-gray-900">
                Font Used
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Font Example and Character Set */}
            <div>
              <div className="border-2 border-dashed border-[#D70A84] p-6 mb-6">
                <h4 className="text-[#D70A84] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold">
                  Helvetica Neue
                </h4>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-900 break-all text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-medium mb-2">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </p>
                  <p className="break-all text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                    abcdefghijklmnopqrstuvwxyz
                  </p>
                  <p className="break-all text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                    1234567890
                  </p>
                </div>
              </div>
            </div>

            {/* Font Description */}
            <div>
              <p className="text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-relaxed">
                Helvetica Neue is a refined, modern sans-serif typeface designed by Max Miedinger and Eduard Hoffmann, released in 1983 as an update to the classic Helvetica. It offers improved spacing, a more consistent stroke weight, and a wider range of weights and styles, making it highly adaptable for print and digital use. Known for its clean, minimalist aesthetic and excellent legibility, Helvetica Neue remains a favorite choice in branding, editorial design, and user interfaces worldwide.
              </p>
            </div>
          </motion.div>

          {/* Font Weights and Styles Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-[#FFF4F7] rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-900 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-black">
                    Helvetica Neue Black
                  </p>
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal">
                    Helvetica Neue Regular
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-900 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-bold">
                    Helvetica Neue Bold
                  </p>
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal italic">
                    Helvetica Neue Regular Italic
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-900 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] font-medium">
                    Helvetica Neue Medium
                  </p>
                  <p className="text-gray-900 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium italic">
                    Helvetica Neue Medium Italic
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF4F7' }}>
        <div className="max-w-[1190px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <h2 className="text-[34px] font-medium text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D70A84' }}></div>
              <span className="text-gray-900">Colours Used</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 mb-8"
          >
            {/* Primary Colour */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#19002D" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Primary Colour</h3>
              <p className="text-[14px] text-gray-600">#19002D</p>
            </div>

            {/* Secondary Colour */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#D70A84" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Secondary Colour</h3>
              <p className="text-[14px] text-gray-600">#D70A84</p>
            </div>

            {/* In App Colour 1 */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#2A004C" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">In App Colour</h3>
              <p className="text-[14px] text-gray-600">#2A004C</p>
            </div>

            {/* In App Colour 2 */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#52336C" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">In App Colour</h3>
              <p className="text-[14px] text-gray-600">#52336C</p>
            </div>

            {/* Success Colour */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#0DBF0D" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Success Colour</h3>
              <p className="text-[14px] text-gray-600">#0DBF0D</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8"
          >
            {/* Text Color 1 */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Text Color</h3>
              <p className="text-[14px] text-gray-600">#FFFFFF</p>
            </div>

            {/* Text Color 2 */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#D2D2D2" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Text Color</h3>
              <p className="text-[14px] text-gray-600">#D2D2D2</p>
            </div>

            {/* Error Colour */}
            <div className="text-left">
              <div className="w-20 h-20 mb-4">
                <svg width="80" height="80" viewBox="0 0 165 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z" fill="#C50536" />
                </svg>
              </div>
              <h3 className="text-[16px] font-bold text-gray-800 mb-1">Error Colour</h3>
              <p className="text-[14px] text-gray-600">#C50536</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo & Icons Section */}
      <section className="py-20" style={{ backgroundColor: 'rgba(42, 0, 76, 0.05)' }}>
        <div className="max-w-[1190px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <h2 className="text-[24px] lg:text-[34px] font-medium text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D70A84' }}></div>
              <span className="text-gray-900">Logo & Icons</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16 w-full max-w-[200px] md:max-w-[400px] mx-auto"
          >
            <Image
              src="/projects/cinetrips/logo.png"
              alt="CineTrips Logo"
              width={400}
              height={120}
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src="/projects/cinetrips/icons.png"
              alt="CineTrips Icons"
              width={1200}
              height={400}
              className="object-contain w-full"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Visual Design Section */}
      <section className="py-20 max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto bg-white">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-purple-900">Visual</span> <span className="text-pink-500">Design</span>
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Visual Design Images */}
            {/* <div className="mx-auto w-[600px]"> */}
            <Image
              src="/projects/cinetrips/vd-1.png"
              alt="Visual Design - Design System"
              width={600}
              height={400}
              className="w-full mx-auto"
            />

            {/* </div> */}
            <Image
              src="/projects/cinetrips/vd-2.png"
              alt="Visual Design - UI Components"
              width={600}
              height={400}
              className="w-full mx-auto"
            />
          </motion.div>
        </div>
      </section>


      {/* High Fidelity Prototype Section */}
      <section className="w-full max-w-[1513px] mx-auto px-[20px] sm:px-[40px] lg:px-[80px]">
        <div className="max-w-[1513px] mx-auto bg-[#F6EBFF] py-20 px-[20px] sm:px-[40px] lg:px-[80px]">
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
                src="/projects/cinetrips/hifi.png"
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
          <div className="text-center mb-[24px]">
            <h3 className="font-bold text-[34px] lg:text-[44px] leading-[54px]">
              <span className="text-black">High Fidelity </span>
              <span className="text-[#C50536]">Prototype Link</span>
            </h3>
          </div>
          <div className="mx-auto max-w-[1200px] text-center">
            <a
              href="https://www.figma.com/proto/fiKhICMUKFiFDW0ENfgyru/CineTrips?page-id=133%3A195&node-id=133-2451&viewport=-6168%2C392%2C0.46&t=BP4ZstAgdWwAlFW6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=133%3A2451&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0067A2] underline break-words break-all text-[20px] lg:text-[28px] leading-[150%]"
            >
              https://www.figma.com/proto/fiKhICMUKFiFDW0ENfgyru/CineTrips?page-id=133%3A195&node-id=133-2451&viewport=-6168%2C392%2C0.46&t=BP4ZstAgdWwAlFW6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=133%3A2451&show-proto-sidebar=1
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
              <span className="text-[#D70A84]">& Next Steps</span>
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
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default CineTripsPage;

