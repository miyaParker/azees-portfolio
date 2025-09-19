'use client';

import { motion } from 'framer-motion';

interface Icon {
  name: string;
  svg: string;
}

interface LogoAndIconsProps {
  title: string;
  logoName: string;
  icons: Icon[];
}

const LogoAndIcons = ({ title, logoName, icons }: LogoAndIconsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {title}
          </h2>
          
          <div className="bg-purple-50 rounded-2xl p-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                {/* Logo Icon */}
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Play button triangle with gradient */}
                    <path d="M10 15L70 40L10 65V15Z" fill="url(#logoGradient)"/>
                    {/* Film reel inside */}
                    <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="40" cy="40" r="12" fill="none" stroke="white" strokeWidth="1.5"/>
                    {/* Film reel perforations */}
                    <circle cx="40" cy="25" r="1.5" fill="white"/>
                    <circle cx="40" cy="55" r="1.5" fill="white"/>
                    <circle cx="25" cy="40" r="1.5" fill="white"/>
                    <circle cx="55" cy="40" r="1.5" fill="white"/>
                    <circle cx="32" cy="28" r="1" fill="white"/>
                    <circle cx="48" cy="28" r="1" fill="white"/>
                    <circle cx="32" cy="52" r="1" fill="white"/>
                    <circle cx="48" cy="52" r="1" fill="white"/>
                    <circle cx="28" cy="32" r="1" fill="white"/>
                    <circle cx="28" cy="48" r="1" fill="white"/>
                    <circle cx="52" cy="32" r="1" fill="white"/>
                    <circle cx="52" cy="48" r="1" fill="white"/>
                    {/* Star in center */}
                    <path d="M40 35L42 40L47 40L43 43L45 48L40 45L35 48L37 43L33 40L38 40L40 35Z" fill="white"/>
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D70A84"/>
                        <stop offset="100%" stopColor="#2A004C"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Logo Text */}
                <div className="text-4xl font-bold text-purple-900 font-['Helvetica_Neue']">
                  {logoName}
                </div>
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-11 gap-4">
              {icons.map((icon, index) => (
                <div key={index} className="w-8 h-8 flex items-center justify-center">
                  <div 
                    className="w-6 h-6 text-purple-900"
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoAndIcons;