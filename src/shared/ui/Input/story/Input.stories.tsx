import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: 'Enter text',
  },
};
