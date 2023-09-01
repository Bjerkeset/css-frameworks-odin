import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

function ProfileCard(data) {
  data = data.data;

  return (
    <Card className="flex flex-col items-center rounded-md ">
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar className="w-28 h-28 bg-secondary">
          <AvatarImage src={data.image} />
        </Avatar>
        <CardTitle>
          <span>
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
      <CardFooter className="flex flex-col">
        <p className=" p-4 font-bold">username:{data.username}</p>
        <p className="font-bold">gender:{data.gender}</p>
      </CardFooter>
      <CardFooter>
        <style></style>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
