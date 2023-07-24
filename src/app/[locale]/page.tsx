import Header from "@/components/Header";
import { Post } from "@/components/Post";
import { TabBar } from "@/components/TabBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  return (
    <main>
      <Header />
      <ToastContainer></ToastContainer>
      <TabBar />
      <div className="mx-5 mb-9 sm:mx-14 lg:mx-14 ">
        <Post />
      </div>
    </main>
  );
}
