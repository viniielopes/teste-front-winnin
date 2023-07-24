export type TopicsType = "hot" | "new" | "rising";

export interface ActiveTopicState {
  topic: TopicsType;
  setTopic: (topic: TopicsType) => void;
}
