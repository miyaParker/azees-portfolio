'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Image from 'next/image';
interface CascadedCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  height?: string;
  delay?: number;
  topOffset?: string;
}

const CascadedCard = ({
  title,
  children,
  className = 'mx-auto',
  height = 'h-[320px] min-[300px]:h-[380px] min-[768px]:h-[450px] min-[1024px]:h-[350px] min-[1150px]:h-[400px] min-[1280px]:h-[420px] min-[1440px]:h-[500px]',
  delay = 0,
  topOffset = ''
}: CascadedCardProps) => {
  return (
    <motion.div 
      className={`relative w-full mx-auto max-w-[320px] md:max-w-[416px] ${height} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      style={{ marginTop: topOffset || undefined }}
    >
      {/* Background card with title */}
      <motion.div 
        className={`absolute bottom-0 ${height} left-0 w-full bg-white/5 rounded-3xl border border-white/3`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
      >
        <h3 className="absolute top-0 mx-auto text-white text-2xl font-bold text-center border-b border-white/3 w-full py-4">
          {title}
        </h3>
      </motion.div>

      {/* Cascaded Background Cards */}
      <motion.div 
        className="bg-white/2 h-[68%] md:h-[75%] lg:h-[60%] xl:h-[75%] w-[80%] left-[10%] bottom-[5%] md:bottom-[6%] lg:bottom-[15%] xl:bottom-[6%] backdrop-blur-sm rounded-3xl border border-white/3 absolute z-10"
        style={{ 
        //   width: 'calc(100% - 80px)', 
        //   height: 'calc(100% - 80px)', 
        //   top: '-40px',
        //   left: '40px'
        }}
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: delay + 0.8 }}
      />
      <motion.div 
        className="bg-white/3 h-[68%] md:h-[75%] lg:h-[60%] xl:h-[75%] w-[90%] left-[5%] bottom-0 md:bottom-[2%] lg:bottom-[10%] xl:bottom-[2%] backdrop-blur-sm rounded-3xl border border-white/5 absolute z-20"
        style={{ 
        //   width: 'calc(100% - 40px)', 
        //   height: 'calc(100% - 80px)', 
        //   top: '-20px',
        //   left: '20px'
        }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: delay + 0.3 }}
      />
      
      {/* Main Card */}
      {/* <Image src="/ui:ux.jpg" alt="UI/UX Design" width={1000} height={1000} className="w-full absolute left-0 h-auto overflow-hidden bottom-0 rounded-[35px] border border-white/10 hover:bg-white/10 transition-all duration-300 z-30" /> */}
      <motion.div 
        className="w-full absolute left-0 h-[63%] md:h-[70%] lg:h-[65%] xl:h-[70%] overflow-hidden bottom-0 rounded-[35px] border border-white/10 hover:bg-white/10 transition-all duration-300 z-30"
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CascadedCard;