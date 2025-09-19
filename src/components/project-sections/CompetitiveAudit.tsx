'use client';

import { motion } from 'framer-motion';

interface Competitor {
  name: string;
  subtitle: string;
  color: string;
  icon: string;
  strengths: string[];
  weaknesses: string[];
}

interface CompetitiveAuditProps {
  title: string;
  description: string;
  competitors: Competitor[];
}

const CompetitiveAudit = ({ title, description, competitors }: CompetitiveAuditProps) => {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">{title || 'Competitive '}</span>
            {!title && <span className="text-cyan-500">Audit</span>}
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Competitive Audit Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-8 py-6 text-left text-xl font-bold text-purple-900 w-1/3">Company</th>
                  <th className="px-8 py-6 text-left text-xl font-bold text-purple-900 w-1/3">Strengths</th>
                  <th className="px-8 py-6 text-left text-xl font-bold text-purple-900 w-1/3">Weaknesses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitors.map((competitor, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-50">
                    <td className="px-8 py-8">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${competitor.color} rounded-lg flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{competitor.icon}</span>
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold ${competitor.color.replace('bg-', 'text-')}`}>
                            {competitor.name}
                          </h3>
                          <p className="text-sm text-gray-500">{competitor.subtitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <ol className="space-y-2 text-black">
                        {competitor.strengths.map((strength, strengthIndex) => (
                          <li key={strengthIndex} className="flex items-start">
                            <span className="w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                              {strengthIndex + 1}
                            </span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ol>
                    </td>
                    <td className="px-8 py-8">
                      <ol className="space-y-2 text-black">
                        {competitor.weaknesses.map((weakness, weaknessIndex) => (
                          <li key={weaknessIndex} className="flex items-start">
                            <span className="w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                              {weaknessIndex + 1}
                            </span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ol>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAudit;