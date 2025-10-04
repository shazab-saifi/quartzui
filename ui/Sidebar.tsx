'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  title: string;
  link: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const Sidebar = ({ isOpen, onClose, navItems }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 z-50 h-full w-80 bg-white px-4 py-4 shadow-xl lg:hidden dark:bg-neutral-950"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={onClose}
              >
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
                <h3 className="text-h5 font-bold text-neutral-950 dark:text-white">
                  Quartz UI
                </h3>
              </Link>
              <button
                onClick={onClose}
                className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300"
              >
                <IconX size={20} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={onClose}
                  className="text-para-big rounded-md px-3 py-3 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
