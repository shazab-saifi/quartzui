'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useMemo } from 'react';

interface TextShimmerProps {
  duration?: number;
  children: string;
  className?: string;
  spread?: number;
  baseColor?: string;
  shimmerColor?: string;
}

const TextShimmer = ({
  duration = 3,
  children,
  className,
  spread = 2,
  baseColor = '#FFF',
  shimmerColor = '#000',
}: TextShimmerProps) => {
  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <motion.p
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={
        {
          '--spread': `${dynamicSpread}px`,
          '--base-color': baseColor,
          '--base-gradient-color': shimmerColor,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
      className={cn(
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        'text-transparent',
        '[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export default TextShimmer;
