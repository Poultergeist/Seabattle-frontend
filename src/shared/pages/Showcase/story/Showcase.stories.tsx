import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeSwitcher } from '@/shared/ui/ThemeProvider';

import { ShowcasePage } from '../ui/ShowcasePage';

const meta: Meta<typeof ShowcasePage> = {
  title: 'shared/ShowcasePage',
  component: ShowcasePage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="min-h-screen bg-bg p-4">
        <ThemeSwitcher />
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ShowcasePage>;

export const Primary: Story = {};
