'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface FullWidthSliderProps {
  images: { src: string; alt?: string }[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
  onChangeIndex?: (index: number) => void;
}

export default function FullWidthSlider({ images, isOpen, initialIndex, onClose, onChangeIndex }: FullWidthSliderProps) {
  const indexRef = useRef<number>(initialIndex);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [direction, setDirection] = useState<number>(0); // -1 for prev, 1 for next

  // Keep index within bounds
  const clampIndex = useCallback((value: number) => {
    if (images.length === 0) return 0;
    if (value < 0) return images.length - 1;
    if (value >= images.length) return 0;
    return value;
  }, [images.length]);

  const setIndex = useCallback((next: number) => {
    const clamped = clampIndex(next);
    indexRef.current = clamped;
    setCurrentIndex(clamped);
    onChangeIndex?.(clamped);
  }, [clampIndex, onChangeIndex]);

  useEffect(() => {
    const clamped = clampIndex(initialIndex);
    indexRef.current = clamped;
    setCurrentIndex(clamped);
  }, [initialIndex, clampIndex, isOpen]);

  const goNext = useCallback(() => { setDirection(1); setIndex(currentIndex + 1); }, [setIndex, currentIndex]);
  const goPrev = useCallback(() => { setDirection(-1); setIndex(currentIndex - 1); }, [setIndex, currentIndex]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, goNext, goPrev, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [isOpen]);

  const active = useMemo(() => images[clampIndex(currentIndex)] ?? null, [images, clampIndex, currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 })
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={containerRef}
          onClick={(e) => {
            if (e.target === containerRef.current) onClose();
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2"
          >
            {/* X icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-[1000000] text-black/80 hover:text-black transition-colors p-2 md:p-3 bg-white/60 rounded-full backdrop-blur-md shadow-md"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-[1000000] text-black/80 hover:text-black transition-colors p-2 md:p-3 bg-white/60 rounded-full backdrop-blur-md shadow-md"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div className="w-full h-full max-h-[80vh] max-w-[85vw] flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {active && (
                <motion.div
                  key={active.src}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={active.src}
                    alt={active.alt ?? 'Graphic'}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

