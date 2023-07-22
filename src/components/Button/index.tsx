"use client";
import { ButtonProps, ButtonWidthSize } from "./types";

export const Button = ({
  active = true,
  children,
  width = "normal",
  onClick,
}: ButtonProps) => {
  const widthSize: ButtonWidthSize = {
    normal: "w-48",
    full: "w-full",
  };
  const btnWidth = widthSize[width];

  const bg = active ? "bg-primary" : "bg-gray";

  return (
    <button
      className={`${bg} ${btnWidth} mr-4 flex w-48 items-center justify-center rounded-lg py-3 text-xl font-semibold leading-6 text-white last:mr-0 hover:bg-active-primary active:bg-active-primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
