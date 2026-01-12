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

export const Default: Story = {
  args: {
    logos: [
      'https://cdn.worldvectorlogo.com/logos/great-clips-stores.svg',
      'https://cdn.worldvectorlogo.com/logos/ebsco-logo.svg',
      'https://cdn.worldvectorlogo.com/logos/duolingo-black.svg',
      'https://cdn.worldvectorlogo.com/logos/continental-logo-2.svg',
    ],
  },
};
