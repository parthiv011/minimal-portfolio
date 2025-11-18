'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { IconType } from 'react-icons';

export const AnimatedTooltip = ({
  id,
  Icon,
  label,
  color,
}: {
  id: number;
  Icon: IconType;
  label: string;
  color?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const measureRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    // measure width
    if (measureRef.current) {
      setTextWidth(measureRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    // detect mobile
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // mobile tap-away close
  useEffect(() => {
    if (!isMobile || !isHovered) return;

    const onTapOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousedown', onTapOutside);
    return () => document.removeEventListener('mousedown', onTapOutside);
  }, [isMobile, isHovered]);

  const baseSize = 40;
  return (
    <div
      key={id}
      ref={wrapperRef}
      className="relative z-20 -mr-3 flex items-center justify-center"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered((prev) => !prev)}
    >
      <motion.div
        animate={{
          paddingRight: !isMobile && isHovered ? textWidth + 8 : 8,
          width: isMobile ? baseSize : 'auto',
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="relative flex items-center gap-2 overflow-hidden rounded-full border border-neutral-200 bg-neutral-50 px-2 py-2"
      >
        <Icon className={cn(color, 'size-6 shrink-0')} />

        <AnimatePresence>
          {!isMobile && isHovered && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute left-10 text-sm whitespace-nowrap text-gray-600"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MOBILE LABEL (above icon) */}
      <AnimatePresence>
        {isMobile && isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: -8 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 rounded-full border border-neutral-200 bg-white px-2 py-1 text-sm whitespace-nowrap text-gray-700 shadow-md"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Width measurement */}
      <span
        ref={measureRef}
        className="pointer-events-none absolute px-2 text-sm whitespace-nowrap opacity-0"
      >
        {label}
      </span>
    </div>
  );
};
