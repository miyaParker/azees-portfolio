'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopButtonProps {
  showAfterPx?: number;
  bottomOffsetClassName?: string; // e.g. 'bottom-6 md:bottom-8'
  rightOffsetClassName?: string;  // e.g. 'right-4 md:right-6'
}

export default function BackToTopButton({
  showAfterPx = 300,
  bottomOffsetClassName = 'bottom-4 sm:bottom-6 md:bottom-8',
  rightOffsetClassName = 'right-3 sm:right-4 md:right-6',
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(y > showAfterPx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfterPx]);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`fixed ${bottomOffsetClassName} ${rightOffsetClassName} z-[999999] rounded-full shadow-md bg-[#03A3CC]/80 text-black/80 hover:bg-white hover:text-black backdrop-blur-md border border-black/10 transition-colors h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 flex items-center justify-center bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-[calc(env(safe-area-inset-right)+0.75rem)]`}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

