'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Heading } from './heading';
import Link from 'next/link';
import { Button } from '@/components/Button';

interface VideoDataType {
  title: string;
  href: string;
  link: string;
}

const videosData: VideoDataType[] = [
  {
    title: 'Tab Select',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760805392/tab-select_ljg0tl.mp4',
    link: 'tab-select',
  },
  {
    title: 'Bento Grid',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807137/bento-grid_awcdmm.mp4',
    link: 'bento-grid',
  },
  {
    title: 'Animated Button',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792644/animated-button_xzqaih.mp4',
    link: 'animated-button',
  },
  {
    title: 'Lines Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806830/lines-card_zpirou.mp4',
    link: 'lines-card',
  },
  {
    title: 'Price Switcher',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806684/price-switcher_b7vnic.mp4',
    link: 'price-switcher',
  },
  {
    title: 'Tilt Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807592/tilt-card_be3t0y.mp4',
    link: 'tilt-card',
  },
  {
    title: 'Expendable Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806141/expendable-card_nxlkal.mp4',
    link: 'expendable-card',
  },
  {
    title: 'Logo Carousel',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1767013267/logo-carousel_ygtjtr.mp4',
    link: 'logo-carousel',
  },
  {
    title: 'Accordian',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807337/accordian_yhukty.mp4',
    link: 'accordian',
  },
];

const DemoSection = () => {
  return (
    <div className="mt-36 flex flex-col items-center gap-16 md:mt-64">
      <div className="w-fit px-4">
        <Heading as="h2" className="text-center">
          Our Components
        </Heading>
        <p className="mt-2 max-w-md text-center text-lg text-neutral-600 sm:mt-4 dark:text-neutral-400">
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
            <CustomVideo key={idx} item={item} />
          ))}
        </Marquee>
      </div>
      <Link href="/docs">
        <Button variant="secondary" className="px-6 text-sm">
          Start Building with Quartz UI
        </Button>
      </Link>
    </div>
  );
};

const CustomVideo = ({ item }: { item: VideoDataType }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter();

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
    <div
      className={`group mx-3 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-neutral-100 p-1 transition dark:border dark:border-neutral-800 dark:bg-neutral-900`}
      style={{ minWidth: 300, maxWidth: 360, width: '22vw' }}
      onClick={() => router.push(`/docs/${item.link}`)}
      tabIndex={0}
      role="button"
      onMouseEnter={handleplay}
      onMouseLeave={handlepause}
    >
      <video
        ref={videoRef}
        src={item.href}
        className="h-52 w-full rounded-lg object-cover"
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="flex w-full items-center justify-between px-2 pt-2 pb-1 text-neutral-600 transition-colors group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white">
        <span className="text-left text-sm font-medium">{item.title}</span>
        <IconArrowUpRight size={16} />
      </div>
    </div>
  );
};

export default DemoSection;
