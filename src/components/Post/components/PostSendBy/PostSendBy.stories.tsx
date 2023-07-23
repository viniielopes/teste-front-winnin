import type { Meta, StoryObj } from "@storybook/react";

import { PostSendBy } from "@/components/Post/components/PostSendBy";

const meta = {
  title: "Post/SendBy",
  component: PostSendBy,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PostSendBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { author: "Vinicius", creationDate: new Date(2023, 6, 22) },
};
