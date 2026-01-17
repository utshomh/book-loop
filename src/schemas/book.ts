import { z } from "zod";

export const AddBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().min(10, "Description is too short"),
  image: z
    .string()
    .url()
    .refine((url) => url.startsWith("https://"), "Image URL must be HTTPS"),
  price: z.number().positive("Price must be greater than 0"),
  condition: z.enum(["NEW", "LIKE_NEW", "USED", "WORN"]),
  categoryId: z.number(),
  sellerId: z.number(),
});
