"use client";
import React from "react";
import {useAllUsers} from "@/lib/my-api";
import UserContext from "@/lib/userContext";
import {Skeleton} from "@/components/ui/skeleton";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {AiOutlineMessage} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";

function ContactsList() {
  const {status, error, data: userData = {users: []}} = useAllUsers(); // default value for postData is an empty array

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

  console.log("userData: ", userData.users);
  return (
    <section className="flex flex-col w-full items-center md:w-fit border p-4 rounded-md">
      <div className="flex justify-center ">
        <h4 className="text-3xl mb-1">Contact List</h4>
      </div>
      <ScrollArea className="h-[500px] sm:w-[350px] w-[290px] rounded-md flex flex-col  border ">
        {userData?.users?.map((user) => (
          <Card
            key={user.id}
            className="flex p-1 px-4 border-none rounded-md items-center"
          >
            <div className="w-full flex justify-between items-center text-center mb-auto">
              <div className="flex items-center gap-1">
                <Avatar className="bg-secondary">
                  <AvatarImage src={user.image} />
                </Avatar>
                <p>{user.username}</p>
              </div>
              <div className="flex gap-2">
                <Button variant={"outline"} className="rounded-3xl">
                  <AiOutlineMessage />
                </Button>
                <Button className="rounded-3xl">
                  <CgProfile />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </ScrollArea>
    </section>
  );
}

export default ContactsList;
