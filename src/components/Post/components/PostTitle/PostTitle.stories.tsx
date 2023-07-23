import type { Meta, StoryObj } from "@storybook/react";

import { PostTitle } from "@/components/Post/components/PostTitle";

const meta = {
  title: "Post/Title",
  component: PostTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PostTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = { args: { title: "Dan abramov saiu da meta." } };
