import { Button } from "../Button";

export const TabBar = () => {
  return (
    <div className="flex justify-center mt-5">
      <Button active>Hot</Button>
      <Button>News</Button>
      <Button>Rising</Button>
    </div>
  );
};
