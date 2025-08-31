'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const Banner = () => {
  return (
    <motion.div
      className="relative min-w-4xl overflow-hidden rounded-4xl bg-neutral-950"
      initial={{
        borderImage:
          'linear-gradient(to right, transparent, #0a1a3c00, #2563eb00, #0a1a3c00, transparent) 1',
      }}
      animate={{
        borderImage:
          'linear-gradient(to right, transparent, #0a1a3cb3, #2563ebb3, #0a1a3cb3, transparent) 1',
      }}
      transition={{
        duration: 1,
      }}
      style={{
        borderStyle: 'solid',
        borderWidth: '2px',
      }}
    >
      <div className="flex max-w-md flex-col gap-4 px-8 py-16">
        <h1 className="text-4xl font-semibold">
          Quartz.ui Presents This Awesome Banner Component
        </h1>
        <p className="text-neutral-300">
          This is a responsive Banner Component designed to enhance your
          application&apos;s visual appeal. Easily customizable and fully
          adaptive.
        </p>
      </div>
      <Image
        src="https://ui.aceternity.com/linear.webp"
        alt="demo-image"
        width={400}
        height={300}
        className="absolute -right-24 -bottom-4 rounded-xl"
      />
    </motion.div>
  );
};

export default Banner;
