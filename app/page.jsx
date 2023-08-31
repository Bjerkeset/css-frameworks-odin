import Feed from "@/components/pages/home/Feed";
import Search from "@/components/pages/home/search";
import CreatePost from "@/components/pages/home/CreatePost";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Search />
        <CreatePost />
        <Feed />
      </main>
        <footer className=" flex flex-col min-h-screen bg-gray-200 p-4 mt-auto ">
          <Footer />
        </footer>
    </>

}
