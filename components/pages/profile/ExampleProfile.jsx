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
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  console.log("user data >>>>", data);

  return (
    <>
      <section>
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
            <p> {data.university} </p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default Profile;
