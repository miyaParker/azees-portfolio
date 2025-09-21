'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  variant?: 'light' | 'dark';
  isAbsolute?: boolean;
  currentPage?: string;
}

const Navbar = ({ variant = 'light', isAbsolute = false, currentPage }: NavbarProps) => {
  const isDark = variant === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navClasses = isDark 
    ? "bg-gray-900 border border-gray-600 rounded-full px-[18px] h-[70px] lg:h-[98px] w-full max-w-[1287px] flex items-center justify-between relative"
    : "bg-white border border-gray-300 rounded-full px-[18px] h-[70px] lg:h-[98px] w-full max-w-[1287px] flex items-center justify-between relative";

  const headerClasses = isAbsolute 
    ? "absolute top-0 left-0 right-0 z-20 flex justify-center py-4 px-[20px]"
    : "flex justify-center py-4 px-[20px]";

  const linkClasses = isDark
    ? "py-[20px] text-white text-[16px] lg:text-[20px] hover:text-blue-400 transition-colors"
    : "text-gray-600 hover:text-[#03A3CC] transition-colors text-[16px] lg:text-[20px]";

  const activeLinkClasses = isDark
    ? "bg-[#03A3CC] px-[20px] lg:px-[40px] py-[20px] rounded-full text-white text-[16px] lg:text-[20px] font-medium"
    : "bg-[#03A3CC] text-white px-4 py-2 rounded-full";

  const logoClasses = isDark
    ? "text-white text-xl lg:text-2xl font-bold shrink-0"
    : "text-xl lg:text-2xl font-bold text-[#03A3CC] shrink-0";

  const mobileMenuClasses = isDark
    ? "absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-600 rounded-2xl p-4 shadow-lg"
    : "absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-2xl p-4 shadow-lg";

  return (
    <motion.header 
      className={headerClasses}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.nav 
        className={navClasses}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isDark ? (
          <>
           {/* Mobile Menu Button */}
          
            <motion.div 
              className="flex items-center lg:hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Image
                src="/logo.svg"
                alt="AODZN Logo"
                width={138}
                height={44}
                className="h-6 lg:h-8 w-auto"
              />
            </motion.div>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <motion.div
                className={currentPage === 'home' ? activeLinkClasses : linkClasses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">Home</Link>
              </motion.div>
              <a href="#" className={linkClasses}>Service</a>
              <a href="#" className={linkClasses}>Resume</a>
            {/* </div> */}
            
           
            
            <motion.div 
              className="flex items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Image
                src="/logo.svg"
                alt="AODZN Logo"
                width={138}
                height={44}
                className="h-6 lg:h-8 w-auto"
              />
            </motion.div>
            
            {/* Desktop Navigation Right */}
            {/* <div className="hidden lg:flex items-center space-x-2"> */}
              <a href="#about" className={linkClasses}>About</a>
              <Link href="/portfolio" className={currentPage === 'portfolio' ? activeLinkClasses : linkClasses}>Project</Link>
              <a href="#" className={linkClasses}>Contact</a>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className={mobileMenuClasses}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col space-y-2">
                    <Link href="/" className={currentPage === 'home' ? activeLinkClasses : linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <a href="#" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Service</a>
                    <a href="#" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                    <a href="#about" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <Link href="/portfolio" className={currentPage === 'portfolio' ? activeLinkClasses : linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Project</Link>
                    <a href="#" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <>
            <div className={logoClasses}>AODZN</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={currentPage === 'home' ? activeLinkClasses : linkClasses}>Home</Link>
              <Link href="/portfolio" className={currentPage === 'portfolio' ? activeLinkClasses : linkClasses}>Project</Link>
              <Link href="/contact" className={currentPage === 'contact' ? activeLinkClasses : linkClasses}>Contact</Link>
            </div>
            
            {/* Mobile Menu Button for Light Theme */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Mobile Menu for Light Theme */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className={mobileMenuClasses}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col space-y-2">
                    <Link href="/" className={currentPage === 'home' ? activeLinkClasses : linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/portfolio" className={currentPage === 'portfolio' ? activeLinkClasses : linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Project</Link>
                    <Link href="/contact" className={currentPage === 'contact' ? activeLinkClasses : linkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;