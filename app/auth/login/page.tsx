"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the schema for validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({message:"email is not valid"}),
  city:z.string().min(2),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// Define the type for the form inputs
type Inputs = {
  username: string;
  password: string;
  email: string;
  city:string
};

export default function Login() {
  // Initialize the form with the schema resolver
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
 const onSubmit = (): void => {
console.log("login")
 };
  const { control, handleSubmit } = form; // Use the same instance of form

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-background px-8">
      <div className="bg-background shadow-xl rounded-md px-7 py-11 w-full sm:w-4/5 md:w-1/2 flex flex-col gap-5 lg:max-w-md xl:max-w-lg animate-fade-in">
        <h1 className=" text-primary text-center text-2xl">Login</h1>
        <hr />
        <Form {...form}  >
          <form onSubmit={handleSubmit(onSubmit)}  >
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Ensure the input value updates
                        console.log("Username changed");
                      }}
                    />
                  </FormControl>
                  <div className=" h-">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Ensure the input value updates
                        console.log("Username changed");
                      }}
                    />
                  </FormControl>
                  <div className=" h-">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              
              control={control}
              name="city"
              render={({ field }) => (
                <FormItem >
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Ensure the input value updates
                        console.log("Username changed");
                      }}
                    />
                  </FormControl>
                  <div className=" h-">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Ensure the input value updates
                        console.log("Password changed");
                      }}
                    />
                  </FormControl>

                  <div className=" h-">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className=" w-full py-5 mt-10 ">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
