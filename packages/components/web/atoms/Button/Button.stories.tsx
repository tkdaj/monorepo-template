import { fn } from "@storybook/test";

import { Button } from ".";

export default {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: "A Button",
  },
};
