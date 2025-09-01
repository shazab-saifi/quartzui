import BentoGrid from '@/components/BentoGrid';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Bento Grid',
  component: BentoGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BentoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
