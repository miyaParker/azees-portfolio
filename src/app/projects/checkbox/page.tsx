"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const CheckboxPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <Navbar variant="dark" isAbsolute={false} currentPage="projects" />

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Checkbox Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-[40px] md:text-[48px] font-bold text-white leading-tight">
                Your Management Goals in One Place
              </h1>
            </motion.div>
          </div>

          {/* Info bar */}
          <div className="py-6 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#7C3AED" }}>
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
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2">Client</h3>
                  <p className="text-white/95 text-[16px]">Checkbox</p>
                </motion.div>

                {/* Industry */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2">Industry</h3>
                  <p className="text-white/95 text-[16px]">Human Resource Management</p>
                </motion.div>

                {/* Platform */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2">Platform</h3>
                  <p className="text-white/95 text-[16px]">Web Application</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white text-center mb-[30px]">
              Overview
            </h2>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-white/90">
              The Human Resources field has experienced several changes over the years. Changes have led to the
              automation of specific tasks and processes. Some of those improvements have made it easier to monitor the
              records of employees, reduce paper waste, retrieve employee data, and effectively manage onsite and remote
              employees. However, most HR Management software lacks some core HR functions, which we seek to solve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introducing App Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white mb-[40px] text-center">
              Introducing Easy Commute <span style={{ color: "#B388FF" }}>Mobile App</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white/90">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-[24px] md:text-[26px] font-extrabold text-white mb-3">What is Checkbox?</h3>
                  <p className="text-[18px] leading-relaxed" style={{ color: "#C9D1D9" }}>
                    Checkbox is an HRM Web App that allows organisations manage, monitor the records of employees,
                    retrieve employee data, and effectively manage onsite and remote employees.
                  </p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-white mb-2">Timeline</h4>
                  <p className="text-[18px]" style={{ color: "#C9D1D9" }}>16 Weeks</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-white mb-2">Client</h4>
                  <p className="text-[18px]" style={{ color: "#C9D1D9" }}>Checkbox</p>
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
                  <h3 className="text-[24px] md:text-[26px] font-extrabold text-white mb-3">My Role</h3>
                  <p className="text-[18px] leading-relaxed" style={{ color: "#C9D1D9" }}>
                    My role during this project was as a UX Designer and UX Researcher. I was involved with each stage of
                    the process, which included initial user research, sketching and wireframing, prototyping, usability
                    testing and presenting final designs and findings to clients.
                  </p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-white mb-2">Tools</h4>
                  <p className="text-[18px]" style={{ color: "#C9D1D9" }}>Figma, Pen and Paper Sketch, Google Docs, Miro</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-white mb-2">Skills</h4>
                  <p className="text-[18px]" style={{ color: "#C9D1D9" }}>
                    Experimentation, A/B testing, Qualitative research, User interviews, Usability testing, UX design,
                    UI design
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white text-center mb-8">
              Objectives we are trying to <span style={{ color: "#B388FF" }}>Solve for</span>
            </h2>
            <div className="space-y-6 text-[18px] leading-relaxed text-white/90">
              <p>1. Applicant Tracking (AT): Managing job postings, apps, and even onboarding of new employees.</p>
              <p>2. Benefits Administration: Managing employee enrolment all the way to offering specific benefit plans to customers.</p>
              <p>3. Scheduling and Shift Planning: Although this is a dedicated tool, the capability can show up as part of a larger HRMS.</p>
              <p>4. Performance Management: Record employee goals or track goals down to the task level and tie success directly and automatically to compensation and payroll.</p>
              <p>5. Online Learning: An offshoot of performance management, letting managers provide the training employees need to achieve their goals and keep the company in compliance if certifications are required for specific jobs.</p>
              <p>6. Integration: Implement with an existing legacy system (e.g., Office 365, Slack, etc.).</p>
              <p>7. Scalability: Mobility, and security (protection of customers financial and personal data)</p>
              <p>8. Others: Set up wizard, phone support, video tutorial, 24/7 live chat.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-white text-center mb-8">Solution</h2>
            <p className="text-[18px] leading-relaxed text-white/90 mb-6">
              We decided to develop a web application that helps place all the human resources management goals in one software.
              We solved the following problems in this version of the project:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[18px] text-white/90">
              <li>Performance Management</li>
              <li>Scalability</li>
              <li>Mobility</li>
              <li>Security</li>
              <li>Benefits Administration</li>
              <li>Seamless Reporting</li>
              <li>Real-Time Notifications</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Design Thinking Process Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Design Thinking <span style={{ color: "#B388FF" }}>Process</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/design-thinking.png"
                  alt="Design Thinking Process"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desk Research Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Conducting <span style={{ color: "#B388FF" }}>Desk Research</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/desk-research.png"
                  alt="Desk Research"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              <span style={{ color: "#B388FF" }}>Flowchart</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/flowchart.png"
                  alt="Flowchart"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Wireframes
            </h2>
                <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mb-8">
              The Sign-Up & Login Pages provide the user with a fast and easy process to register and
              enjoy the benefits of the software. The Sign Up with Google feature was also added as
              demanded from the User Research.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/wireframe.png"
                  alt="Wireframes"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Dashboard Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Main <span style={{ color: "#B388FF" }}>Dashboard</span>
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              The Dashboard section conveys a summary of employee statistics, upcoming activities, and
              notifications. The salary statistics option on the dashboard is a unique feature of the
              platform. It provides insight into the company's spending on employee benefits.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/dashboard.png"
                  alt="Main Dashboard"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payroll Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Payroll
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              The payroll section gives general information about employees' pay and keeps track of their earnings.
              This feature eliminates the miscalculation of data and affords a system for managing payroll details automatically.
              With CheckBox, HR managers can easily generate salary statements, control payday, and ensure accuracy.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/payroll.png"
                  alt="Payroll"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Structure Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Company <span style={{ color: "#B388FF" }}>Structure</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/company-structure.png"
                  alt="Company Structure"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Report
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              Promotes transparency and improves employees' engagement in the company's activities. The
              report generated helps the company make decisions on hiring costs, turnover rate,
              performance, etc.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/report.png"
                  alt="Report"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              <span style={{ color: "#B388FF" }}>Projects</span>
            </h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/project-1.png"
                  alt="Project 1"
                  width={1440}
                  height={900}
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
                  src="/projects/checkbox/project-2.png"
                  alt="Project 2"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessories Management Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold text-center text-white mb-[60px]">
              Accessories <span style={{ color: "#B388FF" }}>Management</span>
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              Assign accessories and gadgets to employees, keep track of the gadget's health and easily find gadgets assigned to employees.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/accessories.png"
                  alt="Accessories Management"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-center text-white mb-[60px]">
              Notifications
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              View Notifications in real-time and stay abreast of the activities of employees. Get updates on new leave requests, payroll creation, attendance management, new clients, project deadlines, etc.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/notifications.png"
                  alt="Notifications"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leave Management Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-center text-white mb-[60px]">
              Leave <span style={{ color: "#B388FF" }}>Management</span>
            </h2>
            <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mx-auto mb-8">
              View employees on leave, the duration of leave, the leave progress, and the type of leave. Also, an option to apply for leave on behalf of an employee, approve or decline leave requests.
            </p>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/leave.png"
                  alt="Leave Management"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-center text-white mb-[60px]">
              <span style={{ color: "#B388FF" }}>Typography</span>
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/projects/checkbox/typography.png"
                  alt="Typography"
                  width={1440}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-center text-white mb-[60px]">
              Validation
            </h2>
            <div className="mx-auto">
              <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left mb-6">
                Easy Commute app should not become just a one-time delivery. It should be iterated by considering usability tests, A/B tests, and other in-depth surveys with the user to improve the initial version. That said, launching this functionality is only the first step toward the product's success.
              </p>
              <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left">
                In this way, analysing metrics such as daily and monthly active users, bounce rate, churn rate, and retention rate, would be important for understanding success and elaborating the product roadmap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Takeaway from the Project Section */}
      <section className="py-20" style={{ backgroundColor: "#0E0F18" }}>
        <div className="w-full max-w-[1513px] px-[20px] md:px-[40px] lg:px-[80px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] font-semibold text-center text-white mb-[60px]">
              Major Takeaway from the <span style={{ color: "#B388FF" }}>Project</span>
            </h2>
            <div className=" mx-auto">
              <p className="text-[20px] md:text-[22px] leading-relaxed text-white/90 text-left">
                Checkbox considerably solves many Human Resources Management problems and provides a seamless way of managing small and large organisations from one system. The next version would be updated with more features to improve the overall user experience and aesthetic beauty.
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

export default CheckboxPage;