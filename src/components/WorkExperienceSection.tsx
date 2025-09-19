'use client';

import { motion } from 'framer-motion';

const WorkExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Baldev Skills Resources, UK.",
      period: "Jan 2023 - Present",
      role: "Lead UI/UX Designer",
      description: "Drove UX strategy and built a scalable design system, cutting delivery time by 35%. Championed accessibility, aligned stakeholders to boost adoption by 30%, and mentored designers to elevate delivery quality",
      isActive: true
    },
    {
      id: 2,
      company: "CMYK Studios, Nigeria.",
      period: "Mar 2021 - Sep 2022",
      role: "Brand & UX Designer",
      description: "Created brand identities and UI for 50+ clients, driving 60% higher recall and 25% more conversions, while boosting engagement by 45% through data-driven design",
      isActive: false
    },
    {
      id: 3,
      company: "Egbin Power Plc, Nigeria.",
      period: "Jun 2018 - Mar 2021",
      role: "UI/UX Designer",
      description: "Redesigned corporate platforms with WCAG-compliant features, boosting adoption by 45%. Built responsive dashboards that cut decision-making time by 25% and aligned stakeholders across IT, HR, and finance",
      isActive: true
    },
    {
      id: 4,
      company: "Urban Hype Ltd, Nigeria.",
      period: "Feb 2015 - Jun 2018",
      role: "Design Team Lead",
      description: "Led a 5-person creative team to deliver award-winning campaigns, boosting artist collaborations by 30% and streaming visibility by 25%",
      isActive: false
    },
    {
      id: 5,
      company: "Freelance",
      period: "Feb 2012 - Apr 2015",
      role: "Brand Designer",
      description: "Delivered custom brand designs, including logos, style guides, and marketing assets, enhancing client market visibility.",
      isActive: true
    }
  ];

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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-600">My Work </span>
            <span className="text-[#03A3CC]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-start gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left Column - Company & Dates */}
                <div className="w-full lg:max-w-[520px] pr-0 lg:pr-8 text-right lg:text-right self-start">
                  <motion.div
                    className="mb-4 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-left text-gray-700 text-[28px] sm:text-[32px] lg:text-[40px] font-semibold mb-2">
                      {experience.company}
                    </h3>
                    <p className="text-left text-gray-500 text-[18px] sm:text-[20px] lg:text-[24px] font-normal">
                      {experience.period}
                    </p>
                  </motion.div>
                </div>

                {/* Center Column - Timeline Circle and Line */}
                <div className="relative flex-shrink-0 self-stretch">
                  <div className="flex-shrink-0 z-10 self-start">
                    <div className="w-[48px] h-[48px] rounded-full border-2 border-dotted border-gray-900 flex items-center justify-center mx-auto">
                      <motion.div
                        className={`w-9 h-9 rounded-full ${
                          experience.isActive 
                            ? 'bg-[#03A3CC]' 
                            : 'bg-gray-900'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </div>

                  {/* Vertical line connecting to next item (lg and up) */}
                  {index < experiences.length - 1 && (
                    <div
                      className="hidden lg:block absolute"
                      style={{ 
                        top: '48px',
                        height: 'calc(100% + 3rem - 48px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        backgroundImage: 'url(/line.png)',
                        backgroundRepeat: 'repeat-y',
                        backgroundSize: 'cover'
                      }}
                    />
                  )}
                </div>

                {/* Right Column - Role & Description */}
                <div className="w-full lg:max-w-[620px] pl-0 lg:pl-8 text-left lg:text-left self-start">
                  <motion.div
                    className="bg-transparent"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-gray-800 text-[28px] sm:text-[32px] lg:text-[40px] font-semibold mb-3">
                      {experience.role}
                    </h4>
                    <p className="text-gray-600 text-[18px] sm:text-[20px] lg:text-[24px] font-normal leading-relaxed">
                      {experience.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;