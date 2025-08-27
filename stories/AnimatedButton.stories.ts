import AnimatedButton from '@/components/AnimatedButton';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Animated Button',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof AnimatedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
