import { create } from "zustand";
import { ActiveTopicState } from "./types";

export const useActiveTopicStore = create<ActiveTopicState>()((set) => ({
  topic: "hot",
  topicType: "hot",
  setTopic: (topic) => set(() => ({ topic })),
}));
