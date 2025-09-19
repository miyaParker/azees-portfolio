'use client';

import { motion } from 'framer-motion';

const MovingWorkSection = () => {
  const workTerms = [
    'UX Design',
    'App Design', 
    'Dashboard',
    'Wireframe',
    'User Research',
    'Prototyping',
    'UI Design',
    'Brand Identity',
    'Logo Design',
    'Web Design',
    'Mobile Design',
    'User Testing',
    'UX Design',
    'App Design', 
    'Dashboard',
    'Wireframe',
    'User Research',
    'Prototyping',
    'UI Design',
    'Brand Identity',
    'Logo Design',
    'Web Design',
    'Mobile Design',
    'User Testing',
    'UX Design',
    'App Design', 
    'Dashboard',
    'Wireframe',
    'User Research',
    'Prototyping',
    'UI Design',
    'Brand Identity',
    'Logo Design',
    'Web Design',
    'Mobile Design',
    'User Testing'
  ];

  return (
    <section className="h-[147px] bg-[#03A3CC] relative overflow-hidden">
      {/* Animated Text Strip */}
      <div className="relative flex items-center justify-center h-full overflow-hidden">
        {/* Fixed Tilted Container */}
        <div 
          className="bg-white px-16 -rotate-2 py-2 shadow-lg flex items-center gap-6 whitespace-nowrap relative overflow-hidden w-full"
        >
          {/* Moving Text Content */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 150,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {[...workTerms, ...workTerms, ...workTerms, ...workTerms, ...workTerms].map((term, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-gray-800 font-semibold text-xl">{term}</span>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0756 0.220751L22.3078 12.3039L34.801 16.463L22.7178 21.6952L18.5587 34.1884L13.3265 22.1053L0.833326 17.9461L12.9165 12.7139L17.0756 0.220751Z" fill="#419CB3"/>
                </svg>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default MovingWorkSection;