'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import { IconMenu4 } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Components', link: '/components' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Owner', link: '/owner' },
  ];

  return (
    <nav className="sticky top-0 left-0 z-50 flex w-full items-center justify-between border-b border-neutral-100 bg-white px-4 py-4 sm:px-16 md:px-20 2xl:px-70 dark:border-neutral-800/60 dark:bg-neutral-950">
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
        <ThemeToggle />
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
    </nav>
  );
};

export default Navbar;
