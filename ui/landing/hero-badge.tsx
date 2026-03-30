'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 left-1/2 grid -translate-x-1/2 grid-cols-3 grid-rows-3 mask-radial-from-10% mask-radial-to-60 mask-radial-at-center"
    >
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="h-full w-full border" />
      ))}
      <div className="flex items-center gap-2 border border-neutral-200 p-2 md:p-4 dark:border-neutral-800">
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
          alt="illustration"
          width={144}
          height={144}
          className="hidden dark:inline"
        />
        <Image
          src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
          alt="illustration"
          width={144}
          height={144}
          className="inline dark:hidden"
        />
      </div>
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="h-full w-full border" />
      ))}
    </motion.div>
  );
};

export default HeroBadge;
