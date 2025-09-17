'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import { IconMenu4, IconShadow } from '@tabler/icons-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { title: 'Components', link: '/components' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Owner', link: '/owner' },
    { title: 'Templates', link: '/templates' },
  ];

  return (
    <div className="sticky top-0 left-0 z-50 flex w-full items-center justify-between border-b border-neutral-100 bg-white px-4 py-4 sm:px-20 xl:px-70 dark:border-neutral-800/60 dark:bg-neutral-950">
      <div className="gap-xl flex items-center">
        <Link href="/" className="gap-sm flex items-center">
          <Image
            src="quartzui-light.svg"
            alt="logo"
            width={22}
            height={22}
            className="hidden dark:inline"
          />
          <Image
            src="quartzui-dark.svg"
            alt="logo"
            width={22}
            height={22}
            className="inline dark:hidden"
          />
          <h3 className="text-h5 hidden font-bold sm:block">Quartz UI</h3>
        </Link>
        <div className="gap-lg hidden lg:flex">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-small text-neutral-600 transition-transform hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="gap-md hidden items-center text-neutral-600 lg:flex dark:text-neutral-400">
        <div className="cursor-pointer rounded-md border border-neutral-200 bg-white p-2 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
          <IconShadow size={16} />
        </div>
        <SearchBar />
      </div>
      <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
        <IconMenu4 />
      </button>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navItems={navItems}
      />
    </div>
  );
};

export default Navbar;
