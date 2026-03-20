'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Heading } from './heading';
import Link from 'next/link';
import { Button } from '@/components/Button';

interface VideoDataType {
  title: string;
  href: string;
  link: string;
  desc: string;
}

const videosData: (VideoDataType & { desc: string })[] = [
  {
    title: 'Tab Select',
    desc: 'Animated tab switcher.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760805392/tab-select_ljg0tl.mp4',
    link: 'tab-select',
  },
  {
    title: 'Bento Grid',
    desc: 'Modern bento grid layout.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807137/bento-grid_awcdmm.mp4',
    link: 'bento-grid',
  },
  {
    title: 'Animated Button',
    desc: 'Button with smooth animation.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792644/animated-button_xzqaih.mp4',
    link: 'animated-button',
  },
  {
    title: 'Lines Card',
    desc: 'Card with animated lines.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806830/lines-card_zpirou.mp4',
    link: 'lines-card',
  },
  {
    title: 'Price Switcher',
    desc: 'Toggle pricing plans.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806684/price-switcher_b7vnic.mp4',
    link: 'price-switcher',
  },
  {
    title: 'Tilt Card',
    desc: 'Card follows mouse tilt.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807592/tilt-card_be3t0y.mp4',
    link: 'tilt-card',
  },
  {
    title: 'Expendable Card',
    desc: 'Show or hide card content.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806141/expendable-card_nxlkal.mp4',
    link: 'expendable-card',
  },
  {
    title: 'Logo Carousel',
    desc: 'Scroll company logos.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1767013267/logo-carousel_ygtjtr.mp4',
    link: 'logo-carousel',
  },
  {
    title: 'Accordion',
    desc: 'Expandable/collapsible panels.',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807337/accordian_yhukty.mp4',
    link: 'accordion',
  },
];

const DemoSection = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-16 border-y border-neutral-200 px-4 py-28 sm:px-8 md:mt-16 md:py-36 lg:px-20 2xl:px-60 dark:border-neutral-800">
      <div className="w-fit">
        <Heading as="h2" className="text-center">
          Our Components
        </Heading>
        <p className="mt-2 max-w-md text-center text-neutral-600 sm:mt-4 md:text-lg dark:text-neutral-400">
          Explore beautiful, production-ready React components built for speed
          and flexibility.
        </p>
      </div>
      <div className="relative w-full mask-x-from-80%">
        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover
          className="flex items-center"
        >
          {videosData.map((item, idx) => (
            <ComponentCard key={idx} item={item} />
          ))}
        </Marquee>
      </div>
      <Link href="/docs">
        <Button variant="secondary" className="px-6 text-sm">
          View All Components
        </Button>
      </Link>
    </div>
  );
};

const ComponentCard = ({ item }: { item: VideoDataType }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleplay = () => {
    if (!videoRef.current) return;
    videoRef.current?.play();
  };

  const handlepause = () => {
    if (!videoRef.current) return;
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      href={`/docs/${item.link}`}
      className="group mx-3 block cursor-pointer"
      style={{ minWidth: 300, maxWidth: 360, width: '22vw' }}
      onMouseEnter={handleplay}
      onMouseLeave={handlepause}
    >
      <div className="h-60 w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <video
          ref={videoRef}
          src={item.href}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      <div className="mt-4 w-full">
        <div className="flex items-center gap-2 overflow-hidden text-sm font-semibold text-neutral-950 dark:text-neutral-100">
          <span className="text-left">{item.title}</span>
          <IconArrowUpRight
            size={16}
            className="translate-y-full transition-transform duration-150 group-hover:translate-y-0"
          />
        </div>
        <p className="mt-1 text-sm text-balance text-neutral-600 dark:text-neutral-400">
          {item.desc}
        </p>
      </div>
    </Link>
  );
};

export default DemoSection;
