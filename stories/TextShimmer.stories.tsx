import TextShimmer from '@/components/TextShimmer';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Text Shimmer',
  component: TextShimmer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextShimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Model is Currently Thinking...',
    className: 'text-4xl font-semibold',
  },
};
