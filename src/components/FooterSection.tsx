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
      <div id="footer" className="border-b border-gray-600 py-12 max-w-[1513px] w-full mx-auto px-[20px] sm:px-[40px] lg:px-[60px] xl:px-[80px]">
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
              <Image src="/logo.svg" alt="Logo" width={100} height={100} className="w-[80px] md:w-[100px] h-auto lg:w-[137px]" />
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 md:mt-auto">
              <Link href="https://www.facebook.com/share/1FUtMerrSP/?mibextid=wwXIfr" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                <svg className="w-[24px] h-[24px] " width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_17_61)">
                    <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_61">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href="https://wa.me/447867270582" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                <svg className="w-[24px] h-[24px] " width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z" fill="white" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/aodznstudio?igsh=MXZ0M3NhcHd2M3F4dw%3D%3D&utm_source=qr" className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300">
                <svg className="w-[24px] h-[24px] " width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_17_63)">
                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white" />
                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white" />
                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_63">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link className="w-[24px] h-[24px] rounded flex items-center justify-center hover:bg-[#03A3CC] transition-colors duration-300" href="https://x.com/aodznstudio?s=21">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="white" />
                </svg>
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