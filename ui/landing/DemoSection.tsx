'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import Marquee from 'react-fast-marquee';

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
    title: 'Floating Dock',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760806965/floating-dock_o9bktj.mp4',
    link: 'floating-dock',
  },
  {
    title: 'Accordian',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760807337/accordian_yhukty.mp4',
    link: 'accordian',
  },
];

const DemoSection = () => {
  const router = useRouter();

  return (
    <div className="relative my-64 w-full mask-x-from-90%">
      <Marquee
        gradient={false}
        speed={35}
        pauseOnHover
        className="flex items-center"
      >
        {videosData.map((item, idx) => (
          <div
            key={idx}
            className={`group mx-3 flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-neutral-900 p-1 shadow-sm transition hover:shadow-md dark:border dark:border-neutral-800`}
            style={{ minWidth: 300, maxWidth: 400, width: '22vw' }}
            onClick={() => router.push(`/docs/${item.link}`)}
            tabIndex={0}
            role="button"
          >
            <video
              src={item.href}
              className="h-62 w-full rounded-lg object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              title={item.title}
            />
            <div className="flex w-full items-center justify-between px-2 pt-2 pb-1 text-neutral-400 transition-colors group-hover:text-white">
              <span className="text-left text-sm font-medium">
                {item.title}
              </span>
              <IconArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default DemoSection;
