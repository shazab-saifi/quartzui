'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './searchbar';
import Sidebar from './Sidebar';
import { IconBrandGithub, IconMenu4 } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Components', link: '/docs' },
    { title: 'Pricing', link: '/pricing' },
    {
      title: 'Creator',
      link: 'https://x.com/shazabsaifi_s9',
      isExternal: true,
    },
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
          <h3 className="text-h5 font-bold text-neutral-950 dark:text-neutral-100">
            Quartz UI
          </h3>
        </Link>
        <div className="hidden gap-6 lg:flex">
          {navItems.map((item, idx) =>
            item.isExternal ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                href={item.link}
                className="rounded-sm px-3 py-1 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={idx}
                href={item.link}
                className="rounded-sm px-3 py-1 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="hidden items-center gap-4 text-neutral-600 lg:flex dark:text-neutral-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shazab-saifi/quartzui"
          className="mr-2 transition-colors hover:text-neutral-100"
        >
          <IconBrandGithub size={20} />
        </a>
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
