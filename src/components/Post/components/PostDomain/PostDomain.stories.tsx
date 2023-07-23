import type { Meta, StoryObj } from "@storybook/react";

import { PostDomain } from "@/components/Post/components/PostDomain";

const meta = {
  title: "Post/Domain",
  component: PostDomain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PostDomain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: { domain: "reddit.com" } };
