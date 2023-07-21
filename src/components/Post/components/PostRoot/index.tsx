import { PostRootProps } from "./types";

export const PostRoot = ({ children }: PostRootProps) => {
  return <div className="my-3 flex">{children}</div>;
};
