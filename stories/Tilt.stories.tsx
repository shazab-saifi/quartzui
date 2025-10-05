import React from 'react';
import Image from 'next/image';
import { Tilt } from '@/components/Tilt';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Tilt Card',
  component: Tilt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tilt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center space-y-4 text-center">
        <span className="block dark:hidden">
          <Image
            src="/quartzui-dark.svg"
            width={64}
            height={64}
            alt="quartz-ui"
          />
        </span>
        <span className="hidden dark:block">
          <Image
            src="/quartzui-light.svg"
            width={64}
            height={64}
            alt="quartz-ui"
          />
        </span>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          Beautiful 3D Card
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          This card tilts with your mouse and adapts to light and dark themes.
          Add your own content here!
        </p>
        <button className="mt-2 rounded-lg bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200">
          Get Started
        </button>
      </div>
    ),
  },
};
