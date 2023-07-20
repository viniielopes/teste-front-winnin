import { Button } from "../Button";

export const TabBar = () => {
  return (
    <div className="flex justify-center mt-5 last:mr-0 last-of-type:mr-0 ">
      <Button active>Hot</Button>
      <Button>News</Button>
      <Button>Rising</Button>
    </div>
  );
};
