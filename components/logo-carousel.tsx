'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState, ReactNode, isValidElement } from 'react';

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

type Logo = string | ReactNode;

type LogoCarouselProps = {
  delay?: number;
  logos: Logo[];
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

  // For motion key, use string if available, otherwise fallback to index
  const currentLogo = logos[index];
  const key =
    typeof currentLogo === 'string'
      ? currentLogo
      : isValidElement(currentLogo) && currentLogo.key != null
        ? currentLogo.key
        : `logo-${index}`;

  return (
    <div className="relative flex h-12 w-48 items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={key}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut', delay }}
          className="absolute top-0 left-0 flex h-16 w-40 items-center justify-center"
        >
          {typeof currentLogo === 'string' ? (
            <Image
              src={currentLogo}
              alt={`logo-${currentLogo}`}
              width={160}
              height={64}
            />
          ) : (
            currentLogo
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LogoCarousel;
