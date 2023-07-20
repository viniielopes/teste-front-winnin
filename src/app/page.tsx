import { TabBar } from "@/components/TabBar";

export default function Home() {
  return (
    <main>
      <div className="w-screen bg-primary flex justify-center">
        <h1 className="text-4xl font-bold py-6 text-white">
          REACT<span className="text-feedback-warning">JS</span>
        </h1>
      </div>
      <TabBar />
    </main>
  );
}
