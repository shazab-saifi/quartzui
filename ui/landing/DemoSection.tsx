'use client';

import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';

interface VideoDataType {
  title: string;
  href: string;
  link: string;
}

const vidoesData: VideoDataType[] = [
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
    <div className="relative columns-1 gap-4 overflow-hidden rounded-4xl sm:columns-2 md:columns-3 [&>div]:mb-4">
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-6 z-0 h-[60%] bg-gradient-to-t from-white from-12% to-transparent dark:from-neutral-950"
      />
      {vidoesData.map((item, idx) => (
        <div
          key={idx}
          onClick={() => router.push(`/components/${item.link}`)}
          className="cursor-pointer break-inside-avoid"
        >
          <video
            src={item.href}
            className="w-full rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      ))}
      <Button
        variant="secondary"
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 text-sm"
        onClick={() => router.push('/components')}
      >
        More Components
      </Button>
    </div>
  );
};

export default DemoSection;
