"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const RositaCuisinePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={true} currentPage="portfolio" />

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Rosita Cuisine Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Upper section with main text */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl"
            >
              <h1 className="text-[42px] md:text-[54px] font-bold text-white leading-tight">
                An Easier way to deliver African Meals to everyone across Africa
              </h1>
            </motion.div>
          </div>

          {/* Info bar */}
          <div className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FA4B0C" }}>
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
                  <h3 className="text-white text-[22px] md:text-[24px] font-bold mb-2">Client</h3>
                  <p className="text-white/95 text-[18px]">Rosita Cuisine</p>
                </motion.div>

                {/* Industry */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[22px] md:text-[24px] font-bold mb-2">Industry</h3>
                  <p className="text-white/95 text-[18px]">Hospitality</p>
                </motion.div>

                {/* Platform */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[22px] md:text-[24px] font-bold mb-2">Platform</h3>
                  <p className="text-white/95 text-[18px]">iOS & Android</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-white text-center mb-[40px]">
              Overview
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left">
              Rosita African Cuisine aims to enable its customers to place food orders from the restaurant’s
              menu and request home delivery through their cellphones. In this case study you can follow
              along on my journey to use technology to place food orders from a restaurant and request
              home delivery while battling COVID-19.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introducing Rosita Cuisine App Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[44px] font-semibold text-white mb-[60px] text-center">
              Introducing Rosita <span style={{ color: "#0EDAC6" }}>Mobile App</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white/90">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-[28px] md:text-[30px] font-extrabold text-white mb-4">
                    What is Rosita African Cuisine?
                  </h3>
                  <p className="text-[20px] leading-relaxed" style={{ color: "#C9D1D9" }}>
                    Rosita African Cuisine is a chain of restaurants with the vision of delivering the
                    best African dishes to everyone across Africa. The mobile app is a mobile solution
                    that enables its customers to place food orders from the restaurant’s menu and
                    request home delivery.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[24px] font-bold text-white mb-2">Timeline</h4>
                  <p className="text-[20px]" style={{ color: "#C9D1D9" }}>8 Weeks</p>
                </div>
                
                <div>
                  <h4 className="text-[24px] font-bold text-white mb-2">Client</h4>
                  <p className="text-[20px]" style={{ color: "#C9D1D9" }}>Rosita Cuisine</p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div>
                  <h3 className="text-[28px] md:text-[30px] font-extrabold text-white mb-4">My Role</h3>
                  <p className="text-[20px] leading-relaxed" style={{ color: "#C9D1D9" }}>
                    Lead the prototyping, conducted design sprints, led usability testing, designed
                    low‑fi and mid‑fi applications, led high‑fidelity design and visual direction.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[24px] font-bold text-white mb-2">Tools</h4>
                  <p className="text-[20px]" style={{ color: "#C9D1D9" }}>
                    Figma, Pen and Paper Sketch, Google Docs, Miro
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[24px] font-bold text-white mb-2">Skills</h4>
                  <p className="text-[20px]" style={{ color: "#C9D1D9" }}>
                    Experimentation, A/B testing, Qualitative research, User interviews, Usability testing,
                    UX design, UI design
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-6">
              The <span style={{ color: "#0EDAC6" }}>Challenge</span>
            </h2>
            <p className="text-[20px] leading-relaxed text-white/90 text-center max-w-4xl mx-auto">
              The actual focus of this project was to design a reservation app for Rosita African Cuisine’s
              customers to order their meals and food promptly and get delivered as fast as possible.
            </p>
          </motion.div>

          {/* Metric Cards */}
          <div className="space-y-8">
            {/* Market Size */}
            <div className="rounded-xl max-w-[658px] mx-auto" style={{ backgroundColor: "#234078" }}>
              <div className="px-8 py-10 text-center">
                <p className="text-white/70 text-sm mb-3">Market Size</p>
                <p className="text-white font-extrabold text-2xl md:text-3xl">US $834.7 Million</p>
              </div>
            </div>

            {/* Total Population */}
            <div className="rounded-xl bg-white max-w-[658px] mx-auto">
              <div className="px-8 py-10 text-center">
                <p className="text-[#234078]/80 text-sm mb-3">Total Population</p>
                <p className="text-[#234078] font-extrabold text-2xl md:text-3xl">200 Million</p>
              </div>
            </div>

            {/* Growth Rate */}
            <div className="rounded-xl bg-white max-w-[658px] mx-auto">
              <div className="px-8 py-10 text-center">
                <p className="text-[#234078]/80 text-sm mb-3">Growth Rate</p>
                <p className="text-[#234078] font-extrabold text-2xl md:text-3xl">12.2%</p>
              </div>
            </div>

            {/* Key Region */}
            <div className="rounded-xl max-w-[658px] mx-auto" style={{ backgroundColor: "#234078" }}>
              <div className="px-8 py-10 text-center">
                <p className="text-white/70 text-sm mb-3">Key Region</p>
                <p className="text-white font-extrabold text-2xl md:text-3xl">North West</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defining the Problem Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Defining the <span style={{ color: "#0EDAC6" }}>Problem</span>
            </h2>
            <p className="text-[20px] leading-relaxed text-white/90 text-left">
              Defining the problem “Who am I designing for, and what challenges are they facing currently with placing orders, ordering food, and delivery?”. I kept asking myself these questions as I tried to define the problem space and who to design for. I first narrowed my user group to Nigerians between the ages of 16 – 64, as this age range has the highest internet adoption rate (<a href="#" className="underline" style={{ color: "#0EDAC6" }}>source</a>).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-14" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-[28px] md:text-[32px] font-extrabold text-white mb-6">Opportunity</h3>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-white/80 max-w-5xl mx-auto">
              With a population of over 200 million people, Rosita African Cuisine aims to increase customer satisfaction by providing a convenient and efficient ordering experience while expanding the delivery reach and reducing operational costs for the restaurant, ultimately leading to increased revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hypothesis Statement Card */}
      <section className="py-10" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl" style={{ backgroundColor: "#172B4D" }}>
              <div className="px-8 md:px-12 py-12 md:py-14 text-center">
                <h4 className="text-[26px] md:text-[30px] font-extrabold text-white mb-6">
                  Hypothesis <span style={{ color: "#0EDAC6" }}>Statement</span>
                </h4>
                <p className="text-white/90 text-[18px] md:text-[20px] leading-relaxed max-w-4xl mx-auto">
                  John is a Busy Executive who needs an easy way to get food (preferably lunch) during work hours because his kind work does not allow leave his workspace for a long time to get food.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desk Research Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-6">
              Conducting <span style={{ color: "#0EDAC6" }}>Desk Research</span>
            </h2>
            <p className="text-[20px] leading-relaxed text-white/90 text-center max-w-5xl mx-auto mb-10">
              For this project, I conducted secondary research to collect data from existing resources,
              reports and documents available in public libraries and websites on the state of food delivery
              in the country.
            </p>

            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/desk-research.png"
                  alt="Rosita Cuisine Desk Research"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Research Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              User <span style={{ color: "#0EDAC6" }}>Research</span>
            </h2>

            <div className="space-y-6 text-white/90 text-[20px] leading-relaxed">
              <p>
                From here, I started interviews with our customers. Watching them interact with me gave me
                physical cues that could affect the research outcomes. To help capture observations, I took
                detailed notes and even recorded some sessions with users.
              </p>
              <p>
                For the purposes of the interview, I took into consideration some selected demographics,
                which included:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Ages 18–62</li>
                <li>Lives in metropolitan or suburban areas</li>
                <li>Include participants of different genders</li>
                <li>Include participants with different abilities</li>
                <li>
                  Working professionals busy with work duties are conscious about budget and want to eat
                  healthily.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
          <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Insights from the <span style={{ color: "#0EDAC6" }}>Research</span>
            </h2>
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/insights.png"
                  alt="Insights from the Research"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Prioritisation Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Feature <span style={{ color: "#0EDAC6" }}>Prioritisation</span>
            </h2>
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/feature.png"
                  alt="Feature Prioritisation"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rosita Audit Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/90"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Competitive <span style={{ color: "#0EDAC6" }}>Audit</span>
            </h2>

            <div className="space-y-6 text-[20px] leading-relaxed">
              <p>
                To develop relevant ideas for the project, I did a comprehensive audit and an overview of our
                /rositaitors’ strengths and weaknesses. I analysed brands and products of /rositaitors and
                companies that offer similar products to ensure a well‑rounded foundation of knowledge about
                the market our product will enter.
              </p>
              <p>
                For the project, I looked into /rositaitors like Bolt Eats, Debonairs Pizza, Jumia Foods, and
                Uber Eats. Due to the short duration of developing ideas, I audited Google Play store reviews
                to identify what users identified as their pain points.
              </p>
              <p className="italic text-center">
                The Comprehensive Audit is available
                {" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1hoBMrSeff4lK8S5dlMQGgjJDfby2pun8KczTKQiNrso/edit?gid=543487785#gid=543487785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#0EDAC6" }}
                >
                  HERE
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Constraints Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Constraints
            </h2>
            <p className="text-[20px] leading-relaxed text-white/90 mx-auto mb-10">
              For this project, I documented the constraints encountered while brainstorming and ideating for the
              Rosita Cuisine MVP. These constraints guided prioritisation and helped define the scope for the
              initial release.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/constraints.png"
                  alt="Constraints"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/90"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-6">Sitemap</h2>
            <p className="text-[20px] leading-relaxed text-left mb-2">
              I decided to design a hierarchical diagram that visually represents the structure and
              organisation of the mobile app. The purpose of this sitemap was to allow you to visualise
              how individual sections are related to each other. They also help you understand how users
              navigate through the mobile app.
            </p>
            <p className="italic text-center mt-8" style={{ color: "#0EDAC6" }}>
              The Sitemap is available <a href="https://docs.google.com/spreadsheets/d/1hoBMrSeff4lK8S5dlMQGgjJDfby2pun8KczTKQiNrso/edit?gid=543487785#gid=543487785" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0EDAC6" }}>HERE</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Designing the <span style={{ color: "#0EDAC6" }}>Solution</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/design.png"
                  alt="Design"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Solution Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-6">Final Solution</h2>
            <p className="text-[20px] leading-relaxed text-white/90">
              The design decisions were centered around seamless user experience, inclusion, and
              accessibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-8">
              Registration
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/rosita/register.png"
                  alt="Registration Screens"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* End-to-End Screens Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
          <div className="w-full max-w-[1513px] mx-auto px-[20px]  md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-center text-white mb-6">
              End-to-End <span style={{ color: "#0EDAC6" }}>Screens</span>
            </h2>
            <p className="text-[20px] leading-relaxed text-white/90 text-center max-w-5xl mx-auto mb-10">
              Each final implementation went through a series of iterations of user testing to meet the
              specific need of the final customer.
            </p>

            <div className="space-y-8">
              {[
                "screen-1.png",
                "screen-2.png",
                "screen-3.png",
                "screen-4.png",
              ].map((img, idx) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/projects/rosita/${img}`}
                    alt={`End-to-End Screen ${idx + 1}`}
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}

              <p className="text-[20px] leading-relaxed text-white/90 text-center">
                View the interactive prototype
                {" "}
                <a
                  href="https://www.figma.com/proto/IfeMUCKzvMbCZYIqnvkz4M/Rosita-African-Cuisine?node-id=1-154&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "#0EDAC6" }}
                >
                  here
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usability Testing Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/90"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-6">Usability Testing</h2>
            <div className="space-y-6 text-[20px] leading-relaxed">
              <p>
                Usability testing of the high‑fidelity prototype was conducted to see how users interact with the
                product. I designed a test plan and conducted usability testing to validate the concept.
                Participants were given different tasks, and their behaviour was observed. They were encouraged
                to discuss openly whatever came into their mind while using the prototype.
              </p>
              <p>
                The application evaluation was conducted with three users, and below are the observations and
                feedback:
              </p>
              <ul className="list-decimal pl-6 space-y-2">
                <li>All the screens were neat, clean, and easy to understand</li>
                <li>Process of ordering food was seamless and quick</li>
                <li>It would be better if I could customise my meals</li>
                <li>Icons and navigation were spelled out correctly</li>
              </ul>
              <p>
                From the overall test findings, it can be inferred that the concept would succeed in performing
                specific tasks. It has helped uncover usability issues that need to be addressed.
              </p>
              <p className="italic text-center" style={{ color: "#0EDAC6" }}>
                See the Rosita Cuisine Usability Test Report
                {" "}
                <a
                  href="https://docs.google.com/document/d/1QnhNOg8FX5ndAK8gbBe4sMedVeaRId8wpib7-1XS6lA/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  HERE
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Takeaway Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] mx-auto px-[20px] md:px-[60px] lg:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-6">
              Major Takeaway from the <span style={{ color: "#0EDAC6" }}>Project</span>
            </h2>
            <div className="text-white/90 text-[20px] leading-relaxed mx-auto space-y-4">
              <p>
                I found this task amazing as it opened my mind to various techniques and processes for creating
                solutions to pertinent business challenges. I loved working on this project as I learned how to
                manage time, make decisions based on our limited resources, and hack through all blockers.
              </p>
              <p>
                Also, I could apply all my knowledge and learnings while collaborating and simultaneously
                meeting with stakeholders to get the result.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default RositaCuisinePage;