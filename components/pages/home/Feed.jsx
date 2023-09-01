"use client";
import { useAllPosts } from "@/lib/my-api";
import PostCard from "@/components/pages/home/PostCard";
import { Skeleton } from "@/components/ui/skeleton";

function Feed() {
  const { status, error, data: postData = { posts: [] } } = useAllPosts(); // default value for postData is an empty array

  if (status === "loading") {
    return (
      <div className="flex flex-wrap justify-center gap-12 max-w-screen-2xl">
        <Skeleton className="w-96  h-72" />
        <Skeleton className="w-96  h-72" />
        <Skeleton className="w-96 h-72" />
        <Skeleton className="w-96 h-72" />
        <Skeleton className="w-96 h-72" />
        <Skeleton className="w-96 h-72" />
      </div>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className=" flex flex-wrap gap-10 justify-center my-10 max-w-screen-2xl">
      {postData?.posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Feed;
