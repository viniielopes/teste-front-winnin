import { PostRootProps } from "./types";

export const PostRoot = ({ children, postURL }: PostRootProps) => {
  const onClickPost = () => {
    window.open(postURL);
  };
  return (
    <div
      className="my-3 flex cursor-pointer"
      onClick={onClickPost}
      data-testid="postroot-test"
    >
      {children}
    </div>
  );
};
