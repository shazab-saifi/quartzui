'use client';

import AnimatedButton from '@/components/AnimatedButton';

import {
  IconBrandFramerMotion,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandStorybook,
} from '@tabler/icons-react';
import Image from 'next/image';

interface ItemType {
  icon: React.ElementType;
  title: string;
}

const HeroSection = () => {
  const items: ItemType[] = [
    { icon: IconBrandReact, title: 'React.js' },
    { icon: IconBrandFramerMotion, title: 'Motion.dev' },
    { icon: IconBrandNextjs, title: 'Next.js' },
    { icon: IconBrandStorybook, title: 'Storybook.js' },
  ];

  return (
    <div className="mt-16 flex flex-col items-center md:mt-32">
      <div className="z-10 flex flex-col items-center gap-4 md:gap-6">
        <h1 className="md:text-h3 lg:text-h2 max-w-4xl text-center text-3xl font-bold text-neutral-950 dark:text-neutral-100">
          Build Beautiful Interfaces, Faster with Quartz UI
        </h1>
        <p className="md:text-para lg:text-para-big max-w-3xl text-center text-sm text-neutral-600 dark:text-neutral-400">
          Our UI library gives you elegant, production-ready components built
          for speed, flexibility, and creativity. Design smarter, ship faster,
          and focus on what truly matters — your product.
        </p>
      </div>
      <Image
        src="beam.svg"
        alt="light-beams"
        width={1000}
        height={1000}
        className="absolute -top-24 right-12 z-0 opacity-60 dark:opacity-20"
      />
      <div className="z-10 mt-12 space-x-4 md:mt-14 md:space-x-6">
        <AnimatedButton onClick={() => null} className="cursor-pointer">
          Components
        </AnimatedButton>
      </div>
      <div className="mt-16 flex w-[80%] max-w-full flex-wrap justify-between gap-4 md:mt-24 lg:mt-32">
        {items.map(({ title, icon: Icon }, idx) => (
          <div
            key={idx}
            className="mx-auto flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
          >
            <Icon className="size-4 sm:size-6 md:size-8" />
            <span className="sm:text-lg md:text-2xl">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
