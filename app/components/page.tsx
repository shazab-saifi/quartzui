import ComponentPreviewCard from '@/ui/componentsPage/ComponentPreviewCard';
import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components - Quartz UI',
  description:
    'Browse a collection of reusable, modern UI components for your next project. Explore sidebars, tabs, accordions, animated buttons, badges, and more—all designed for seamless integration and customization.',
};

const previewData = [
  {
    title: 'Sidebar',
    desc: 'A collapsible sidebar component for navigation, allowing users to easily access different sections of your app.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474309/sidebar_aouroh.png',
    link: '/components/sidebar',
  },
  {
    title: 'Tab Select',
    desc: 'A tab selection component that lets users switch between different views or content panels with a clean and intuitive UI.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474308/tab-select_rfoehk.png',
    link: '/components/tab-select',
  },
  {
    title: 'Accordion',
    desc: 'An accordion component for expanding and collapsing content sections, perfect for FAQs or grouped information.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474293/accordian_mwmhmu.png',
    link: '/components/accordion',
  },
  {
    title: 'Animated Button',
    desc: 'A button component featuring smooth and modern animation effects to enhance user interaction and engagement.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474292/animated-button_f6nga3.png',
    link: '/components/animated-button',
  },
  {
    title: 'Animated Text',
    desc: 'A text component with engaging animation styles, ideal for drawing attention to important messages or headlines.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474289/animated-text_er4fbi.png',
    link: '/components/animated-text',
  },
  {
    title: 'Badges',
    desc: 'Colorful badge components for displaying statuses, labels, or notifications in a visually appealing way.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/badges_b5dyql.png',
    link: '/components/badge',
  },
  {
    title: 'Scale Card',
    desc: 'A card component that scales up on hover, providing a dynamic and interactive way to highlight content.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/scale-card_acvyub.png',
    link: '/components/scale-card',
  },
  {
    title: 'Floating Dock',
    desc: 'A floating dock for quick access to actions or links, designed to stay visible and accessible on any page.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/floating-dock_hfs4fw.png',
    link: '/components/floating-dock',
  },
  {
    title: 'Pointer Card',
    desc: 'A card component that follows your pointer, creating an interactive and engaging user experience.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/pointer-card_vr0km7.png',
    link: '/components/pointer-card',
  },
  {
    title: 'Expendable Card',
    desc: 'A card that expands to reveal more information, great for showing details on demand without cluttering the UI.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/expendable-cad_a7f4s4.png',
    link: '/components/expendable-card',
  },
  {
    title: 'Button',
    desc: 'A simple and customizable button component suitable for a wide range of actions and use cases.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/button_pyzvsn.png',
    link: '/components/button',
  },
  {
    title: 'Price Switcher',
    desc: 'A price switcher component that allows users to toggle between monthly and annual pricing options with ease.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474287/price-switcher_lldq16.png',
    link: '/components/price-switcher',
  },
];

const page = () => {
  return (
    <div className="mt-16 flex w-full gap-20">
      <div className="hidden w-54 flex-shrink-0 lg:inline">
        <ComponentsBar />
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {previewData.map((item, idx) => (
          <ComponentPreviewCard
            key={item.title + idx}
            src={item.image}
            heading={item.title}
            desc={item.desc}
            link={item.link}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
