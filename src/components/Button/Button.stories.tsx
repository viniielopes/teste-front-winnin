import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Normal Button",
  },
  decorators: [
    (Button) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Button></Button>
      </div>
    ),
  ],
};

export const Full: Story = {
  args: {
    width: "full",
    children: "Full Button",
  },
  decorators: [
    (Button) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Button></Button>
      </div>
    ),
  ],
};

export const WithChildrenComponent: Story = {
  args: {
    children: (
      <>
        <AiOutlinePlus width={24} height={24} className="mr-2" />
        Ver Mais
      </>
    ),
  },

  decorators: [
    (Button) => (
      <div
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Button></Button>
      </div>
    ),
  ],
};
