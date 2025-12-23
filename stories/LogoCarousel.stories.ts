import LogoCarousel from '@/components/logo-carousel';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Logo Carousel',
  component: LogoCarousel,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
