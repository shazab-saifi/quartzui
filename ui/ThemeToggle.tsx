import { IconMoon, IconSun } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

import useSound from 'use-sound';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [playLight] = useSound('/pop.mp3', { volume: 0.3 });
  const [playDark] = useSound('/pop!.mp3', { volume: 0.3 });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (savedTheme === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (isDarkMode) {
      playDark();
    } else {
      playLight();
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center rounded-md border border-neutral-200 bg-white p-2 px-2 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
    >
      {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
    </button>
  );
}

export default ThemeToggle;
