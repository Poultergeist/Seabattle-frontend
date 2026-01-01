import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info, TriangleAlert, Apple, Moon, Sun } from 'lucide-react';
import React from 'react';

import { Switch } from '..';

const ICONS = {
  none: null,
  info: <Info size={16} color="white" />,
  warning: <TriangleAlert size={16} color="white" />,
  apple: <Apple size={16} color="white" />,
};

const meta: Meta<typeof Switch> = {
  title: 'shared/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'object' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(ICONS),
      mapping: ICONS,
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    roundness: {
      control: { type: 'select' },
      options: ['normal', 'square', 'extra'],
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['base', 'info', 'danger', 'theme'],
      table: {
        defaultValue: { summary: 'base' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    checked: false,
    size: 'medium',
    roundness: 'normal',
    variant: 'base',
  },
  render: args => {
    const [isChecked, setIsChecked] = React.useState(args.checked);

    return (
      <Switch
        {...args}
        checked={isChecked}
        onCheckedChange={checked => {
          setIsChecked(checked);
          args.onCheckedChange(checked);
        }}
        aria-label="Primary Switch"
      />
    );
  },
};

export const SmallSquareInfo: Story = {
  args: {
    checked: false,
    size: 'small',
    roundness: 'square',
    variant: 'info',
  },
  render: args => {
    const [isChecked, setIsChecked] = React.useState(args.checked);

    return (
      <Switch
        {...args}
        checked={isChecked}
        onCheckedChange={checked => {
          setIsChecked(checked);
          args.onCheckedChange(checked);
        }}
        aria-label="Small Info Switch"
      />
    );
  },
};

export const LargeRoundedDanger: Story = {
  args: {
    checked: false,
    size: 'large',
    roundness: 'extra',
    variant: 'danger',
  },
  render: args => {
    const [isChecked, setIsChecked] = React.useState(args.checked);
    const [showText, setShowText] = React.useState<boolean>(false);

    return (
      <>
        <Switch
          {...args}
          checked={isChecked}
          onCheckedChange={checked => {
            setIsChecked(checked);
            args.onCheckedChange(checked);
          }}
          text={showText ? ['On', 'Off'] : undefined}
          aria-label="Large Danger Switch"
        />
        <span className="ml-2 cursor-pointer">
          <input
            type="checkbox"
            onClick={() => setShowText(!showText)}
            checked={showText}
          ></input>
          <span onClick={() => setShowText(!showText)}>
            {' Show On/Off Text'}
          </span>
        </span>
      </>
    );
  },
};

export const ThemeVariant: Story = {
  args: {
    checked: false,
    size: 'medium',
    roundness: 'normal',
    variant: 'theme',
  },
  render: args => {
    const [isChecked, setIsChecked] = React.useState(args.checked);

    const icon = isChecked ? (
      <Moon className="p-1" color="white" />
    ) : (
      <Sun className="p-1" color="white" />
    );

    return (
      <Switch
        {...args}
        checked={isChecked}
        onCheckedChange={checked => {
          setIsChecked(checked);
          args.onCheckedChange(checked);
        }}
        icon={icon}
        aria-label="Theme Switcher"
      />
    );
  },
};
