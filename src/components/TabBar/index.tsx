"use client";

import { Button } from "../Button";
import { TopicsType } from "@/stores/useActiveTopic/types";
import { useTabBar } from "@/hooks/useTabBar";
import { useTranslations } from "next-intl";

export type TabBarButtons = {
  text: string;
  topic: TopicsType;
};

export const TabBar = () => {
  const t = useTranslations("TabBar");

  const buttonsText: TabBarButtons[] = [
    {
      text: t("hot"),
      topic: "hot",
    },
    {
      text: t("news"),
      topic: "new",
    },
    {
      text: t("rising"),
      topic: "rising",
    },
  ];

  const { tabActive, onClickTab } = useTabBar();

  return (
    <div className="background-tabbar sticky top-0 z-50 flex justify-center bg-opacity-80 py-5">
      {buttonsText.map((infos) => (
        <Button
          key={infos.topic}
          active={tabActive === infos.topic}
          onClick={() => onClickTab(infos.topic)}
        >
          {infos.text}
        </Button>
      ))}
    </div>
  );
};
