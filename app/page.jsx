import Feed from "@/components/pages/home/Feed";
import Search from "@/components/pages/home/search";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Search />

      <Feed />
    </main>
  );
}
