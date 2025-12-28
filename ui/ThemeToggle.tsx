import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = () => {
    const nextTheme =
      theme === 'light'
        ? 'dark'
        : theme === 'dark'
          ? 'light'
          : systemTheme === 'dark'
            ? 'light'
            : 'dark';

    const applyTheme = () => setTheme(nextTheme);

    if (document.startViewTransition) {
      document.startViewTransition(applyTheme);
    } else {
      applyTheme();
    }
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="flex cursor-pointer items-center rounded-md border border-neutral-200 bg-white p-2 px-2 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
    >
      <span
        className={`transition-opacityz duration-200 ease-in-out ${theme === 'dark' ? 'scale-100 opacity-100' : 'pointer-events-none absolute scale-90 opacity-0'} `}
      >
        <IconSun size={16} />
      </span>
      <span
        className={`transition-opacity duration-200 ease-in-out ${theme !== 'dark' ? 'scale-100 opacity-100' : 'pointer-events-none absolute scale-90 opacity-0'} `}
      >
        <IconMoon size={16} />
      </span>
    </button>
  );
}

export default ThemeToggle;
