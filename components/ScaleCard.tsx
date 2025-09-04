'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';

const ScaleCard = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      initial={false}
      animate={{ scale: hovered ? 1.05 : 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex max-w-xs flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-none"
    >
      <div className="overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg?_gl=1*149hc7w*_ga*MTk4MjEwNjY3Ny4xNzMxMDc3NTk0*_ga_8JE65Q40S6*czE3NTY5NjYyNDckbzE4MiRnMSR0MTc1Njk2NjI2MyRqNDQkbDAkaDA."
          alt="image"
          width={300}
          height={200}
          className={`w-full transition-transform ${hovered ? 'scale-115' : ''}`}
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
    </motion.div>
  );
};

export default ScaleCard;
