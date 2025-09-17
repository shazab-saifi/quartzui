'use client';

import ComponentsBar from '@/ui/componentsPage/ComponentsBar';
import DocsLayout from '@/docs/layout';
import { Button } from '@/components/Button';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const componentDocs: { [key: string]: React.ComponentType } = {
  Accordion: dynamic(() => import('@/docs/accordion.mdx')),
  'Animated Button': dynamic(() => import('@/docs/animated-button.mdx')),
  'Animated Text': dynamic(() => import('@/docs/animated-text.mdx')),
  Badge: dynamic(() => import('@/docs/badge.mdx')),
  Banner: dynamic(() => import('@/docs/banner.mdx')),
  'Bento Grid': dynamic(() => import('@/docs/bento-grid.mdx')),
  Button: dynamic(() => import('@/docs/button.mdx')),
  'Expandable Card': dynamic(() => import('@/docs/expandable-card.mdx')),
  'Floating Dock': dynamic(() => import('@/docs/floating-dock.mdx')),
  'Pointer Card': dynamic(() => import('@/docs/pointer-card.mdx')),
  'Price Switcher': dynamic(() => import('@/docs/price-switcher.mdx')),
  'Scale Card': dynamic(() => import('@/docs/scale-card.mdx')),
  'Scroll Progress': dynamic(() => import('@/docs/scroll-progress.mdx')),
  Sidebar: dynamic(() => import('@/docs/sidebar.mdx')),
  'Tab Select': dynamic(() => import('@/docs/tab-select.mdx')),
};

const Page = () => {
  const [clickedItem, setClickedItem] = useState<{
    sectionIdx: number | null;
    idx: number | null;
  }>({ sectionIdx: 0, idx: 0 });

  const sections = [
    { title: 'Buttons' },
    { title: 'Cards' },
    { title: 'Other Components' },
  ];

  const components = [
    { title: 'Accordion', category: 'Other Components' },
    { title: 'Animated Button', category: 'Buttons' },
    { title: 'Animated Text', category: 'Other Components' },
    { title: 'Banner', category: 'Other Components' },
    { title: 'Bento Grid', category: 'Other Components' },
    { title: 'Button', category: 'Buttons' },
    { title: 'Expandable Card', category: 'Cards' },
    { title: 'Floating Dock', category: 'Other Components' },
    { title: 'Pointer Card', category: 'Cards' },
    { title: 'Price Switcher', category: 'Other Components' },
    { title: 'Scale Card', category: 'Cards' },
    { title: 'Scroll Progress', category: 'Other Components' },
    { title: 'Sidebar', category: 'Other Components' },
    { title: 'Tab Select', category: 'Other Components' },
    { title: 'Badge', category: 'Other Components' },
  ];

  const getClickedComponentTitle = () => {
    if (clickedItem.sectionIdx === null || clickedItem.idx === null)
      return null;
    const section = sections[clickedItem.sectionIdx];
    const filteredComponents = components.filter(
      (c) => c.category === section.title
    );
    return filteredComponents[clickedItem.idx]?.title;
  };

  const ComponentToRender =
    componentDocs[getClickedComponentTitle() || 'Button'];

  return (
    <div className="mt-16 flex w-full justify-between">
      <div className="w-54 flex-shrink-0">
        <ComponentsBar
          clickedItem={clickedItem}
          setClickedItem={setClickedItem}
        />
      </div>
      <div>
        <DocsLayout>{ComponentToRender && <ComponentToRender />}</DocsLayout>
      </div>
      <div className="space-y-sm h-fit max-w-54 rounded-lg border border-neutral-200 [background-image:linear-gradient(125deg,theme(colors.neutral.100),theme(colors.neutral.50))] [background-position:0_0] [background-origin:padding-box] p-4 dark:border-none dark:[background-image:linear-gradient(125deg,theme(colors.neutral.800),theme(colors.neutral.900))]">
        <p className="text-para font-semibold text-black dark:text-neutral-200">
          Hii, I&apos;m Shazab. I&apos;m the creater of Quartz UI.
        </p>
        <div className="space-y-md">
          <p className="text-small text-neutral-600 dark:text-neutral-400">
            Quartz UI is a modern React component library focused on simplicity,
            accessibility, and beautiful design.
          </p>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-xl bg-neutral-200 font-normal text-black hover:bg-neutral-300"
            onClick={() =>
              window.open('https://x.com/shazabsaifi_s9', '_blank')
            }
          >
            Follor on 𝕏
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
