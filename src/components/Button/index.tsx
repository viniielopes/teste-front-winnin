"use client";
import { useCallback } from "react";
import { ButtonProps, ButtonWidthType } from "./types";

export const Button = ({
  active = true,
  children,
  width = "normal",
  onClick = () => {},
}: ButtonProps) => {
  const widthSize: { [key in ButtonWidthType]: string } = {
    normal: "w-48",
    full: "w-full",
  };

  const bg = active ? "bg-primary" : "bg-gray";
  const btnWidth = widthSize[width];

  const onClickButton = useCallback(() => {
    onClick(children);
  }, []);

  return (
    <button
      className={`${bg} ${btnWidth} hover:bg-active-primary active:bg-active-primary last:mr-0 mr-4 rounded-lg text-xl leading-6 py-3 w-48 text-white font-semibold`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
