import Footer from '@/ui/Footer';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
