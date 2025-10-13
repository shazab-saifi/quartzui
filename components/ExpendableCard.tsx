'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface CardType {
  id: number;
  title: string;
  desc: string;
  subheading: string;
  src: string;
}

const cards = [
  {
    id: 1,
    title: 'Figma',
    subheading: 'Collaborative Design',
    desc: 'A collaborative interface design tool for teams to create, test, and ship better designs, faster. With Figma, multiple users can simultaneously work on the same file, provide feedback, and iterate seamlessly, making the design process truly collaborative and efficient.',
    src: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg',
  },
  {
    id: 2,
    title: 'Apple App Store',
    subheading: 'iOS Apps Platform',
    desc: 'The official digital distribution platform for iOS applications, offering millions of apps for iPhone, iPad, and other Apple devices. The App Store provides a secure and curated environment for discovering, downloading, and updating applications designed to enhance productivity, entertainment, and creativity.',
    src: 'https://cdn.worldvectorlogo.com/logos/apple-app-store.svg',
  },
  {
    id: 3,
    title: 'Microsoft Edge',
    subheading: 'Modern Web Browser',
    desc: 'A fast, secure, and modern web browser developed by Microsoft. Edge offers seamless integration with Microsoft services, advanced privacy controls, and innovative features to enhance your browsing experience across devices.',
    src: 'https://cdn.worldvectorlogo.com/logos/microsoft-edge-1.svg',
  },
  {
    id: 4,
    title: 'Claude',
    subheading: 'AI Chat Assistant',
    desc: 'An advanced AI assistant created by Anthropic, designed for natural conversations and safe, reliable answers. Claude leverages large language models to offer insightful advice, handle complex queries, and ensure responsible AI usage in both consumer and enterprise environments.',
    src: 'https://cdn.worldvectorlogo.com/logos/claude-logo.svg',
  },
  {
    id: 5,
    title: 'Spotify',
    subheading: 'Music Streaming',
    desc: 'A leading music streaming platform offering millions of songs, playlists, and podcasts on demand. Spotify provides personalized music recommendations, curated playlists, and innovative features for discovering and enjoying audio content from around the world.',
    src: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg',
  },
];

const ExpendableCard = () => {
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-container-${card.title}-${card.id}`}
            key={card.id}
            onClick={() => {
              setActiveCard(card);
              setIsOpen(true);
            }}
            className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-3 md:min-w-sm dark:border-neutral-800 dark:bg-neutral-900 ${
              isOpen ? 'pointer-events-none opacity-50' : ''
            }`}
            style={{
              transition: 'opacity 0.2s',
            }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                layoutId={`card-image-${card.title}-${card.id}`}
                className="flex size-12 items-center justify-center rounded-xl"
              >
                <Image
                  src={card.src}
                  alt={`${card.title}-logo`}
                  width={48}
                  height={48}
                  className={card.title === 'Figma' ? 'h-12' : ''}
                />
              </motion.div>
              <div className="flex max-w-2xs flex-col">
                <motion.h6
                  layoutId={`card-title-${card.title}-${card.id}`}
                  className="w-fit text-sm font-semibold text-black dark:text-white"
                >
                  {card.title}
                </motion.h6>
                <motion.p
                  layoutId={`subheading-${card.title}-${card.id}`}
                  className="w-fit text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {card.subheading}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-card-${card.title}-${card.id}`}
              className="cursor-pointer rounded-lg bg-neutral-100 px-2 py-1 text-xs text-black transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
            >
              Open
            </motion.button>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isOpen && activeCard && (
          <>
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              exit={{ filter: 'blur(10px)', opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ pointerEvents: 'none' }}
            >
              <motion.div
                layoutId={`card-container-${activeCard.title}-${activeCard.id}`}
                style={{ pointerEvents: 'auto' }}
                className="flex max-w-sm flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      layoutId={`card-image-${activeCard.title}-${activeCard.id}`}
                      className="flex size-12 items-center justify-center rounded-xl"
                    >
                      <Image
                        src={activeCard.src}
                        alt={`${activeCard.title}-logo`}
                        width={48}
                        height={48}
                        className={activeCard.title === 'Figma' ? 'h-12' : ''}
                      />
                    </motion.div>
                    <div className="flex flex-col">
                      <motion.h6
                        layoutId={`card-title-${activeCard.title}-${activeCard.id}`}
                        className="w-fit text-sm font-semibold text-black dark:text-white"
                      >
                        {activeCard.title}
                      </motion.h6>
                      <motion.p
                        layoutId={`subheading-${activeCard.title}-${activeCard.id}`}
                        className="w-fit text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        {activeCard.subheading}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    layoutId={`button-card-${activeCard.title}-${activeCard.id}`}
                    className="cursor-pointer rounded-lg bg-blue-300/50 px-2 py-1 text-xs text-blue-700 transition-colors hover:bg-blue-200/70 dark:bg-blue-500/20 dark:hover:bg-blue-600/20"
                  >
                    Open
                  </motion.button>
                </div>
                <motion.p
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {activeCard.desc}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpendableCard;
