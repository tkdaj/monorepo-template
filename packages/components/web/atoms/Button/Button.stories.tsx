import { fn } from '@storybook/test';

import { Button } from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    $variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    $size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
};

export const Default = {
  args: {
    children: 'A Button',
  },
};

export const PrimaryButton = {
  args: {
    children: 'Primary (default variant) Button',
    $variant: 'primary',
  },
};

export const SecondaryButton = {
  args: {
    children: 'Secondary Button',
    $variant: 'secondary',
  },
};

export const SmallButton = {
  args: {
    children: 'Small Button',
    $size: 'sm',
  },
};

export const MediumButton = {
  args: {
    children: 'Medium (default size) Button',
    $size: 'md',
  },
};

export const LargeButton = {
  args: {
    children: 'Large Button',
    $size: 'lg',
  },
};
