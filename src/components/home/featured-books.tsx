import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getBooks } from "@/app/actions/book";
import { BookCard } from "@/components/book/book-card";

export async function FeaturedBooks() {
  const books = await getBooks(6);

  return (
    <section className="bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2 pl-2 border-l-3 border-primary">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Fresh on the Shelves
          </h2>
          <p className="text-muted-foreground">
            Discover fresh books from sellers.
          </p>
        </div>

        <Link
          href="/books"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-all"
        >
          All Books
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
