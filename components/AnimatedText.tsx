'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="flex max-w-4xl flex-wrap justify-center">
      {text.split(' ').map((word, idx) => (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: idx * 0.1, ease: 'easeInOut' }}
          key={idx}
          className={cn('inline-block text-4xl font-bold', className)}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
