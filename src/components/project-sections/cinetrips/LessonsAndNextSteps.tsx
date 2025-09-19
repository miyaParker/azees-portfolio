'use client';

import { motion } from 'framer-motion';

interface LessonsAndNextStepsProps {
  title: string;
  lessonsTitle: string;
  lessonsDescription: string;
  nextStepsTitle: string;
  nextStepsDescription: string;
  email: string;
  phone: string;
}

const LessonsAndNextSteps = ({
  title,
  lessonsTitle,
  lessonsDescription,
  nextStepsTitle,
  nextStepsDescription,
  email,
  phone
}: LessonsAndNextStepsProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-100 to-transparent"></div>
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <polygon points="10,2 18,6 18,14 10,18 2,14 2,6" fill="none" stroke="#6B7280" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {title ? (
              <span className="text-purple-900">{title}</span>
            ) : (
              <>
                <span className="text-purple-900">Lessons & Next</span>{" "}
                <span className="text-pink-500">Steps</span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lessons Learned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4">{lessonsTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {lessonsDescription}
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start space-x-6"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pink-500 mb-4">{nextStepsTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {nextStepsDescription}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="space-y-2">
            <div className="text-xl font-bold text-pink-500">
              Email: {email}
            </div>
            <div className="text-xl font-bold text-pink-500">
              Contact: {phone}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LessonsAndNextSteps;