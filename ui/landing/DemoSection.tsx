'use client';

import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';

interface VideoDataType {
  title: string;
  href: string;
}

const vidoesData: VideoDataType[] = [
  {
    title: 'Tab Select',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792799/tab-select_dbojth.mp4',
  },
  {
    title: 'Tilt Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792821/tilt-card_kxx7g9.mp4',
  },
  {
    title: 'Animated Button',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792644/animated-button_xzqaih.mp4',
  },
  {
    title: 'Lines Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792746/lines-card_j7f1e4.mp4',
  },
  {
    title: 'Price Switcher',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792776/price-switcher_atze2k.mp4',
  },

  {
    title: 'Bento Grid',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792661/bento-grid_mxi9a7.mp4',
  },
  {
    title: 'Expendable Card',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792695/expendable-card_so02fi.mp4',
  },
  {
    title: 'Floating Dock',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792722/floating-dock_eitsky.mp4',
  },
  {
    title: 'Accordian',
    href: 'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1760792621/accordian_xcl3yd.mp4',
  },
];

const DemoSection = () => {
  const router = useRouter();

  return (
    <div className="relative columns-1 gap-4 overflow-hidden rounded-4xl sm:columns-2 md:columns-3 [&>div]:mb-4">
      <div className="absolute inset-0 z-0 h-full bg-gradient-to-t from-neutral-950 via-neutral-950 via-10% to-transparent" />
      {vidoesData.map((item, idx) => (
        <div key={idx} className="cursor-pointer break-inside-avoid">
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
