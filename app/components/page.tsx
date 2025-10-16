import ComponentPreviewCard from '@/ui/componentsPage/ComponentPreviewCard';
import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components - Quartz UI',
  description:
    'Browse a collection of reusable, modern UI components for your next project. Explore sidebars, tabs, accordions, animated buttons, badges, and more—all designed for seamless integration and customization.',
  openGraph: {
    images:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760620351/ogimage_s4dmmb.png',
  },
};

const previewData = [
  {
    title: 'Tab Select',
    desc: 'A tab selection component that lets users switch between different views or content panels with a clean and intuitive UI.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760601641/Screenshot_from_2025-10-16_13-27-41_dwkpw9.png',
    link: '/components/tab-select',
  },
  {
    title: 'Price Switcher',
    desc: 'A price switcher component that allows users to toggle between monthly and annual pricing options with ease.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760603095/Screenshot_from_2025-10-16_13-54-38_waqas1.png',
    link: '/components/price-switcher',
  },
  {
    title: 'Pointer Card',
    desc: 'A card component that follows your pointer, creating an interactive and engaging user experience.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602832/Screenshot_from_2025-10-16_13-50-13_bip78l.png',
    link: '/components/pointer-card',
  },
  {
    title: 'Expendable Card',
    desc: 'A card that expands to reveal more information, great for showing details on demand without cluttering the UI.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602904/Screenshot_from_2025-10-16_13-51-26_goiwaw.png',
    link: '/components/expendable-card',
  },
  {
    title: 'Lines Card',
    desc: 'A card component featuring animated SVG lines for a visually striking and dynamic presentation.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760604707/Screenshot_from_2025-10-16_14-21-30_zi2lhw.png',
    link: '/components/lines-card',
  },
  {
    title: 'Tilt Card',
    desc: 'A card component with a 3D tilt effect that responds to your pointer, creating an interactive and modern visual experience.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760603718/Screenshot_from_2025-10-16_14-04-57_qsznjk.png',
    link: '/components/tilt-card',
  },
  {
    title: 'Floating Dock',
    desc: 'A floating dock for quick access to actions or links, designed to stay visible and accessible on any page.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602699/Screenshot_from_2025-10-16_13-47-56_viqbca.png',
    link: '/components/floating-dock',
  },
  {
    title: 'Button',
    desc: 'A simple and customizable button component suitable for a wide range of actions and use cases.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760603008/Screenshot_from_2025-10-16_13-53-11_lit16t.png',
    link: '/components/button',
  },
  {
    title: 'Animated Button',
    desc: 'A button component featuring smooth and modern animation effects to enhance user interaction and engagement.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602142/Screenshot_from_2025-10-16_13-38-26_qfnnkg.png',
    link: '/components/animated-button',
  },
  {
    title: 'Badges',
    desc: 'Colorful badge components for displaying statuses, labels, or notifications in a visually appealing way.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602262/Screenshot_from_2025-10-16_13-40-41_hkebsf.png',
    link: '/components/badge',
  },
  {
    title: 'Text Shimmer',
    desc: 'A text component that uses a shimmering animated effect to draw attention, perfect for highlighting headings, labels, or important information.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760604405/Screenshot_from_2025-10-16_14-16-12_mxjefe.png',
    link: '/components/text-shimmer',
  },
  {
    title: 'Animated Text',
    desc: 'A text component with engaging animation styles, ideal for drawing attention to important messages or headlines.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760602397/Screenshot_from_2025-10-16_13-42-56_k6tj8m.png',
    link: '/components/animated-text',
  },
  // {
  //   title: 'Scale Card',
  //   desc: 'A card component that scales up on hover, providing a dynamic and interactive way to highlight content.',
  //   image:
  //     'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474288/scale-card_acvyub.png',
  //   link: '/components/scale-card',
  // },
  {
    title: 'Bento Grid',
    desc: 'A dynamic bento grid layout component featuring interactive, animated tiles that respond to pointer movement for an engaging UI experience.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760605055/Screenshot_from_2025-10-16_14-27-18_zgtykg.png',
    link: '/components/bento-grid',
  },
  {
    title: 'Accordion',
    desc: 'An accordion component for expanding and collapsing content sections, perfect for FAQs or grouped information.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760601765/Screenshot_from_2025-10-16_13-32-25_s8ddct.png',
    link: '/components/accordion',
  },
  {
    title: 'Dialog',
    desc: 'A dialog component with smooth 3D enter and exit animations, perfect for drawing attention to important information or user interactions.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1760603832/Screenshot_from_2025-10-16_14-06-54_wmkpi5.png',
    link: '/components/dialog',
  },
  {
    title: 'Sidebar',
    desc: 'A collapsible sidebar component for navigation, allowing users to easily access different sections of your app.',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759474309/sidebar_aouroh.png',
    link: '/components/sidebar',
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
