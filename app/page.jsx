import Feed from "@/components/pages/home/Feed";
import Search from "@/components/pages/home/search";
import CreatePost from "@/components/pages/home/CreatePost";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center mt-8 gap-4">
        <CreatePost />
        <Search />
        <Feed />
      </main>
    </>
  );
}
