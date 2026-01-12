import AnimatedText from '@/components/AnimatedText';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Animated Text',
  component: AnimatedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Where all problems have a solution, and every idea finds its spark in creativity and collaboration.',
  },
};
