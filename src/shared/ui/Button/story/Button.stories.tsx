import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'ghost', 'link'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    asChild: false,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'default',
    asChild: false,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'default',
    asChild: false,
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
    size: 'default',
    asChild: false,
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'sm',
    asChild: false,
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'lg',
    asChild: false,
  },
};

export const Icon: Story = {
  args: {
    children: '🔍',
    variant: 'default',
    size: 'icon',
    asChild: false,
  },
};

export const AsChild: Story = {
  args: {
    children: <a href="https://example.com">{'Link Button'}</a>,
    variant: 'default',
    size: 'default',
    asChild: true,
  },
};
