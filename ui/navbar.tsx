'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './searchbar';
import Sidebar from './Sidebar';
import { IconMenu4 } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Components', link: '/docs' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Creator', link: 'https://x.com/shazabsaifi_s9' },
  ];

  return (
    <nav className="sticky top-0 left-0 z-40 flex w-full items-center justify-between border-b border-neutral-100 bg-white px-4 py-4 sm:px-8 dark:border-neutral-800/60 dark:bg-neutral-950">
      <div className="flex items-center gap-24">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg"
            alt="logo"
            width={22}
            height={22}
            className="hidden dark:inline"
          />
          <Image
            src="https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296311/quartzui-dark_ixfmns.svg"
            alt="logo"
            width={22}
            height={22}
            className="inline dark:hidden"
          />
          <h3 className="text-h5 hidden font-bold text-neutral-950 sm:block dark:text-neutral-100">
            Quartz UI
          </h3>
        </Link>
        <div className="hidden gap-8 lg:flex">
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
      <div className="hidden items-center gap-4 text-neutral-600 lg:flex dark:text-neutral-400">
        <ThemeToggle />
        <SearchBar />
      </div>
      <button
        className="text-neutral-950 lg:hidden dark:text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
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
