'use client';

import { Button } from '@/components/Button';
import TextShimmer from '@/components/TextShimmer';
import {
  IconBrandFramerMotion,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandStorybook,
  IconBrandTailwind,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import AnimatedText from '@/components/AnimatedText';
import Marquee from 'react-fast-marquee';
import { Heading } from './heading';

interface ItemType {
  icon: React.ElementType;
  title: string;
}

const items: ItemType[] = [
  { icon: IconBrandReact, title: 'React.js' },
  { icon: IconBrandFramerMotion, title: 'Motion.dev' },
  { icon: IconBrandNextjs, title: 'Next.js' },
  { icon: IconBrandStorybook, title: 'Storybook.js' },
  { icon: IconBrandGithub, title: 'Github' },
  { icon: IconBrandTailwind, title: 'Tailwind.css' },
];

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="mt-16 flex flex-col items-center overflow-hidden md:mt-28">
      <div className="z-10 flex flex-col items-center gap-4 md:gap-6">
        <motion.button
          initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
          onClick={() => router.push('/components')}
          className="mb-4 flex cursor-pointer items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs dark:border-neutral-800 dark:bg-neutral-900"
        >
          <Image
            src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
            alt="logo"
            width={12}
            height={12}
            className="hidden dark:inline"
          />
          <Image
            src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
            alt="logo"
            width={12}
            height={12}
            className="inline dark:hidden"
          />
          <TextShimmer>
            Beautiful components. Effortless experience. »
          </TextShimmer>
        </motion.button>
        <div className="max-w-2xl">
          <Heading as="h1">
            <AnimatedText>
              Build Beautiful Interfaces, Faster with Quartz UI
            </AnimatedText>
          </Heading>
        </div>
        <motion.p
          initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="md:text-para max-w-xl text-center text-sm text-neutral-600 dark:text-neutral-400"
        >
          Our UI library gives you elegant, production-ready components built
          for speed, flexibility, and creativity. Design smarter, ship faster,
          and focus on what truly matters your product.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="z-10 mt-12 space-x-4 md:mt-14 md:space-x-6"
      >
        <Button
          variant="secondary"
          onClick={() => router.push('/components')}
          className="px-6 text-sm"
        >
          Components
        </Button>
        <Button
          onClick={() =>
            (window.location.href = 'https://x.com/shazabsaifi_s9')
          }
          className="px-5 text-sm"
        >
          Request component
        </Button>
      </motion.div>
      <div className="mt-16 flex justify-between gap-4 overflow-hidden mask-r-from-80% mask-l-from-80% sm:w-[80%] md:mt-24 lg:mt-32">
        <Marquee>
          <div className="flex justify-between gap-16">
            {items.map(({ title, icon: Icon }, idx) => (
              <div
                key={idx}
                className="mx-auto flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
              >
                <Icon className="size-4 md:size-6" />
                <span className="md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
