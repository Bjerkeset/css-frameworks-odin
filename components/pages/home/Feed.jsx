"use client";
import {useAllPosts} from "@/lib/my-api";
import PostCard from "@/components/pages/home/PostCard";
import {Skeleton} from "@/components/ui/skeleton";

function Feed() {
  const {status, error, data: postData} = useAllPosts();

  if (status === "loading") {
    return (
      <div className="w-full max-w-xl mt-12 flex flex-col gap-4 ">
        <Skeleton className="w-96 h-72" />
      </div>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="max-w-xl mt-12 flex flex-col gap-4">
      {postData.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Feed;
