'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from './Button';

const Banner = () => {
  return (
    <motion.div className="group relative min-w-4xl overflow-hidden rounded-4xl border border-neutral-800 bg-neutral-950">
      <div className="flex max-w-3xl flex-col gap-12 p-20">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">
            Ready to Build Something Amazing?
          </h1>
          <p className="max-w-[400px] text-neutral-300">
            Start using our UI library today and bring your ideas to life
            faster, cleaner, and smarter. Your next project deserves the best
            tools.
          </p>
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="w-fit bg-gradient-to-b from-neutral-100 to-neutral-300"
        >
          Documentation
        </Button>
      </div>
      <Image
        src="copy.webp"
        alt="demo-image1"
        width={500}
        height={300}
        className="absolute -right-4 -bottom-18 -rotate-6 rounded-lg border border-neutral-800 transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-[8deg]"
      />
      <Image
        src="demo-white.webp"
        alt="demo-image2"
        width={500}
        height={300}
        className="absolute -right-24 -bottom-8 -rotate-[4deg] rounded-lg border transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-[6deg]"
      />
    </motion.div>
  );
};

export default Banner;
