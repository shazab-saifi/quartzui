'use client';

import * as React from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';

import { Button } from '@/components/Button';
import AnimatedButton from '@/components/AnimatedButton';
import Accordion from '@/components/Accordion';
import AnimatedText from '@/components/AnimatedText';
import Badge from '@/components/Badge';
import Banner from '@/components/Banner';
import BentoGrid from '@/components/BentoGrid';
import ExpandableCard from '@/components/ExpandableCard';
import FloatingDock from '@/components/FloatingDock';
import PointerCard from '@/components/PointerCard';
import PriceSwitcher from '@/components/PriceSwitcher';
import ScaleCard from '@/components/ScaleCard';
import ScrollProgress from '@/components/ScrollProgress';
import Sidebar from '@/components/Sidebar';
import TabSelect from '@/components/TabSelect';

const scope = {
  React,
  Button,
  AnimatedButton,
  Accordion,
  AnimatedText,
  Badge,
  Banner,
  BentoGrid,
  ExpandableCard,
  FloatingDock,
  PointerCard,
  PriceSwitcher,
  ScaleCard,
  ScrollProgress,
  Sidebar,
  TabSelect,
};

export default function LiveCode({ code }: { code: string }) {
  return (
    <LiveProvider code={code.trim()} scope={scope} language="jsx">
      <div className="overflow-hidden rounded-xl shadow">
        <div className="flex items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 py-20 dark:border-neutral-900 dark:bg-neutral-950">
          <LivePreview />
        </div>
        <LiveError className="bg-red-50 p-2 text-red-500" />
      </div>
    </LiveProvider>
  );
}
