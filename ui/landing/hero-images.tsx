'use client';

import Image from 'next/image';
import useResolvedTheme from '@/hooks/useResolvedTheme';
import Motion from '../motion';

const HERO_IMG_DARK_1 =
  'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1766669805/quartzui-hero-image-2_gufuqf.png';
const HERO_IMG_DARK_2 =
  'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1766669803/quartzui-hero-image-1_dgal3y.png';
const HERO_IMG_LIGHT =
  'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1766759127/hero-image-light_vo1ny8.webp';

const HeroImages = () => {
  const resolvedTheme = useResolvedTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="relative min-h-200 w-full pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -bottom-16 left-0 z-10 bg-linear-to-t from-white from-30% to-transparent to-50% dark:from-neutral-950"
      />
      <Motion
        initial={{ opacity: 0, y: -100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.6, 1] }}
        className="[filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.20))] perspective-[4000px]"
      >
        <Image
          src={isDark ? HERO_IMG_DARK_1 : HERO_IMG_LIGHT}
          alt="hero-image-1"
          height={1080}
          width={1020}
          className="absolute translate-x-[10%] rounded-lg border border-neutral-200 dark:border-neutral-800"
          style={{
            transform: 'rotateY(20deg) rotateX(20deg) rotateZ(-5deg)',
          }}
        />
      </Motion>
      <Motion
        initial={{ opacity: 0, y: -100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.5, delay: 1.3, ease: [0.16, 1, 0.6, 1] }}
        className="[filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.20))] perspective-[4000px]"
      >
        <Image
          src={isDark ? HERO_IMG_DARK_2 : HERO_IMG_LIGHT}
          alt="hero-image-2"
          height={1080}
          width={1020}
          className="absolute translate-x-[40%] translate-y-12 rounded-lg border border-neutral-200 dark:border-neutral-800"
          style={{
            transform: 'rotateY(20deg) rotateX(20deg) rotateZ(-5deg)',
          }}
        />
      </Motion>
    </div>
  );
};

export default HeroImages;
