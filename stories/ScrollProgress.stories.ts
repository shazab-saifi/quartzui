import ScrollProgress from '@/components/ScrollProgress';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Scroll Progress',
  component: ScrollProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
