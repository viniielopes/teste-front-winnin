import { Topics } from "@/stores/useActiveTopic/types";
import { useActiveTopicStore } from "@/stores/useActiveTopic";

export const useTabBar = () => {
  const [topic, setActive] = useActiveTopicStore((state) => [
    state.topic,
    state.setTopic,
  ]);

  const onClickButton = (text: Topics) => {
    setActive(text);
  };
  return {
    onClickTab: onClickButton,
    tabActive: topic,
  };
};
