import PriceSwitcher from '@/components/PriceSwitcher';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Price Switcher',
  component: PriceSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
