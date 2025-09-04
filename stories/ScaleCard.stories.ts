import ScaleCard from '@/components/ScaleCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Scale Card',
  component: ScaleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScaleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
