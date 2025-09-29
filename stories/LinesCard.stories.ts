import LinesCard from '@/components/LinesCard';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Lines Card',
  component: LinesCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithProps: Story = {
  args: {
    topLogos: [
      { src: '/quartzui.svg', alt: 'QuartzUI' },
      { src: '/quartzui-light.svg', alt: 'QuartzUI Light' },
      { src: '/beam.svg', alt: 'Beam' },
    ],
    bottomLogo: { src: '/quartzui-dark.svg', alt: 'QuartzUI Dark' },
    title: 'Quartz UI',
    description:
      'Quartz UI is a modern, accessible React component library featuring animated.',
  },
};
