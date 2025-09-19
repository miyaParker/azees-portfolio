'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      rating: 5,
      text: "Abdulazees transformed our user experience completely. His attention to detail and creative approach resulted in a 40% increase in user engagement. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      rating: 5,
      text: "Working with Abdulazees was a game-changer for our product. His UI/UX expertise helped us achieve a 60% reduction in user onboarding time. Exceptional work!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "CreativeStudio",
      rating: 5,
      text: "Abdulazees brings both creativity and strategic thinking to every project. His designs not only look amazing but also drive real business results. Outstanding professional!"
    }
  ];

  const accents = useMemo(() => (
    Array.from({ length: 2 }).map(() => ({
      top: Math.random() * 80 + 5,
      left: Math.random() * 80 + 5,
      rotate: Math.random() * 60 - 30,
      scale: Math.random() * 0.6 + 0.7,
      opacity: Math.random() * 0.35 + 0.15,
    }))
  ), []);

  return (
    <section
      className=" bg-black relative overflow-hidden"
      style={{
        backgroundImage: 'url(/testimonial-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Random decorative vectors */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {accents.map((a, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${a.top}%`,
              left: `${a.left}%`,
              transform: `rotate(${a.rotate}deg) scale(${a.scale})`,
              opacity: a.opacity,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9808 2.04166L10.4215 4.1227L7.04297 3.34231C5.22377 2.88708 3.01473 2.56192 2.10512 2.56192C-0.298833 2.56192 0.090997 5.09819 2.81981 7.76452L5.09382 9.97563L2.42998 12.707C0.740714 14.3978 -0.16889 15.8936 0.0260252 16.6089C0.220941 17.7145 0.805686 17.8446 5.80851 17.6495L11.2661 17.4544L12.5006 19.5354C17.1136 27.4043 21.2068 27.4694 19.1277 19.6004L18.2181 16.2187L19.9074 15.8286C24.9102 14.723 25.5599 14.4629 25.5599 13.5524C25.5599 13.0322 23.6757 11.6665 21.4017 10.5609C16.5938 8.15472 16.139 7.63446 16.139 4.38283C16.139 -0.494608 14.6447 -1.34003 11.9808 2.04166ZM7.69269 7.1142C7.69269 7.43936 7.56275 7.76452 7.4328 7.76452C7.23789 7.76452 6.91303 7.43936 6.71812 7.1142C6.5232 6.724 6.65314 6.46387 6.978 6.46387C7.36783 6.46387 7.69269 6.724 7.69269 7.1142ZM12.7605 9.19524C13.2153 9.65047 13.5401 11.0161 13.5401 12.2518V14.5929L11.4611 12.5119C9.70682 10.756 9.57687 10.3008 10.2916 9.45537C11.2661 8.21975 11.7209 8.15472 12.7605 9.19524ZM8.21247 14.1377C8.34241 14.5929 7.75766 14.9181 6.71812 14.9181C5.15879 14.9181 5.02885 14.788 5.74354 13.9426C6.65314 12.8371 7.75766 12.9021 8.21247 14.1377Z" fill="#FCFCFD"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[1513px] mx-auto py-20 px-[20px] sm:px-[40px] lg:px-[80px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="relative inline-block">
              Testimonials That
              <span className="absolute -top-4 -right-7" aria-hidden>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 20C2 17 5 11 2 2M9.5 23.5C13.8333 19.3333 22.7 9.2 23.5 2M12.5 30.5C15.1667 30.5 22.3 29.1 29.5 23.5" stroke="#FFFDFC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <br />
            <span>Speak to </span>
            <span className="text-[#03A3CC]">My Results</span>
          </motion.h2>
        </div>

        {/* Infinite sliding testimonials */}
        <div className="overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white/[0.14] border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 w-full max-w-[790px]"
                style={{ flex: '0 0 auto' }}
              >
                {/* Header: Avatar + Name/Title on left, quote mark on right */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
                      <div className="w-full h-full bg-gradient-to-br from-[#03A3CC] to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#FCFCFD] text-lg">{testimonial.name}</h4>
                      <p className="text-[#FCFCFD] text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-white/20">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 44l8-12-8-12h8l8 12-8 12h-8Zm20 0l8-12-8-12h8l8 12-8 12h-8Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                {/* Rating row */}
                <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8912 15.9284C21.5459 16.2631 21.3872 16.7471 21.4659 17.2217L22.6512 23.7817C22.7512 24.3377 22.5165 24.9004 22.0512 25.2217C21.5952 25.5551 20.9885 25.5951 20.4912 25.3284L14.5859 22.2484C14.3805 22.1391 14.1525 22.0804 13.9192 22.0737H13.5579C13.4325 22.0924 13.3099 22.1324 13.1979 22.1937L7.29118 25.2884C6.99918 25.4351 6.66852 25.4871 6.34452 25.4351C5.55518 25.2857 5.02852 24.5337 5.15785 23.7404L6.34452 17.1804C6.42318 16.7017 6.26452 16.2151 5.91918 15.8751L1.10452 11.2084C0.70185 10.8177 0.56185 10.2311 0.74585 9.70173C0.924517 9.17373 1.38052 8.7884 1.93118 8.70173L8.55785 7.7404C9.06185 7.6884 9.50452 7.38173 9.73118 6.9284L12.6512 0.941729C12.7205 0.808396 12.8099 0.685729 12.9179 0.581729L13.0378 0.488396C13.1005 0.419063 13.1725 0.361729 13.2525 0.315063L13.3979 0.261729L13.6245 0.168396H14.1858C14.6872 0.220396 15.1285 0.520396 15.3592 0.968396L18.3179 6.9284C18.5312 7.3644 18.9459 7.66706 19.4245 7.7404L26.0512 8.70173C26.6112 8.78173 27.0792 9.1684 27.2645 9.70173C27.4392 10.2364 27.2885 10.8231 26.8779 11.2084L21.8912 15.9284Z" fill="#FD853A"/>
                    </svg>
                  ))}
                </div>
                  <span className="text-[#F9FAFB] text-lg font-semibold">5.0</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-[#F9FAFB] text-lg leading-relaxed mt-4">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;