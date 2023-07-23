import { PostTitleProps } from "./types";

export const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <h2 className="text-xl font-semibold leading-6 text-black">{title}</h2>
  );
};
