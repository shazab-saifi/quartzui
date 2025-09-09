import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface HoverObjTypes {
  idx: number | null;
  sectionIdx: number | null;
}

const CompoentsBar = () => {
  const [hoveredItem, setHoveredItemedItem] = useState<HoverObjTypes | null>(
    null
  );

  const sections = [
    { title: 'Buttons' },
    { title: 'Cards' },
    { title: 'Badges' },
    { title: 'Other Components' },
  ];

  const components = [
    {
      title: 'Accordion',
      desc: 'Collapsible content panels for presenting information in a limited space.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Animated Button',
      desc: 'Button with smooth animated states to improve user interactions.',
      image: '/quartzui.svg',
      category: 'Buttons',
    },
    {
      title: 'Animated Text',
      desc: 'Text reveal/animate component for engaging headings and highlights.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Banner',
      desc: 'Attention-grabbing banner for announcements and promotions.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Bento Grid',
      desc: 'Modern grid layout to showcase content in a bento-style arrangement.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Button',
      desc: 'Configurable button with multiple variants and sizes.',
      image: '/quartzui.svg',
      category: 'Buttons',
    },
    {
      title: 'Expandable Card',
      desc: 'Card that expands to reveal additional details on interaction.',
      image: '/quartzui.svg',
      category: 'Cards',
    },
    {
      title: 'Floating Dock',
      desc: 'Floating dock navigation to quickly access primary destinations.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Pointer Card',
      desc: 'Interactive card that follows cursor/pointer for delightful feedback.',
      image: '/quartzui.svg',
      category: 'Cards',
    },
    {
      title: 'Price Switcher',
      desc: 'Toggle between billing intervals or pricing tiers effortlessly.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Scale Card',
      desc: 'Subtle scaling card on hover for visual emphasis.',
      image: '/quartzui.svg',
      category: 'Cards',
    },
    {
      title: 'Scroll Progress',
      desc: 'Progress indicator that tracks how far the user has scrolled.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Sidebar',
      desc: 'Navigation sidebar with sections and items for app structure.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
    {
      title: 'Tab Select',
      desc: 'Pill-style tabs with smooth transitions between active states.',
      image: '/quartzui.svg',
      category: 'Other Components',
    },
  ];

  return (
    <div className="space-y-lg no-scrollbar fixed top-42 max-h-[700px] overflow-y-scroll">
      <h3 className="text-para fixed top-30 font-semibold">Components</h3>
      <div className="gap-md flex flex-col">
        {sections.map((sec, sectionIdx) => {
          const items = components.filter((c) => c.category === sec.title);
          return (
            <div key={sectionIdx} className="flex flex-col">
              <h4 className="text-small font-semibold">{sec.title}</h4>
              <div className="mt-2 flex flex-col gap-1">
                {items.length === 0 ? (
                  <span className="text-small p-2 text-neutral-500">
                    No items
                  </span>
                ) : (
                  items.map((item, idx) => (
                    <button
                      onMouseEnter={() =>
                        setHoveredItemedItem({ idx, sectionIdx })
                      }
                      onMouseLeave={() => setHoveredItemedItem(null)}
                      key={idx}
                      className="text-small relative min-w-48 cursor-pointer overflow-hidden rounded-md p-2 text-left text-neutral-600 transition-colors dark:text-neutral-400 dark:hover:text-neutral-200"
                    >
                      <AnimatePresence initial={false}>
                        {hoveredItem &&
                          hoveredItem.sectionIdx === sectionIdx &&
                          hoveredItem.idx === idx && (
                            <motion.div
                              layoutId="clicked"
                              initial={false}
                              transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 40,
                                mass: 0.6,
                              }}
                              className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-md bg-neutral-800"
                            />
                          )}
                      </AnimatePresence>
                      <span className="relative z-10">{item.title}</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompoentsBar;
