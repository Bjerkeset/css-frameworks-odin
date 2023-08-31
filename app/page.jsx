import Feed from "@/components/pages/home/Feed";
import Search from "@/components/pages/home/search";
import CreatePost from "@/components/pages/home/CreatePost";
export default function Home() {
  return (
    <main className="flex flex-col items-center mt-8 gap-4">
      <CreatePost />
      <Search />
      <Feed />
    </main>
  );
}
