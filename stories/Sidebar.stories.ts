import Sidebar from '@/components/Sidebar';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'SideBar',
  component: Sidebar,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
