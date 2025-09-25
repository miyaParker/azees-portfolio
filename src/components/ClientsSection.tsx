'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: 'Legacy TV',
      logo: '/clients/legacy-tv.png'
    },
    {
      id: 2,
      name: 'Mylaida',
      logo: '/clients/mylaida.png'
    },
    {
      id: 3,
      name: 'OB7',
      logo: '/clients/ob7.png'
    },
    {
      id: 4,
      name: 'Atmosphère',
      logo: '/clients/atmosphere.png'
    },
    {
      id: 5,
      name: 'Peeg',
      logo: '/clients/peeg.png'
    },
    {
      id: 6,
      name: 'Blueberry Apartments',
      logo: '/clients/blueberry-aptmts.png'
    },
    {
      id: 7,
      name: 'Abbyz Beauty',
      logo: '/clients/abbyz-beauty.png'
    },
    {
      id: 8,
      name: 'Growth Arrow',
      logo: '/clients/arrow-up.png'
    },
    {
      id: 9,
      name: 'Luxury by Creme',
      logo: '/clients/luxury-by-creme.png'
    },
    {
      id: 10,
      name: 'Olat Events',
      logo: '/clients/olat-events.png'
    },
    {
      id: 11,
      name: 'SKYY Vodka',
      logo: '/clients/skyy-vodka.png'
    },
    {
      id: 12,
      name: 'Urban Hype',
      logo: '/clients/urban-hype.png'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Clients Layout */}
        <div className="space-y-[-2rem] lg:space-y-[-2rem] space-y-0 md:space-y-6">
          {/* Large screens: Row-based layout */}
          <div className="hidden lg:block space-y-[-2rem]">
            {/* Row 1: Legacy TV, Mylaida, OB7, Atmosphere */}
            <div className="flex justify-center items-center gap-6">
              {clients.slice(0, 4).map((client, index) => (
                <motion.div
                  key={client.id}
                  className={`group ${client.name === 'Mylaida' ? 'relative -bottom-5' : ''}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Client Logo Container */}
                  <div className="relative w-44 h-28 flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={236}
                      height={156}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: Peeg, Blueberry Apartments */}
            <div className="relative left-[10%] top-[30px] flex justify-start items-center gap-6">
              {clients.slice(4, 6).map((client, index) => (
                <motion.div
                  key={client.id}
                  className={`group ${client.name === 'Blueberry Apartments' ? 'mb-10' : ''}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: (index + 4) * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Client Logo Container */}
                  <div className="relative w-38 h-auto flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={256}
                      height={156}
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: Urban Hype, SKYY Vodka, Abbyz Beauty, Growth Arrow, Luxury by Creme, Olat Events */}
            <div className="flex justify-center items-center -gap-[80px]">
              {[clients[11], clients[10], clients[6], clients[7], clients[8], clients[9]].map((client, index) => (
                <motion.div
                  key={client.id}
                  className="group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: (index + 6) * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Client Logo Container */}
                  <div className="relative w-44 h-28 flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={236}
                      height={156}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Small screens: Single flex layout */}
          <div className="lg:hidden flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {/* Client Logo Container */}
                <div className="relative w-32 h-20 md:w-36 md:h-24 flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={236}
                    height={156}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ClientsSection;