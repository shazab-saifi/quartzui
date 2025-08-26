import FloatingDock from '@/components/FloatingDock';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Floating Dock',
  component: FloatingDock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof FloatingDock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
