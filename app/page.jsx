import Feed from "@/components/pages/home/Feed";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Feed />
      </main>
      
      <div class="flex flex-col min-h-screen">
        <footer className=" bg-gray-200 p-4 mt-auto ">
          <Footer />
        </footer>
      </div>
    </>
  );
}
