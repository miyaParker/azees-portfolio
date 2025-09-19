'use client';

import { motion } from 'framer-motion';

interface Persona {
  name: string;
  age: string;
  occupation: string;
  image: string;
  bio: string;
  behavior: string;
  goals: string[];
  frustrations: string[];
  wants: string[];
  needs: string[];
  quote: string;
  backgroundColor: string;
}

interface UserPersonaProps {
  title: string;
  description: string;
  personas: Persona[];
}

const UserPersona = ({ title, description, personas }: UserPersonaProps) => {
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

        <div className="space-y-16">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${persona.backgroundColor} rounded-3xl p-8 md:p-12`}
            >
              {/* Persona Header */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Profile Section */}
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">{persona.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{persona.name}</h3>
                  <p className="text-gray-600">{persona.age} • {persona.occupation}</p>
                </div>

                {/* Bio Section */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Bio</h4>
                  <p className="text-gray-700 leading-relaxed">{persona.bio}</p>
                </div>
              </div>

              {/* Behavior Section */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Behavior</h4>
                <p className="text-gray-700 leading-relaxed">{persona.behavior}</p>
              </div>

              {/* Goals and Frustrations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Goals</h4>
                  <ul className="space-y-2">
                    {persona.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Frustrations</h4>
                  <ul className="space-y-2">
                    {persona.frustrations.map((frustration, frustrationIndex) => (
                      <li key={frustrationIndex} className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{frustration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Wants and Needs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Wants</h4>
                  <ul className="space-y-2">
                    {persona.wants.map((want, wantIndex) => (
                      <li key={wantIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{want}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Needs</h4>
                  <ul className="space-y-2">
                    {persona.needs.map((need, needIndex) => (
                      <li key={needIndex} className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-white rounded-2xl p-6">
                <blockquote className="text-lg italic text-gray-700 text-center">
                  "{persona.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPersona;