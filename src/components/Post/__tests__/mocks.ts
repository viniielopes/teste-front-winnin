import { GetSubredditInfoResponse } from "@/queries/useSubreddit/types";
import { InfiniteData } from "@tanstack/react-query";

export const mockData: InfiniteData<GetSubredditInfoResponse> = {
  pageParams: ["t3_12321312"],
  pages: [
    {
      after: "t3_qw21378",
      before: "t4_12312312",
      children: [
        {
          data: {
            title: "Titulo teste",
            author: "Vinicius Lopes",
            domain: "winnin.com",
            thumbnail: "self",
            created_utc: new Date().getTime(),
          },
        },
      ],
    },
  ],
};

export const mockDataDefault: InfiniteData<GetSubredditInfoResponse> = {
  pageParams: ["t3_12321312"],
  pages: [
    {
      after: "t3_qw21378",
      before: "t4_12312312",
      children: [
        {
          data: {
            title: "Titulo teste",
            author: "Vinicius Lopes",
            domain: "winnin.com",
            thumbnail: "default",
            created_utc: new Date().getTime(),
          },
        },
      ],
    },
  ],
};

export const mockShowImage: InfiniteData<GetSubredditInfoResponse> = {
  pageParams: ["t3_12321312"],
  pages: [
    {
      after: "t3_qw21378",
      before: "t4_12312312",
      children: [
        {
          data: {
            title: "Titulo teste",
            author: "Vinicius Lopes",
            domain: "winnin.com",
            thumbnail:
              "https://b.thumbs.redditmedia.com/UyUfVHkzfctbPmEd_75KCgNgCCLXet_2KusHjb_NOJY.jpg",
            created_utc: new Date().getTime(),
          },
        },
      ],
    },
  ],
};
