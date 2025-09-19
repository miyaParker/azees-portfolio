'use client';

import { motion } from 'framer-motion';

interface DesignThinkingProcessProps {
  title: string;
  description: string;
  stages: {
    name: string;
    emoji: string;
    description: string;
  }[];
  processDescription: string;
  resultDescription: string;
}

const DesignThinkingProcess = ({
  title,
  description,
  stages,
  processDescription,
  resultDescription
}: DesignThinkingProcessProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Process Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              {processDescription}
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              {resultDescription}
            </p>
          </motion.div>

          {/* Right Side - Process Stages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {stage.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{stage.name}</h3>
                  <p className="text-gray-600 text-sm">{stage.description}</p>
                </div>
                {index < stages.length - 1 && (
                  <div className="ml-auto text-gray-400 text-2xl">
                    &gt;&gt;&gt;&gt;
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-gray-200 rounded-3xl p-8 w-80 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Process Mockup</h3>
              <p className="text-sm text-gray-500">Design thinking visualization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignThinkingProcess;