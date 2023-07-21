import { create } from "zustand";
import { ActiveTopicState, Topics, TopicsType } from "./types";

const topicTypeList: { [key in Topics]: TopicsType } = {
  Hot: "hot",
  News: "new",
  Rising: "rising",
};

export const useActiveTopicStore = create<ActiveTopicState>()((set) => ({
  topic: "Hot",
  topicType: "hot",
  setTopic: (topic) => set(() => ({ topic, topicType: topicTypeList[topic] })),
}));
