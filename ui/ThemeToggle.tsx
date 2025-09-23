import React, { useState, useEffect } from 'react';
import { Classic } from '@theme-toggles/react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center rounded-md border border-neutral-200 bg-white p-2 px-2 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
    >
      <Classic
        toggled={isDarkMode}
        toggle={setIsDarkMode}
        onPointerEnterCapture={null}
        placeholder={null}
        onPointerLeaveCapture={null}
      />
    </button>
  );
}

export default ThemeToggle;
