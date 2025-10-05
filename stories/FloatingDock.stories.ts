import FloatingDock from '@/components/FloatingDock';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Floating Dock',
  component: FloatingDock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingDock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
