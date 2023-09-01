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
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

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
      <section className="min-h-screen">
        <Card className="flex flex-col items-center">
          <CardHeader className="flex flex-col items-center gap-4">
            <Avatar className="w-28 h-28">
              <AvatarImage src={data.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>
              <span>
                {" "}
                {data.firstName} {data.lastName}{" "}
              </span>
            </CardTitle>
            <CardDescription className="flex flex-wrap w-full gap-2">
              <Card className=" flex flex-col items-center justify-center w-16 h-16 bg-secondary">
                <span> Age </span>
                <span className="text-2xl">{data.age}</span>
              </Card>
              <Card className=" flex flex-col items-center justify-center w-16 h-16 bg-secondary">
                <span> Weight </span>
                <span className="text-2xl">{data.weight}</span>
              </Card>
              <Card className=" flex flex-col items-center justify-center w-16 h-16 bg-secondary">
                <span> Height </span>
                <span className="text-2xl">{data.height}</span>
              </Card>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold">{data.university} </p>
          </CardContent>
          <p className="font-bold">email:{data.email}</p>
          <CardFooter>
            <p className=" p-4 font-bold">username:{data.username}</p>
            <p className="font-bold">gender:{data.gender}</p>
          </CardFooter>
          <CardFooter>
            <style></style>
            <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
              <input
                class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellcheck="false"
                placeholder="Title"
                type="text"
              />
              <textarea
                class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                spellcheck="false"
                placeholder="Describe everything about this post here"
              ></textarea>

              <div class="icons flex text-gray-500 m-2">
                <svg
                  class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <svg
                  class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                <div class="count ml-auto text-gray-400 text-xs font-semibold">
                  0/300
                </div>
              </div>

              <div class="buttons flex">
                <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
                  Cancel
                </div>
                <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                  Post
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default Profile;
