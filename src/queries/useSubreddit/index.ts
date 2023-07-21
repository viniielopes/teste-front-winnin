import { useQuery } from "@tanstack/react-query";
import { redditInstance } from "@/api/axios";
import { GetSubredditInfoParams, GetSubredditInfoResponse } from "./types";
import { AxiosResponse } from "axios";

const prefix = "reddit";

export const useGetSubredditInfo = ({
  after,
  type,
}: GetSubredditInfoParams) => {
  return useQuery([prefix, type, after], () =>
    redditInstance
      .get<AxiosResponse<GetSubredditInfoResponse>>(
        `/r/reactjs/${type}.json?limit=10&raw_json=1${
          after ? `&after=${after}` : ""
        }`,
      )
      .then((data) => data.data),
  );
};
