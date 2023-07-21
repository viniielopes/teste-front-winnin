"use client";

import { useState } from "react";
import { Button } from "../Button";

export type ActiveTab = "Hot" | "News" | "Rising";

export const TabBar = () => {
  const [active, setActive] = useState<ActiveTab>("Hot");

  const buttonsText: ActiveTab[] = ["Hot", "News", "Rising"];

  const onClickButton = (text: ActiveTab) => {
    setActive(text);
  };

  return (
    <div className="mt-5 flex justify-center">
      {buttonsText.map((text) => (
        <Button
          key={text}
          active={active === text}
          onClick={() => onClickButton(text)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
