import Feed from "@/components/pages/home/Feed";
import CreatePost from "@/components/pages/home/CreatePost";

export default function Home() {
  return (
    <main className="flex h-[100vh] flex-col items-center">
      <CreatePost />
      <Feed />
    </main>
  );
}
