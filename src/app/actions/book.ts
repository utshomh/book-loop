"use server";

import { prisma } from "@/lib/prisma";
import { Book, Category, User } from "@prisma/client";

export async function getBooks(
  length?: number
): Promise<Array<Book & { seller: User; category: Category }>> {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: "asc" },
    take: length,
    include: { category: true, seller: true },
  });
  return books;
}
