'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const variants = {
  initial: {
    opacity: 0,
    y: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  exit: {
    opacity: 0,
    filter: 'blur(10px)',
    y: '-100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
};

type LogoCarouselProps = {
  delay?: number;
  logos: string[];
};

const LogoCarousel = ({ delay, logos }: LogoCarouselProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!logos || logos.length === 0) return;
    const indexInterval = setInterval(() => {
      setIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(indexInterval);
  }, [logos]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="relative flex h-12 w-48 items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={logos[index]}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut', delay }}
          className="absolute top-0 left-0 flex h-16 w-40 items-center justify-center"
        >
          <Image
            src={logos[index]}
            alt={`logo-${logos[index]}`}
            width={160}
            height={64}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LogoCarousel;
