"use client";
import { ButtonProps, ButtonWidthSize } from "./types";

export const Button = ({
  active = true,
  children,
  width = "normal",
  onClick = () => {},
}: ButtonProps) => {
  const widthSize: ButtonWidthSize = {
    normal: "w-48",
    full: "w-full",
  };
  const btnWidth = widthSize[width];

  const bg = active ? "bg-primary" : "bg-gray";

  return (
    <button
      className={`${bg} ${btnWidth} hover:bg-active-primary active:bg-active-primary last:mr-0 mr-4 rounded-lg text-xl leading-6 py-3 w-48 text-white font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
