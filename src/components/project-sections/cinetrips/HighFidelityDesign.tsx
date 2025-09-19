'use client';

import { motion } from 'framer-motion';

interface Screen {
  title: string;
  description: string;
  icon: string;
}

interface HighFidelityDesignProps {
  title: string;
  description: string;
  mainScreens: Screen[];
  additionalScreens: Screen[];
  prototypeLink: string;
}

const HighFidelityDesign = ({ 
  title, 
  description, 
  mainScreens, 
  additionalScreens, 
  prototypeLink 
}: HighFidelityDesignProps) => {
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {mainScreens.map((screen, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div dangerouslySetInnerHTML={{ __html: screen.icon }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">{screen.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{screen.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Additional Prototype Screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Screens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalScreens.map((screen, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div dangerouslySetInnerHTML={{ __html: screen.icon }} />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-600">{screen.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{screen.title}</h4>
                  <p className="text-gray-600 text-xs">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* High Fidelity Prototype Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            <span className="text-pink-500">High Fidelity</span>{" "}
            <span className="text-purple-900">Prototype Link</span>
          </h3>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <a 
              href={prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline text-lg break-all"
            >
              {prototypeLink}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighFidelityDesign;