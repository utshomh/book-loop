"use server";

import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

export async function getCategories(length?: number): Promise<Array<Category>> {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
    take: length,
  });
  return categories;
}
