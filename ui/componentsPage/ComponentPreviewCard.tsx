'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const ComponentPreviewCard = ({
  src,
  heading,
  desc,
  link,
  idx,
}: {
  src: string;
  heading: string;
  desc: string;
  link: string;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay: idx * 0.1 }}
      className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 sm:h-72 lg:h-76 dark:border-neutral-800"
    >
      <Link href={link}>
        <Image
          src={src}
          className="absolute z-0 h-full w-full object-cover transition-transform group-hover:scale-112"
          width={448}
          height={248}
          alt="preview-image"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 z-20 w-full p-6 text-neutral-50 dark:text-white">
          <div className="flex items-center gap-2 font-semibold">
            <span>{heading}</span>
            <IconArrowUpRight
              size={16}
              className="invisible group-hover:visible"
            />
          </div>
          <p className="mt-2 text-sm text-neutral-200 dark:text-neutral-400">
            {desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComponentPreviewCard;
