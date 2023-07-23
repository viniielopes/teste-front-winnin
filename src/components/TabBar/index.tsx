"use client";

import { Button } from "../Button";
import { Topics } from "@/stores/useActiveTopic/types";
import { useTabBar } from "@/hooks/useTabBar";

export const TabBar = () => {
  const buttonsText: Topics[] = ["Hot", "News", "Rising"];

  const { tabActive, onClickTab } = useTabBar();

  return (
    <div className="background-tabbar sticky top-0 z-50 flex justify-center bg-opacity-80 py-5">
      {buttonsText.map((text) => (
        <Button
          key={text}
          active={tabActive === text}
          onClick={() => onClickTab(text)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
