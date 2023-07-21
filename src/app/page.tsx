import { Button } from "@/components/Button";
import { Post } from "@/components/Post";
import { TabBar } from "@/components/TabBar";

export default function Home() {
  return (
    <main>
      <div className="mx-14">
        <TabBar />
        <hr className="mt-5 border-gray" />
        <Post />
        <hr className="mt-5 border-gray" />
        <Button width="full">+ Ver Mais</Button>
      </div>
    </main>
  );
}
