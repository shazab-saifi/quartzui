'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const AnimatedText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div className="flex max-w-4xl flex-wrap justify-center">
      {children.split(' ').map((word, idx) => (
        <motion.span
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
          key={idx}
          className={cn(
            'block leading-10 md:leading-12 lg:leading-14',
            className
          )}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
