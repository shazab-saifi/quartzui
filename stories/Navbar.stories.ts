import Navbar from '@/ui/Navbar';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    layout: 'top',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
