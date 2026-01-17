import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getCategories } from "@/app/actions/category";

export async function Categories() {
  const categories = await getCategories(6);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2 pl-2 border-l-3 border-primary">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Explore the Archive
          </h2>
          <p className="text-muted-foreground">
            Discover your next favorite read by genre.
          </p>
        </div>

        <Link
          href="/categories"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-all"
        >
          All Categories
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              href={`/books?category=${category.name.toLowerCase()}`}
              className="group"
            >
              <Card className="relative h-32 overflow-hidden border-border/40 bg-card transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/30">
                <CardContent className="flex items-center p-4 h-full gap-4">
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-base font-bold text-foreground truncate group-hover:text-primary transition-colors">
                      {category.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                      Browse Shelf
                    </span>
                  </div>
                </CardContent>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
