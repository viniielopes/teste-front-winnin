import { Post } from "@/components/Post";
import { TabBar } from "@/components/TabBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  return (
    <main>
      <ToastContainer></ToastContainer>
      <div className="mx-14 mb-9">
        <TabBar />
        <Post />
      </div>
    </main>
  );
}
