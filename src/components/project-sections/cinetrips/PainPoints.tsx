'use client';

import { motion } from 'framer-motion';

interface PainPoint {
  id: number;
  title: string;
  description: string;
  position: 'top-left' | 'mid-left' | 'bottom-left' | 'top-right' | 'mid-right' | 'bottom-right';
}

interface PainPointsProps {
  title: string;
  description: string;
  painPoints: PainPoint[];
}

const PainPoints = ({ title, description, painPoints }: PainPointsProps) => {
  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'mid-left':
        return 'top-1/2 left-0 transform -translate-y-1/2';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'mid-right':
        return 'top-1/2 right-0 transform -translate-y-1/2';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return 'top-0 left-0';
    }
  };

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
          className="relative min-h-[800px] flex items-center justify-center"
        >
          {/* Central Mobile Mockup */}
          <motion.div
            className="relative z-10 bg-gray-800 rounded-3xl p-6 w-80 h-96 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="text-xs text-gray-500">9:41</div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">Movie Title</h3>
                  <p className="text-sm text-gray-600">Jun 28, 2023</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="text-gray-900">4K, 3D, 2D</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Studio:</span>
                    <span className="text-gray-900">Universal Pictures, DreamWorks Animation</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-sm text-gray-600">Popcorn</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">$8.50</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-600">Pepsi</span>
                  </div>
                  <div className="text-sm font-bold text-gray-900">$4.50</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pain Points positioned around the phone */}
          {painPoints.map((painPoint, index) => (
            <motion.div
              key={painPoint.id}
              className={`absolute w-80 ${getPositionClasses(painPoint.position)}`}
              initial={{ opacity: 0, x: painPoint.position.includes('left') ? -50 : 50, y: painPoint.position.includes('top') ? -50 : painPoint.position.includes('bottom') ? 50 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {painPoint.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pink-500 mb-2">{painPoint.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {painPoint.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;