"use client";
import React from "react";
import {useAllUsers} from "@/lib/my-api";
import UserContext from "@/lib/userContext";
import {Skeleton} from "@/components/ui/skeleton";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent} from "@/components/ui/card";

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
    <ScrollArea className="h-[500px] w-[350px] rounded-md flex flex-col gap-4  border p-4 ">
      {userData?.users?.map((user) => (
        <Card className="" key={user.id}>
          <CardContent className="w-full">{user.firstName}</CardContent>
        </Card>
      ))}
      {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea> */}
    </ScrollArea>
  );
}

export default ContactsList;
