import { useEffect, useState } from 'react';

const useResolvedTheme = (): 'light' | 'dark' => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      const observer = new MutationObserver(() => {
        setTheme(root.classList.contains('dark') ? 'dark' : 'light');
      });
      setTheme(root.classList.contains('dark') ? 'dark' : 'light');
      observer.observe(root, { attributes: true, attributeFilter: ['class'] });
      return () => observer.disconnect();
    }
  }, []);

  return theme;
};

export default useResolvedTheme;
