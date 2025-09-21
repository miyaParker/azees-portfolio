'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section - Let's Connect */}
      {/* <div className=" "> */}
        <div className="border-b border-gray-600 py-8 max-w-[1513px] w-full mx-auto px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px]">
          <motion.h2
            className="text-center text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
        </div>
      {/* </div> */}

      {/* Main Footer Content */}
        <div className="border-b border-gray-600 py-12 max-w-[1513px] w-full mx-auto px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Left Column - Branding and Social Media */}
            <motion.div
              className="flex flex-col lg:justify-between gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="text-3xl font-bold text-[#03A3CC]">
               <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-[137px] h-auto" />
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-1 md:mt-auto">
                <Link href="#" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                  <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="#" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                  <Image src="/whatsapp.png" alt="Whatsapp" width={24} height={24} />
                </Link>
                <Link href="#" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                  <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="#" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                  <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
                </Link>
              </div>
            </motion.div>

            {/* Second Column - Navigation */}
            <motion.div
              className="space-y-4 lg:justify-self-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#03A3CC]">Navigation</h3>
              <ul className="space-y-3">
                <li><Link href="/#about-me" className="text-white hover:text-[#03A3CC] transition-colors duration-300">About Me</Link></li>
                <li><Link href="/#services" className="text-white hover:text-[#03A3CC] transition-colors duration-300">Service</Link></li>
                <li><Link href="/#resume" className="text-white hover:text-[#03A3CC] transition-colors duration-300">Resume</Link></li>
                <li><Link href="/projects" className="text-white hover:text-[#03A3CC] transition-colors duration-300">Projects</Link></li>
              </ul>
            </motion.div>

            {/* Third Column - Contact Information */}
            <motion.div
              className="space-y-4 lg:justify-self-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#03A3CC]">Contact</h3>
              <div className="space-y-3">
                <Link href="tel:+447867270582" className="hover:text-[#03A3CC] transition-colors duration-300 text-white block">+447867270582</Link>
                <Link href="mailto:Olayinkaazees93@gmail.com" className="hover:text-[#03A3CC] transition-colors duration-300 text-white block">Olayinkaazees93@gmail.com</Link>
                {/* <Link href="https://abdulazeesolayinka.com" className="text-white block">AbdulazeesOlayinka.com</Link> */}
              </div>
            </motion.div>

            {/* Right Column - Newsletter Signup */}
            {/* <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#03A3CC]">Get the latest information</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#03A3CC]"
                />
                <button className="bg-[#03A3CC] px-4 py-3 rounded-r-lg hover:bg-[#0288B3] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div> */}
          </div>
        </div>

      {/* Bottom Section - Copyright and Legal Links */}
      <div className="py-6">
        <div className="max-w-[1513px] w-full mx-auto px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px]">
          {/* <div className="flex flex-col md:flex-row justify-between items-center"> */}
            <p className="text-white text-sm mb-4 md:mb-0 text-center">
              Copyright© 2025 Abdulazees Olayinka. All Rights Reserved.
            </p>
            {/* <div className="flex space-x-4 text-sm">
              <a href="#" className="text-white hover:text-[#03A3CC] transition-colors duration-300">User Terms & Conditions</a>
              <span className="text-white">|</span>
              <a href="#" className="text-white hover:text-[#03A3CC] transition-colors duration-300">Privacy Policy</a>
            </div> */}
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default FooterSection;