export type Topics = "Hot" | "News" | "Rising";

export type TopicsType = "hot" | "new" | "rising";

export type TopicTypeListFields = {
  [key in Topics]: TopicsType;
};

export interface ActiveTopicState {
  topic: Topics;
  topicType: TopicsType;
  setTopic: (topic: Topics) => void;
}
