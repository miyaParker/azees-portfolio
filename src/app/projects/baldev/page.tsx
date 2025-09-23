"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const BaldevProjectPage = () => {
  return (
    <div className="min-h-screen pt-[120px] md:pt-[150px] bg-gray-900 text-white">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="projects" />

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Baldev Project Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Centered title */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl"
            >
              <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-bold text-white leading-tight">
                Transforming Baldev Skills Resources’ Digital Presence
              </h1>
            </motion.div>
          </div>

          {/* Info bar */}
          <div className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#64B189" }}>
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
                  <p className="text-white/95 text-[18px]">Baldev Skills Resources Ltd.</p>
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
                  <p className="text-white/95 text-[18px]">Healthcare</p>
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
                  <p className="text-white/95 text-[18px]">Website</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-[24px]">
              Executive <span style={{ color: "#64B189" }}>Summary</span>
            </h2>
            <div className="space-y-5">
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                Baldev Skills Resources Limited, a Sheffield-based care and training provider, needed a
                website that accurately reflected its professionalism, credibility, and compassionate brand
                identity. The old website was outdated, poorly structured, and unrepresentative of Baldev’s
                services, which negatively impacted trust, usability, and conversions.
              </p>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                The new website redesign introduced a modern, user‑friendly, and conversion‑focused platform
                that improved navigation, showcased services clearly, strengthened brand identity, and
                supported both recruitment and training enrollments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-[24px]">
              The Company <span style={{ color: "#64B189" }}>Overview</span>
            </h2>
            <div className="space-y-5">
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                Baldev Skills Resources Limited is a trusted health and social care provider based in
                Sheffield, England. Since 2007, the company has been dedicated to delivering person‑centred
                domiciliary and specialist care services, ensuring individuals can live with dignity,
                independence, and support in the comfort of their own homes.
              </p>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                Beyond care, Baldev also supplies qualified healthcare staff to hospitals and care homes,
                bridging workforce gaps with skilled nurses, carers, and support workers.
              </p>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                To strengthen the sector, Baldev runs a range of accredited training programmes, including
                the Care Certificate, CPD‑accredited courses, Diplomas (Levels 3–5), and mandatory training.
                These programmes equip new entrants and existing care professionals with the knowledge,
                skills, and confidence required to excel in healthcare.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-white text-center mb-4">
              The <span style={{ color: "#64B189" }}>Challenge</span>
            </h2>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left max-w-5xl">
              Despite offering high‑quality services and holding a CQC “Good” rating, Baldev’s old website
              did not represent its values or professionalism. Instead, it left visitors with a poor first
              impression and failed to guide them toward meaningful action (enquiries, training sign‑ups, job
              applications).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/projects/baldev/challenge.jpg"
              alt="Baldev project challenge overview"
              width={1440}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stakeholders Interview */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-[16px]">
              Stakeholders <span style={{ color: "#64B189" }}>Interview</span>
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-white/90 text-left">
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Management wanted a site that reflected credibility and professionalism.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Recruitment team wanted a clearer careers section to attract skilled staff.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Training department needed better visibility for Care Certificate and mandatory courses.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[36px] md:text-[44px] font-semibold text-white text-center">
              Pain <span style={{ color: "#64B189" }}>Points</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/projects/baldev/pain.jpg"
              alt="Baldev pain points"
              width={1440}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Competitor Benchmarking */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-4">
              Competitor <span style={{ color: "#64B189" }}>Benchmarking</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-white/90 mb-4 text-left">
              Compared Baldev’s old site to other UK care providers. Findings:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-white/90 text-left">
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Competitors showcased stronger branding, clear service breakdowns, and easy booking options.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Baldev lagged behind, which risked losing both clients and learners.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Business Goals */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-4">
              Business <span style={{ color: "#64B189" }}>Goals</span>
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-white/90 text-left">
              <li className="text-[18px] md:text-[20px] leading-relaxed">Improve first impressions and brand credibility.</li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">Make services (Care & Training) easy to understand and book.</li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">Attract job seekers with a professional careers section.</li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">Drive more conversions (calls, form submissions, course enrollments).</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Strategy and Objectives */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-4">
              Strategy and <span style={{ color: "#64B189" }}>Objectives</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-white/90 mb-4 text-left">
              The redesign was guided by these objectives:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-white/90 text-left">
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Brand Alignment – A modern, professional design reflecting compassion, trust, and expertise.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Service Clarity – Structured presentation of care services and training packages.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Conversion Focus – Strong CTAs across all pages (Book Now, Enroll Now, Apply Now).
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                Recruitment Strengthening – Dedicated careers section with open roles, salaries, and benefits.
              </li>
              <li className="text-[18px] md:text-[20px] leading-relaxed">
                User Experience – Simple, mobile‑friendly navigation that reduces friction.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Low-fidelity Wireframe */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center">
              Low-fidelity <span style={{ color: "#64B189" }}>Wireframe</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/projects/baldev/low-fi.jpg"
              alt="Baldev low-fidelity wireframe"
              width={1440}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center">
              Project <span style={{ color: "#64B189" }}>Results</span>
            </h2>
          </motion.div>

          <div className="flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/projects/baldev/result-1.png"
                alt="Baldev result 1"
                width={1440}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/projects/baldev/result-2.png"
                alt="Baldev result 2"
                width={1440}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/projects/baldev/result-3.png"
                alt="Baldev result 3"
                width={1440}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[44px] font-semibold text-white text-center mb-4">Conclusion</h2>
            <div className="space-y-4">
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                The redesigned Baldev Skills Resources website represents a complete digital transformation. It
                moves the company from an outdated, unprofessional site to a modern, user‑friendly, and
                business‑focused platform that builds trust, drives conversions, and strengthens recruitment.
              </p>
              <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90 text-left">
                The project shows how research‑driven design and a focus on user needs can deliver a website
                that doesn’t just look good; it actively supports business growth and aligns with the
                organisation’s mission: “Delivering Compassionate Care and Building Healthcare Careers.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BaldevProjectPage;

