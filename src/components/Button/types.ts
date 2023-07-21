export type ButtonWidthType = "normal" | "full";

export type ButtonProps = {
  active?: boolean;
  children: string;
  onClick?(text: string): void;
  width?: ButtonWidthType;
};
