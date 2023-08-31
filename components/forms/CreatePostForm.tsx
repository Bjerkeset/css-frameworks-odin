"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useToast} from "@/components/ui/use-toast";
import {Card, CardContent} from "../ui/card";
import {Textarea} from "../ui/textarea";

const formSchema = z.object({
  post: z
    .string()
    .min(10, {
      message: "Username must be at least 10 characters.",
    })
    .max(128, {message: "Must be less than 128 characters."}),
});

export function CreatePostForm() {
  const {toast} = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      post: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "Form Submitted!",
      description: "dssdkkds",
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col "
      >
        <FormField
          control={form.control}
          name="post"
          render={({field}) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Textarea
                  className="h-56"
                  placeholder="Your post here"
                  {...field}
                />
              </FormControl>
              <FormDescription>What on you mind?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post</Button>
      </form>
    </Form>
  );
}

export default CreatePostForm;
