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
      className="group mx-auto cursor-pointer md:mx-0"
    >
      <Link href={link}>
        <div className="h-52 w-84 overflow-hidden rounded-3xl border-2 border-neutral-200 transition-transform duration-300 group-hover:scale-105 dark:border-neutral-800">
          <Image
            src={src}
            className="z-0 h-full w-full object-cover duration-300 group-hover:scale-112"
            width={448}
            height={248}
            alt="preview-image"
          />
        </div>

        <div className="mt-6 w-full max-w-84">
          <div className="flex items-center gap-2 overflow-hidden text-sm font-semibold">
            <span>{heading}</span>
            <IconArrowUpRight
              size={16}
              className="translate-y-full transition-transform duration-150 group-hover:translate-y-0"
            />
          </div>
          <p className="mt-2 text-sm text-balance text-neutral-600 dark:text-neutral-400">
            {desc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComponentPreviewCard;
