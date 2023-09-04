"use client";
import {useUser} from "@/lib/my-api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProfileCard from "@/components/pages/profile/ProfileCard";
import ContactsList from "@/components/pages/profile/ContactsList";
import PostToWall from "@/components/pages/profile/PostToWall";

function Profile() {
  const userId = 2;
  const {status, error, data} = useUser(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <section className="min-h-screen">Loading...</section>;
  }

  if (error) {
    return <section className="min-h-screen">Error: {error.message}</section>;
  }

  console.log("user data >>>>", data);

  return (
    <>
      <section className="min-h-screen w-full flex gap-2 flex-col m-7 max-w-2xl">
        <ProfileCard data={data} />
        <div className="flex gap-2 md:flex-row flex-col">
          <ContactsList />
          <PostToWall />
        </div>
      </section>
    </>
  );
}

export default Profile;
