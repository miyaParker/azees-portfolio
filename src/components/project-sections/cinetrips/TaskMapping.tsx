'use client';

import { motion } from 'framer-motion';

interface Task {
  userTask: string;
  userGoal: string;
  keySteps: string;
  potentialPainPoints: string;
}

interface TaskMappingProps {
  title: string;
  description: string;
  tasks: Task[];
}

const TaskMapping = ({ title, description, tasks }: TaskMappingProps) => {
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
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">User Tasks</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">User Goals</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Key Steps</th>
                  <th className="px-6 py-4 text-left text-lg font-bold text-gray-900">Potential Pain Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tasks.map((task, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-gray-700 font-medium">{task.userTask}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700">{task.userGoal}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700">{task.keySteps}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700">{task.potentialPainPoints}</div>
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

export default TaskMapping;