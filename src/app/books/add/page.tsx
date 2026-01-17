import { redirect } from "next/navigation";

import { getSession } from "@/lib/session";
import { getCategories } from "@/app/actions/category";
import AddBookForm from "@/components/book/add-book-form";

export default async function AddBookPage() {
  const session = await getSession();
  const categories = await getCategories();

  if (!session?.user) {
    return redirect("/login");
  }

  return <AddBookForm categories={categories} sellerId={session.user.id} />;
}
