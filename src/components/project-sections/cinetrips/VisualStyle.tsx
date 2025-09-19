'use client';

import { motion } from 'framer-motion';

interface FontWeight {
  name: string;
  weight: string;
  style?: string;
}

interface Color {
  name: string;
  hex: string;
}

interface VisualStyleProps {
  title: string;
  fontName: string;
  fontDescription: string;
  fontWeights: FontWeight[];
  colors: Color[];
}

const VisualStyle = ({ title, fontName, fontDescription, fontWeights, colors }: VisualStyleProps) => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Font Display */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-black">Font Used</h3>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-6xl font-bold font-['Helvetica_Neue']">
                  {fontName}
                </div>
                <div className="absolute inset-0 border-2 border-black rounded-sm">
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-black"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-black"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black"></div>
                </div>
              </div>
              
              <div className="space-y-2 text-black font-['Helvetica_Neue']">
                <div className="text-2xl font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div className="text-2xl font-bold">abcdefghijklmnopqrstuvwxyz</div>
                <div className="text-2xl font-bold">1234567890</div>
              </div>
            </div>

            {/* Right Section - Font Description */}
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                {fontDescription}
              </p>
            </div>
          </div>

          {/* Font Weights and Styles */}
          <div className="mt-12 bg-pink-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {fontWeights.slice(0, 3).map((weight, index) => (
                  <div key={index} className={`text-black font-['Helvetica_Neue'] text-2xl ${weight.weight} ${weight.style || ''}`}>
                    {weight.name}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {fontWeights.slice(3).map((weight, index) => (
                  <div key={index} className={`text-black font-['Helvetica_Neue'] text-2xl ${weight.weight} ${weight.style || ''}`}>
                    {weight.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colors Section */}
          <div className="mt-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-purple-900">Colours Used</h3>
            </div>
            
            <div className="bg-pink-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {colors.map((color, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3">
                    <svg width="140" height="146" viewBox="0 0 140 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M63.9653 0.1651C99.833 -0.908191 129.283 28.608 137.994 63.49C145.232 92.3794 122.13 116.886 97.2921 133.343C76.2226 147.385 49.473 150.426 28.713 136.026C6.58978 120.642 -3.9615 93.7207 2.80876 67.6039C11.2371 35.1368 30.4302 1.23839 63.9653 0.1651Z" fill={color.hex}/>
                    </svg>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">{color.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualStyle;