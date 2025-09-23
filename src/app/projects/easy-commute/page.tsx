'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import BackToTopButton from '@/components/BackToTopButton';

const EasyCommutePage = () => {
  return (
    <div className="min-h-screen pt-[120px] md:pt-[150px] bg-gray-900 text-white overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="projects" />

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Easy Commute Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Upper section with main text */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-6xl"
            >
              <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-bold text-white leading-tight">
                Free access to live train times and railway station information
              </h1>
            </motion.div>
          </div>

          {/* Footer section with project details */}
          <div className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#03045E' }}>
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
                  <p className="text-white/90 text-lg font-light">Easy Commute</p>
                </motion.div>

                {/* Industry */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/90 text-lg font-light">Transportation</p>
                </motion.div>

                {/* Platform */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/90 text-lg font-light">iOS & Android</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Overview
            </h2>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
              Easy Commute is a digital rail technology platform that sells train tickets and rail cards and provides free
              access to live train times and railway station information through a digital mobile app. You can view the
              prototype here. Based on field interviews and usability testing, Easy Commute allows the booking of tickets to
              be easy and uncomplicated, as well as making it easy for users to see and track their journeys and train times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introducing Easy Commute Mobile App Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black mb-[60px] text-center">
              Introducing Easy Commute <span style={{ color: '#080AAE' }}>Mobile App</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">What is Easy Commute?</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed max-w-[600px]" style={{ color: '#212121' }}>
                    Easy Commute is a digital rail technology platform that sells train tickets and rail cards and provides free access to live train times and railway station information through a digital mobile app.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">Timeline</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px]" style={{ color: '#212121' }}>12 Weeks</p>
                </div>
                
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">Client</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px]" style={{ color: '#212121' }}>Easy Commute</p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">My Role</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed max-w-[600px]" style={{ color: '#212121' }}>
                    My role during this project was as a Lead UX Designer and UX Researcher. I was involved with each stage of the process, which included initial user research, sketching and wireframing, prototyping, usability testing and presenting final designs and findings to clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">Tools</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px]" style={{ color: '#212121' }}>Figma, Pen and Paper Sketch, Google Docs, Miro</p>
                </div>
                
                <div>
                  <h3 className="text-[32px] font-bold text-black mb-4">Skills</h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[24px]" style={{ color: '#212121' }}>
                    Experimentation, A/B testing, Qualitative research, User interviews, Usability testing, UX design, UI design
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Defining the Problem Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Defining the <span style={{ color: '#080AAE' }}>Problem</span>
            </h2>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
              "Who are we designing for and what challenges are they facing currently with accessing and booking the train?" I kept asking myself these questions as I tried to define the problem space and who to design for. I first narrowed my user group to Nigerians between the ages of 16 - 64, as this age range has the highest internet adoption rate (source).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Problem <span style={{ color: '#080AAE' }}>Statement</span>
            </h2>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
              Booking and managing train trips in Nigeria can be difficult due to a fragmented and confusing transportation system. There is a need for a personalised mobile app product that integrates multiple train operators' ticketing systems, offers real-time information on train schedules and delays, and facilitates seamless booking and payment processes. This app will ultimately improve the travel experience of train users in Nigeria by increasing efficiency, reducing the risk of missed trips, and decreasing additional costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Outcome Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Final <span style={{ color: '#080AAE' }}>Outcome</span>
            </h2>
            <p className="text-[18px] md:text-[20px] lg:text-[24px] mb-8 text-left" style={{ color: '#212121' }}>
              These were the final results of what we decided as the metrics and KPIs for the Easy Commute Mobile App.
            </p>
            
            {/* Main Outcome Card */}
            <div className="flex justify-center">
              <Image
                src="/projects/easy-commute/final-outcome.png"
                alt="Final Outcome Metrics"
                width={1200}
                height={400}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desk Research Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Conducting <span style={{ color: '#080AAE' }}>Desk Research</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
                I did some problem exploration by exploring the Desk Research method to understand the existing pain points of the train users and how competitors and users behave.
              </p>
              
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
                To further buttress and solidify the response gotten from this desk research, I did deeper research and got a paper published around the 'Challenges of Rail Transportation in South West Nigeria by Centre for Logistics and Transport Studies (CELTRAS), Faculty of Social Sciences, School of Graduate Studies, University of Port Harcourt, Nigeria which is available <a href="https://uijrt.com/articles/v3/i6/UIJRTV3I60011.pdf" className="text-[#080AAE] underline hover:no-underline" target="_blank" rel="noopener noreferrer">HERE</a>.
              </p>
            </div>

            {/* Desk Research Images */}
            <div className="mt-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/desk-research-1.png"
                    alt="Desk Research Documentation 1"
                    width={1440}
                    height={800}
                    className="w-full h-auto"
                  />
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/desk-research-2.png"
                    alt="Desk Research Documentation 2"
                    width={1440}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
                </div>
              </motion.div>
        </div>
      </section>

      {/* Affinity Mapping Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Affinity <span style={{ color: '#080AAE' }}>Mapping</span>
            </h2>
            
            <div className="mb-12">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                In this process phase, I created an interview guide for each of the guided interviews. I approached the data collection with fixed, non-leading questions to maintain consistency across the discussions and gain relevant insights. The goal for the interview was to indiscriminately gather personal opinions on each individual's experience with train booking and gather their pain points and challenges.
              </p>
            </div>

            {/* Affinity Mapping Images */}
            <div className="mt-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/affinity-1.png"
                    alt="Affinity Mapping Documentation 1"
                    width={1440}
                    height={716}
                    className="w-full h-auto max-h-[716px] object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/affinity-2.png"
                    alt="Affinity Mapping Documentation 2"
                    width={1440}
                    height={716}
                    className="w-full h-auto max-h-[716px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Prioritization Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Feature <span style={{ color: '#080AAE' }}>Prioritisation</span>
            </h2>
            
            <div className="mb-12">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                For Easy Commute Mobile app, I ranked and organized features based on customer value, business goals, the amount of time and cost, and technical viability.
              </p>
            </div>

            {/* Feature Prioritization Image */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/feature-prioritization.png"
                  alt="Feature Prioritization Documentation"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Constraints Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Constraints
            </h2>
            
            <div className="mb-12">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                For this project, I detailed the constraints I encountered while brainstorming and ideating for Easy Commute MVP design.
              </p>
            </div>

            {/* Constraints Image */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/constraints.png"
                  alt="Constraints Documentation"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              The <span style={{ color: '#080AAE' }}>Solution</span>
            </h2>
            
            <div className="mb-12">
                <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                For this project, I detailed the constraints I encountered while brainstorming and ideating for Easy Commute MVP design.
              </p>
            </div>

            {/* Solution Images */}
            <div className="mt-12">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/solution-1.png"
                    alt="Solution Documentation 1"
                    width={1440}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/solution-2.png"
                    alt="Solution Documentation 2"
                    width={1440}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/projects/easy-commute/solution-3.png"
                    alt="Solution Documentation 3"
                    width={1440}
                    height={800}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>

            {/* Solution Description */}
            <div className="mt-12 -mx-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="px-20"
              >
                <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                  My solution is a digital ticket booking product that helps users interested in traveling to order and buy tickets from the comfort of their homes. The users can search for daily train movements based on timings and locations, verify their ID cards within minutes of upload, top up their rail cards, and pay for tickets with their debit card, PayPal, or their Apple or Google Pay wallet within seconds.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Taskflow Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Core <span style={{ color: '#080AAE' }}>Taskflow</span>
            </h2>
            
            <div className="mb-12">
                <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                The core flow of the application was to provide people with an easy means to book a train at their convenience. I decided to go with a simplified process and task flow for efficiency. For this project, I had the constraint of exploring only one task flow, and the MVP will allow people to book a train.
              </p>
            </div>

            {/* Taskflow Image */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/taskflow.png"
                  alt="Core Taskflow Documentation"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Style Guide and Colors Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Style Guide and <span style={{ color: '#080AAE' }}>Colours</span>
            </h2>
            
            <div className="mb-12">
                <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                For this project, I created a document that addresses logo usage, font usage, and color usage to ensure complete uniformity in style and formatting wherever the brand is used.
              </p>
            </div>

            {/* Style Guide Image */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/style-guide.png"
                  alt="Style Guide and Colors Documentation"
                  width={1440}
                  height={867}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Icons and Illustrations Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Icons and <span style={{ color: '#080AAE' }}>Illustrations</span>
            </h2>
            
            <div className="mb-12">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                Icons relevant to Easy Commute were carefully sourced from Untitled Icons libraries, and Illustrations used across the entire product were sourced <a href="#" className="text-[#080AAE] underline hover:no-underline">HERE</a>.
              </p>
            </div>

            {/* Icons Image */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/icons.png"
                  alt="Icons and Illustrations Documentation"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>

            {/* Color Rationale */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[32px] font-bold mb-6" style={{ color: '#212121' }}>
                  The idea for the primary colour Blue (03045E) was borne out of four thoughts:
                </h3>
                
                <div className="space-y-6">
              <div>
                    <h4 className="text-[24px] font-bold mb-2" style={{ color: '#212121' }}>
                      1. Trust
                    </h4>
                    <p className="text-[20px] leading-relaxed" style={{ color: '#212121' }}>
                      Blue is associated with trust, dependability, and reliability, which helps establish a sense of trust between the user and the app.
                    </p>
                </div>
                  
                  <div>
                    <h4 className="text-[24px] font-bold mb-2" style={{ color: '#212121' }}>
                      2. Calmness
                    </h4>
                    <p className="text-[20px] leading-relaxed" style={{ color: '#212121' }}>
                      Blue is associated with calmness, serenity, and relaxation, which can help create a calming effect and reduce anxiety during the potentially stressful experience of booking a train.
                    </p>
              </div>
              
              <div>
                    <h4 className="text-[24px] font-bold mb-2" style={{ color: '#212121' }}>
                      3. Gender-neutral
                    </h4>
                    <p className="text-[20px] leading-relaxed" style={{ color: '#212121' }}>
                      Blue is generally considered gender-neutral, which is important for an app expected to have users of all genders.
                    </p>
              </div>
              
              <div>
                    <h4 className="text-[24px] font-bold mb-2" style={{ color: '#212121' }}>
                      4. Association with travel
                    </h4>
                    <p className="text-[20px] leading-relaxed" style={{ color: '#212121' }}>
                      Blue is commonly associated with travel, helping to create a connection in the user's mind between the app and travel more broadly.
                    </p>
                  </div>
                </div>
              </motion.div>
              </div>
              
            {/* Logo Section */}
            <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-10"
              >
                <div className="w-full max-w-[200px]">
                  <h4 className="text-[24px] font-semibold" style={{ color: '#212121' }}>Logo</h4>
                </div>
                <div className="flex-1">
                  <Image
                    src="/projects/easy-commute/logo.png"
                    alt="Easy Commute Logo"
                    width={1440}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[60px]">
              Typography
            </h2>

            {/* Typography Image */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/typo.png"
                  alt="Typography"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Wireframes - <span style={{ color: '#080AAE' }}>Paper Sketches</span>
            </h2>
            <div className="mb-[40px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                I sketched some ideas to understand the problem and flesh out my initial thoughts of the necessary screens needed for Easy Commute.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/sketch-1.png"
                  alt="Paper Sketch 1"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/sketch-2.png"
                  alt="Paper Sketch 2"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Onboarding Screens
            </h2>
            <div className="mb-[40px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                These are the first things the users see when launching your application. The goal here is to demonstrate some facts about the application, such as how to use it, its features, and how it can help the users.
              </p>
            </div>

            {/* Onboarding Image */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/onboarding.png"
                  alt="Onboarding Screens"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book a Train Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Book a Train
            </h2>
            <div className="mb-[40px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                These screens show the user how to search for trains, check time availability and price, verify documents for a first-time user and an option to choose a payment method for the ticket purchase.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/book-1.png"
                  alt="Book a Train - Flow Part 1"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/book-2.png"
                  alt="Book a Train - Flow Part 2"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Method Section */}
      <section className="py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Payment <span style={{ color: '#080AAE' }}>Method</span>
            </h2>
            <div className="mb-[40px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                As a solution to one of the problems identified during desk research and user interviews, and to ensure accessibility for all, I factored in different payment methods so that everyone, irrespective of their persona, would be able to pay for their train ticket in not more than 2–3 clicks. This accommodates the cash-only payment issues identified during research.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/payment-1.png"
                  alt="Payment Methods - Part 1"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/payment-2.png"
                  alt="Payment Methods - Part 2"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
              </div>
      </section>

      {/* Verify Documents Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Verify <span style={{ color: '#080AAE' }}>Documents</span>
            </h2>
            <div className="mb-[40px]">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-left" style={{ color: '#212121' }}>
                One of the major problems highlighted during the research phase was that users were streamlined to just a limited number of types of ID cards to verify their details. As a solution, I added a feature to the product that allows everyone to verify their documents with different ID cards.
              </p>
            </div>
            
            {/* Verify Image */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/verify.png"
                  alt="Verify Documents"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            className="px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Product KPIs and <span style={{ color: '#080AAE' }}>Success Metrics</span>
            </h2>

            {/* KPIs Image */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/easy-commute/kpi.png"
                  alt="Product KPIs and Success Metrics"
                  width={1440}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
              </div>
      </section>

      {/* Validation Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Validation
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
                Easy Commute app should not become just a one-time delivery. It should be iterated by considering usability tests, A/B tests, and other in-depth surveys with the user to improve the initial version. That said, launching this functionality is only the first step toward the product’s success.
              </p>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
                In this way, analysing metrics such as daily and monthly active users, bounce rate, churn rate, and retention rate, would be important for understanding success and elaborating the product roadmap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Takeaway Section */}
      <section className="py-20" style={{ backgroundColor: '#F6F6FF' }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-black text-center mb-[30px]">
              Major Takeaway from the <span style={{ color: '#080AAE' }}>Project</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}>
                This project was exciting and interesting. It allowed me to learn a new prototyping tool, Protopie, become more versed in using interactive components, and involve tons of desk and market research.
              </p>
              <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed" style={{ color: '#212121' }}> 
                The next step will be to conduct more robust user testing on the prototype I currently have to improve the user flow. I would also love to explore more User Epics for the application, such as precise booking dates and times, phone notifications for discount prices, and opportunities for ticket refunds.
              </p>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default EasyCommutePage;