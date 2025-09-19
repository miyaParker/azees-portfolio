'use client';

import { motion } from 'framer-motion';

interface EmpathizePhaseProps {
  title: string;
  description: string;
  researchTitle: string;
  researchDescription: string;
  interviewQuestions: string[];
  insightsTitle: string;
  insights: string[];
}

const EmpathizePhase = ({
  title,
  description,
  researchTitle,
  researchDescription,
  interviewQuestions,
  insightsTitle,
  insights
}: EmpathizePhaseProps) => {
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Research */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{researchTitle}</h3>
              <p className="text-gray-700 leading-relaxed">{researchDescription}</p>
            </div>

            {/* Right Side - Interview Questions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interview Questions</h3>
              <ul className="space-y-3">
                {interviewQuestions.map((question, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Insights */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{insightsTitle}</h3>
            <ul className="space-y-3">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpathizePhase;