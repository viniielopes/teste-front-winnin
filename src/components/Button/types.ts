import { ReactNode } from "react";

type WidthType = "normal" | "full";
export type ButtonWidthSize = {
  [key in WidthType]: string;
};

export type ButtonProps = {
  active?: boolean;
  children: ReactNode;
  onClick?(): void;
  width?: WidthType;
};
