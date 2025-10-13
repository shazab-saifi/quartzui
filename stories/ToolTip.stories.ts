import ToolTip from '@/components/ToolTip';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Tool Tip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
