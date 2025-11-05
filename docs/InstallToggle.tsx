'use client';

import TabSelect from '@/components/TabSelect';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CodeBlock } from './CodeBlock';

const InstallToggle = ({
  cliCode,
  manualCode,
}: {
  cliCode: string;
  manualCode: string;
}) => {
  const [activeTab, setActiveTab] = useState<string>('CLI');

  return (
    <div className="space-y-8">
      <TabSelect
        tabs={['CLI', 'Manual']}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="text-md rounded-lg"
        gap={8}
      />

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.2 }}
          >
            <CodeBlock
              code={activeTab.toLowerCase() === 'cli' ? cliCode : manualCode}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InstallToggle;
