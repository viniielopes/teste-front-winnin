"use client";

import { Button } from "../Button";
import { Topics } from "@/stores/useActiveTopic/types";
import { useActiveTopicStore } from "@/stores/useActiveTopic";

export const TabBar = () => {
  const buttonsText: Topics[] = ["Hot", "News", "Rising"];

  const [topic, setActive] = useActiveTopicStore((state) => [
    state.topic,
    state.setTopic,
  ]);

  const onClickButton = (text: Topics) => {
    setActive(text);
  };

  return (
    <div className="my-5 flex justify-center">
      {buttonsText.map((text) => (
        <Button
          key={text}
          active={topic === text}
          onClick={() => onClickButton(text)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};
