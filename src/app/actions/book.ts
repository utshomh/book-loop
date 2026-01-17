"use server";

import { prisma } from "@/lib/prisma";
import { Book } from "@prisma/client";

export async function getBooks(length?: number): Promise<Array<Book>> {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: "asc" },
    take: length,
  });
  return books;
}
