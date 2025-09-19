'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectHeaderProps {
  projectName: string;
  industry: string;
  platform: string;
  description: string;
  features: string;
  additionalInfo: string;
}

const ProjectHeader = ({
  projectName,
  industry,
  platform,
  description,
  features,
  additionalInfo
}: ProjectHeaderProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <motion.header 
        className="flex justify-center py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.nav 
          className="bg-white border border-gray-300 rounded-full px-[18px] h-[98px] w-full max-w-[1287px] flex items-center justify-between"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-2xl font-bold text-gray-900">AODZN</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-[#03A3CC] transition-colors">Home</Link>
            <a href="/about" className="text-gray-600 hover:text-[#03A3CC] transition-colors">About Me</a>
            <a href="/services" className="text-gray-600 hover:text-[#03A3CC] transition-colors">Service</a>
            <a href="/resume" className="text-gray-600 hover:text-[#03A3CC] transition-colors">Resume</a>
            <a href="/portfolio" className="bg-[#03A3CC] text-white px-4 py-2 rounded-full">Project</a>
          </div>
        </motion.nav>
      </motion.header>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Project Info */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {projectName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {features}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {additionalInfo}
            </p>
          </motion.div>
        </div>

        {/* Right Side - Project Details */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
              {/* Client */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-2xl font-bold">Client</h3>
                <p className="text-white/90 text-lg">{projectName}</p>
              </motion.div>

              {/* Industry */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-2xl font-bold">Industry</h3>
                <p className="text-white/90 text-lg">{industry}</p>
              </motion.div>

              {/* Platform */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-2xl font-bold">Platform</h3>
                <p className="text-white/90 text-lg">{platform}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;