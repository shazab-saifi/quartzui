'use client';

import {
  IconAd2,
  IconAnalyze,
  IconApi,
  IconBlendMode,
  IconBook,
  IconBrandDrops,
  IconBrandPagekit,
  IconCode,
  IconDashboard,
  IconExchange,
  IconGenderEpicene,
  IconLayoutSidebar,
  IconPencilSearch,
  IconSelector,
  IconSettings,
  IconSquareRoundedLetterQFilled,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  sections?: {
    title: string;
    items: {
      title: string;
      icon: React.ReactElement;
      href: string;
    }[];
  }[];
  profile?: {
    avatar: string;
    name: string;
    email: string;
  };
}

interface HoverObjTypes {
  sectionIdx: number | null;
  idx: number | null;
}

const Sidebar = ({ sections, profile }: SidebarProps) => {
  const [hoveredItem, setHoveredItem] = useState<HoverObjTypes | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const defaultSections = [
    {
      title: 'Platform',
      items: [
        { title: 'Playground', icon: <IconCode />, href: '/playground' },
        { title: 'Models', icon: <IconDashboard />, href: '/models' },
        { title: 'Documentation', icon: <IconBook />, href: '/docs' },
        { title: 'Settings', icon: <IconSettings />, href: '/settings' },
        {
          title: 'Integrations',
          icon: <IconBlendMode />,
          href: '/integrations',
        },
        { title: 'API Reference', icon: <IconApi />, href: '/api' },
        { title: 'Changelog', icon: <IconExchange />, href: '/changelog' },
      ],
    },
    {
      title: 'Projects',
      items: [
        {
          title: 'Design Studio',
          icon: <IconBrandDrops />,
          href: '/projects/design-studio',
        },
        {
          title: 'Analytics Suite',
          icon: <IconAnalyze />,
          href: '/projects/analytics',
        },
        {
          title: 'Content Hub',
          icon: <IconBrandPagekit />,
          href: '/projects/content',
        },
        {
          title: 'Marketing Portal',
          icon: <IconAd2 />,
          href: '/projects/marketing',
        },
        {
          title: 'Research Lab',
          icon: <IconPencilSearch />,
          href: '/projects/research',
        },
        {
          title: 'QA Center',
          icon: <IconGenderEpicene />,
          href: '/projects/qa',
        },
      ],
    },
  ];

  // Sidebar width classes
  // Don't change px on open/close, always use px-2
  const sidebarWidth = open ? 'w-fit' : 'w-64';

  return (
    <aside
      className={`flex h-screen ${sidebarWidth} flex-col justify-between border-r border-neutral-200 bg-white p-2 py-4 text-neutral-700 transition-all duration-200 dark:border-white/10 dark:bg-neutral-900 dark:text-white`}
    >
      <div className={`flex items-center justify-between`}>
        {!open && <IconSquareRoundedLetterQFilled size={28} />}
        <button
          type="button"
          aria-label="Toggle sidebar"
          className="inline-flex cursor-pointer items-center rounded-md p-2 text-neutral-700 transition hover:bg-neutral-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:text-white dark:hover:bg-white/5 dark:focus-visible:ring-white/30"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IconLayoutSidebar size={20} />
        </button>
      </div>

      <nav className={`mt-4 flex flex-1 flex-col gap-4 overflow-y-auto`}>
        {(sections ?? defaultSections).map((section, sectionIdx) => (
          <div key={sectionIdx} className="flex flex-col gap-2">
            {!open && (
              <p className="px-2 text-left text-xs font-medium tracking-wide text-neutral-700 dark:text-neutral-200">
                {section.title}
              </p>
            )}
            <div className="flex flex-col">
              {section.items.map(({ title, icon, href }, idx) => (
                <Link
                  key={`${sectionIdx}-${idx}`}
                  href={href}
                  onMouseEnter={() => setHoveredItem({ sectionIdx, idx })}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative flex items-center ${open ? 'justify-center' : 'gap-3'} rounded-md p-2 text-sm text-neutral-900 transition dark:text-white`}
                >
                  <AnimatePresence>
                    {hoveredItem &&
                      hoveredItem.sectionIdx === sectionIdx &&
                      hoveredItem.idx === idx && (
                        <motion.span
                          layoutId="hovered-span"
                          className="absolute inset-0 rounded-md bg-neutral-200/70 dark:bg-neutral-800/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                  </AnimatePresence>
                  <span className="z-10 text-neutral-900 transition dark:text-white">
                    {React.cloneElement(icon, { size: 20 })}
                  </span>
                  {!open && <span className="z-10 truncate">{title}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-2 border-t border-neutral-200 pt-3 dark:border-white/10">
        <div className={`flex items-center justify-between gap-3`}>
          <div
            className={`flex items-center ${open ? 'justify-center gap-0' : 'gap-3'}`}
          >
            <Image
              src={
                profile?.avatar ??
                'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?_gl=1*o2gzc1*_ga*MTk4MjEwNjY3Ny4xNzMxMDc3NTk0*_ga_8JE65Q40S6*czE3NTY0NjIxMzkkbzE4MSRnMSR0MTc1NjQ2MjE2MyRqMzYkbDAkaDA.'
              }
              alt="profile-avatar"
              width={36}
              height={36}
              className="aspect-square rounded-lg object-cover"
              unoptimized
            />
            {!open && (
              <div className="leading-tight">
                <p className="text-sm font-medium text-neutral-900 dark:text-white/90">
                  {profile?.name ?? 'Neil'}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {profile?.email ?? 'neil@example.com'}
                </p>
              </div>
            )}
          </div>
          {!open && (
            <button
              type="button"
              aria-label="Account options"
              className={`group flex items-center ${open ? 'gap-0' : 'gap-3'} rounded-md p-2 text-neutral-900 transition hover:bg-neutral-100 dark:text-white dark:hover:bg-white/5`}
            >
              <IconSelector size={18} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
