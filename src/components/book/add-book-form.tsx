"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddBookSchema } from "@/schemas/book";
import { addBook } from "@/app/actions/book";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/ui/submit-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Props = {
  categories: { id: number; name: string }[];
  sellerId: number;
};

export default function AddBookForm({ categories, sellerId }: Props) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddBookSchema>>({
    resolver: zodResolver(AddBookSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      image: "",
      price: 0,
      condition: "USED",
      categoryId: undefined,
      sellerId,
    },
  });

  function onSubmit(values: z.infer<typeof AddBookSchema>) {
    startTransition(() => {
      addBook(values).then((data) => {
        if (data?.error) {
          toast.error(data.error);
        } else {
          toast.success("Book added successfully!");
          form.reset({ ...form.getValues(), sellerId });
          redirect("/books");
        }
      });
    });
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Add a Book</CardTitle>
        <CardDescription>
          Turn your bookshelf into a side hustle 📚💰
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Atomic Habits" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="James Clear" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price (৳)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="NEW">New</SelectItem>
                        <SelectItem value="LIKE_NEW">Like New</SelectItem>
                        <SelectItem value="USED">Used</SelectItem>
                        <SelectItem value="WORN">Worn</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={(v) => field.onChange(Number(v))}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={String(cat.id)}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SubmitButton loading={isPending} fallback="Adding Book...">
              Add Book
            </SubmitButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
