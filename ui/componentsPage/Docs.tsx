'use client';

import DocsLayout from '@/docs/layout';
import dynamic from 'next/dynamic';
import React from 'react';

const componentDocs: { [key: string]: React.ComponentType } = {
  accordion: dynamic(() => import('@/docs/accordion.mdx')),
  'animated-button': dynamic(() => import('@/docs/animated-button.mdx')),
  'animated-text': dynamic(() => import('@/docs/animated-text.mdx')),
  badge: dynamic(() => import('@/docs/badge.mdx')),
  banner: dynamic(() => import('@/docs/banner.mdx')),
  'bento-grid': dynamic(() => import('@/docs/bento-grid.mdx')),
  button: dynamic(() => import('@/docs/button.mdx')),
  'expandable-card': dynamic(() => import('@/docs/expandable-card.mdx')),
  'floating-dock': dynamic(() => import('@/docs/floating-dock.mdx')),
  'pointer-card': dynamic(() => import('@/docs/pointer-card.mdx')),
  'price-switcher': dynamic(() => import('@/docs/price-switcher.mdx')),
  'scale-card': dynamic(() => import('@/docs/scale-card.mdx')),
  'scroll-progress': dynamic(() => import('@/docs/scroll-progress.mdx')),
  sidebar: dynamic(() => import('@/docs/sidebar.mdx')),
  'tab-select': dynamic(() => import('@/docs/tab-select.mdx')),
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
