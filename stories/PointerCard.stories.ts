import PointerCard from '@/components/PointerCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Pointer Card',
  component: PointerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PointerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Pointer Card Content',
  },
};
