"use client";

import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/app/actions/auth";
import { LoginSchema } from "@/schemas/auth";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { SubmitButton } from "@/components/ui/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success("Logged in successfully!");
          form.reset();
          redirect("/books");
        }
      });
    });
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitButton loading={isPending} fallback={"Logging in..."}>
              Login
            </SubmitButton>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <Link
          href="/register"
          className="text-sm text-muted-foreground hover:underline"
        >
          Don&apos;t have an account? Register
        </Link>
      </CardFooter>
    </Card>
  );
}
