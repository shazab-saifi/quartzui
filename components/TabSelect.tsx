'use client';

import { useEffect, useRef, useState } from 'react';

const TabSelect = ({ tabs }: { tabs: string[] }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const idx = tabs.indexOf(activeTab);
    const activeBtn = tabButtonRefs.current[idx];

    if (container && activeBtn) {
      const { offsetLeft, offsetWidth } = activeBtn;
      const containerWidth = container.offsetWidth;

      if (containerWidth === 0) return;

      const leftPercent = (offsetLeft / containerWidth) * 100;
      const rightPercent =
        100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;

      container.style.clipPath = `inset(0% ${rightPercent.toFixed(2)}% 0% ${leftPercent.toFixed(2)}% round 17px)`;
    }
  }, [activeTab, tabs]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center">
      <ul className="relative flex w-full flex-wrap justify-center gap-8">
        {tabs.map((tab, idx) => (
          <li key={tab}>
            <button
              ref={(el) => {
                tabButtonRefs.current[idx] = el;
              }}
              data-tab={tab}
              onClick={() => setActiveTab(tab)}
              className="flex h-9 items-center justify-center rounded-full p-4 text-center text-sm font-semibold transition-colors dark:text-neutral-400"
              type="button"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        ref={containerRef}
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          overflow: 'hidden',
          transition: 'clip-path 0.25s ease',
          pointerEvents: 'none',
        }}
      >
        <ul className="relative flex w-full flex-wrap justify-center gap-8 bg-neutral-950 dark:bg-neutral-100">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                tabIndex={-1}
                aria-hidden="true"
                className="flex h-9 items-center justify-center rounded-full p-4 text-center text-sm font-semibold text-neutral-100 dark:text-black"
                type="button"
                style={{
                  pointerEvents: 'none',
                  background: 'transparent',
                }}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabSelect;
