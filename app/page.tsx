import Landing from '@/ui/Landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quartz UI',
  description:
    'Quartz UI is a modern component library offering a curated collection of reusable, customizable UI components. Effortlessly build beautiful, responsive interfaces with sidebars, tabs, accordions, animated buttons, badges, and more—designed for seamless integration and rapid development in your next project.',
  openGraph: {
    images:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759754638/Thumbnail_w6bgrf.webp',
  },
};

export default function Home() {
  return <Landing />;
}
