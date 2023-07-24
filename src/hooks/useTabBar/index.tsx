import { useActiveTopicStore } from "@/stores/useActiveTopic";
import { TopicsType } from "@/stores/useActiveTopic/types";

export const useTabBar = () => {
  const [topic, setActive] = useActiveTopicStore((state) => [
    state.topic,
    state.setTopic,
  ]);

  const onClickButton = (text: TopicsType) => {
    setActive(text);
  };
  return {
    onClickTab: onClickButton,
    tabActive: topic,
  };
};
