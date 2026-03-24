'use client';

import { useMotionValue, motion, useSpring } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const HeroLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 300, damping: 30 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const heroSection = containerRef.current?.closest('[data-hero-section]');

    if (!(heroSection instanceof HTMLElement)) {
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const bounds = heroSection.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const percentX = dx / (bounds.width / 2 || 1);
      const percentY = dy / (bounds.height / 2 || 1);

      const maxMove = 50;

      rawX.set(percentX * maxMove);
      rawY.set(percentY * maxMove);
    };

    const handleLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    heroSection.addEventListener('mousemove', handleMove);
    heroSection.addEventListener('mouseleave', handleLeave);

    return () => {
      heroSection.removeEventListener('mousemove', handleMove);
      heroSection.removeEventListener('mouseleave', handleLeave);
    };
  }, [rawX, rawY]);

  const initial = { opacity: 0, filter: 'blur(10px)' };
  const animate = { opacity: 1, filter: 'blur(0px)' };

  return (
    <div ref={containerRef} className="hidden xl:block">
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        style={{ x, y }}
        className="absolute top-full -left-1/6 -rotate-25 2xl:-left-1/3"
      >
        <Image src="tailwind.svg" width={84} height={84} alt="tailwind-logo" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        style={{ x, y }}
        className="absolute top-1/4 -left-1/6 rotate-25 2xl:-left-1/4"
      >
        <Image src="react.svg" width={84} height={84} alt="react-logo" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        style={{ x, y }}
        className="absolute top-full -right-1/6 -rotate-25 2xl:-right-1/3"
      >
        <Image src="motion.svg" width={84} height={84} alt="motion-logo" />
      </motion.div>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.3 }}
        style={{ x, y }}
        className="absolute top-1/4 -right-1/6 rotate-25 2xl:-right-1/4"
      >
        <Image src="nextjs.svg" width={84} height={84} alt="nextjs-logo" />
      </motion.div>
    </div>
  );
};
