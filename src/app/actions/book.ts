"use server";

import z from "zod";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { AddBookSchema } from "@/schemas/book";
import { Book, Category, User } from "@prisma/client";

export async function getBooks(
  length?: number
): Promise<Array<Book & { seller: User; category: Category }>> {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: "desc" },
    take: length,
    include: { category: true, seller: true },
  });
  return books;
}

export async function getBookById(
  id: number
): Promise<(Book & { seller: User; category: Category }) | null> {
  const book = await prisma.book.findFirst({
    where: { id: id },
    include: {
      category: true,
      seller: true,
    },
  });
  return book;
}

export async function addBook(book: z.infer<typeof AddBookSchema>) {
  const parsed = AddBookSchema.safeParse(book);
  if (!parsed.success) {
    return { error: "Invalid data" };
  }

  const data = parsed.data;

  await prisma.book.create({
    data: {
      ...data,
    },
  });

  redirect("/books");
}
