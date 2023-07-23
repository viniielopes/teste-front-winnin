export type GetSubredditInfoParams = {
  type: "hot" | "new" | "rising";
};

export interface GetSubredditInfoResponse {
  after: string;
  children: Children[];
  before: string;
}

interface Children {
  data: Data;
}

interface Data {
  author: string;
  thumbnail: string;
  title: string;
  created_utc: number;
  domain: string;
  url: string;
}
