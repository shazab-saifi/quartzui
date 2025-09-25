import React from 'react';
import Dialog from '@/components/Dialog';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="mb-2 text-2xl font-bold md:text-3xl">
          Bigger, Bolder Dialog Title
        </h3>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          Concise subtitle describing what this dialog is about.
        </p>

        <p className="mb-2">
          This dialog now demonstrates a larger content area with more to read.
          You can place any React nodes here, including headings, paragraphs,
          lists, and actions.
        </p>

        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>Supports rich content via the children prop</li>
          <li>Works with any custom layout or components</li>
          <li>Keeps the same entry/exit animations</li>
        </ul>

        <div className="mt-6 flex justify-end gap-3">
          <button className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-300 hover:bg-neutral-100">
            Secondary Action
          </button>
          <button className="rounded-xl border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-neutral-800 hover:bg-neutral-800">
            Primary Action
          </button>
        </div>
      </>
    ),
  },
};
