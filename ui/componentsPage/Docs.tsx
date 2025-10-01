'use client';

import DocsLayout from '@/docs/layout';
import React from 'react';

import AccordionDoc from '@/docs/accordion.mdx';
import AnimatedButtonDoc from '@/docs/animated-button.mdx';
import AnimatedTextDoc from '@/docs/animated-text.mdx';
import BadgeDoc from '@/docs/badge.mdx';
import BannerDoc from '@/docs/banner.mdx';
import BentoGridDoc from '@/docs/bento-grid.mdx';
import ButtonDoc from '@/docs/button.mdx';
import ExpandableCardDoc from '@/docs/expandable-card.mdx';
import FloatingDockDoc from '@/docs/floating-dock.mdx';
import PointerCardDoc from '@/docs/pointer-card.mdx';
import PriceSwitcherDoc from '@/docs/price-switcher.mdx';
import ScaleCardDoc from '@/docs/scale-card.mdx';
import ScrollProgressDoc from '@/docs/scroll-progress.mdx';
import SidebarDoc from '@/docs/sidebar.mdx';
import TabSelectDoc from '@/docs/tab-select.mdx';

const componentDocs: { [key: string]: React.ComponentType } = {
  accordion: AccordionDoc,
  'animated-button': AnimatedButtonDoc,
  'animated-text': AnimatedTextDoc,
  badge: BadgeDoc,
  banner: BannerDoc,
  'bento-grid': BentoGridDoc,
  button: ButtonDoc,
  'expandable-card': ExpandableCardDoc,
  'floating-dock': FloatingDockDoc,
  'pointer-card': PointerCardDoc,
  'price-switcher': PriceSwitcherDoc,
  'scale-card': ScaleCardDoc,
  'scroll-progress': ScrollProgressDoc,
  sidebar: SidebarDoc,
  'tab-select': TabSelectDoc,
};

const Docs = ({ slug }: { slug: string }) => {
  const key = slug ? slug.toLowerCase() : 'button';
  const ComponentToRender = componentDocs[key] || componentDocs['button'];

  return (
    <div className="transition-colors">
      <DocsLayout>{ComponentToRender && <ComponentToRender />}</DocsLayout>
    </div>
  );
};

export default Docs;
