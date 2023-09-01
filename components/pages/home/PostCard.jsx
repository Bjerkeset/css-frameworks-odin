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
import {AiFillHeart} from "react-icons/ai";
import {Badge} from "@/components/ui/badge";
import React, {useContext} from "react";
import UserContext from "@/lib/userContext";

function PostCard({post}) {
  const {data: userData} = useUser(post.userId);
  console.log("UserData:", userData);
  console.log("post: ", post);

  return (
    <Card key={post.id} className="w-full max-w-md flex flex-col justify-between">
      <CardHeader>
        <CardDescription className="flex items-center my-2.5">
          <Avatar>
            <AvatarImage src={userData?.image} alt="User Image" />
            {/* <AvatarFallback>Odin</AvatarFallback> */}
          </Avatar>
          {userData?.username || "error"}
        </CardDescription>
        <CardTitle className="my-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <p>{post.body}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-1">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <AiFillHeart /> {post.reactions}
        </div>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
