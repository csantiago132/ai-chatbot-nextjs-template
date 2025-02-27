import React, { useEffect, useState, useContext } from 'react';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

export interface CarouselProps {
  items: Array<{
    node: React.ReactNode | null;
    containerProps?: React.HTMLProps<HTMLDivElement> & MotionProps;
  }>;
}

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  return (
      <div
        className="relative block w-full overflow-x-scroll overscroll-x-auto scroll-smooth bg-neutral-200 dark:bg-black"
        ref={carouselRef}
      >
        <div
          className={cn(
            'absolute right-0 z-[1000] h-auto w-[4%] overflow-hidden bg-gradient-to-l',
          )}
        />

        <div className={cn('inline-flex pt-2 py-12 gap-4 pl-8', 'max-w-7xl mx-auto ')}>
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
                y: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: 'easeOut',
                  once: true,
                },
              }}
              {...item.containerProps}
              key={'card' + index}
              className="overflow-hidden rounded-3xl"
            >
              {item.node}
            </motion.div>
          ))}
        </div>
      </div>
  );
};
