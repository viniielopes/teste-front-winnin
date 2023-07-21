import { Button } from "@/components/Button";
import { Post } from "@/components/Post";
import { TabBar } from "@/components/TabBar";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <div className="mx-14">
        <TabBar />
        <Post />
        <Button width="full">
          <AiOutlinePlus width={24} height={24} className="mr-2" />
          Ver Mais
        </Button>
      </div>
    </main>
  );
}
