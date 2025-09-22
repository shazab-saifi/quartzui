'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
} from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Pointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string;
}) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: 'none',
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-white text-sky-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className="flex min-w-max items-center gap-1 rounded-lg border border-neutral-200 bg-sky-500 p-1 text-lg leading-0 font-semibold whitespace-nowrap text-white backdrop-blur-xs dark:border-neutral-700"
      >
        <Image src="quartzui-light.svg" alt="quartzui" width={24} height={24} />
        <span>{title || 'Quartz UI'}</span>
      </motion.div>
    </motion.div>
  );
};

const PointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isInsideRect, setIsInsideRect] = useState<boolean>(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsInsideRect(true)}
      onMouseLeave={() => setIsInsideRect(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: 'none' }}
      className={cn('relative', className)}
    >
      <AnimatePresence>
        {isInsideRect && <Pointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children ?? (
        <div className="pointer-events-none flex max-w-xs flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow dark:border-neutral-800 dark:bg-neutral-950">
          <div className="overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg?_gl=1*149hc7w*_ga*MTk4MjEwNjY3Ny4xNzMxMDc3NTk0*_ga_8JE65Q40S6*czE3NTY5NjYyNDckbzE4MiRnMSR0MTc1Njk2NjI2MyRqNDQkbDAkaDA."
              alt="image"
              width={300}
              height={200}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-8 p-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Awesome Hover Card Component
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                This card demonstrates a stylish hover effect, perfect for
                showcasing interactive UI elements or highlighting important
                information in your application.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                September 4th, 2025
              </span>
              <button className="rounded-lg bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white dark:bg-white dark:text-black">
                Visit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PointerCard;
