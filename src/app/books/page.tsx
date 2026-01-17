import { getBooks } from "@/app/actions/book";
import { BookCard } from "@/components/book/book-card";
import { Separator } from "@/components/ui/separator";
import { BookCopy } from "lucide-react";

export default async function Books() {
  const books = await getBooks();

  return (
    <section className="bg-background py-8">
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-xs">
              <BookCopy className="h-4 w-4" />
              <span>All Books</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Explore the <span className="text-primary">Library</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse our community-driven collection of pre-loved and new books.
              Find your next favorite story at a fraction of the cost.
            </p>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-4 bg-muted/40 px-5 py-2.5 rounded-full border border-border/60 shadow-sm">
              <div className="flex -space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="h-4 w-px bg-border" />
              <p className="text-sm font-medium tracking-tight text-muted-foreground flex items-center gap-2">
                Showing
                <span className="text-xl font-extrabold text-foreground tabular-nums">
                  {books.length}
                </span>
                available titles
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/20" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed rounded-xl">
            <p className="text-muted-foreground italic">
              No books found on the shelves today.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
