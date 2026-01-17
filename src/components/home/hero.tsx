import { Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-8 overflow-hidden bg-secondary/30 space-y-8 rounded-2xl">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-accent-foreground border border-primary/20">
          <Sparkles className="h-4 w-4" />
          The Sustainable Book Marketplace
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl mb-6">
          Give Old Stories <br />
          <span className="text-foreground relative">
            A New Chapter
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-accent"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          BookLoop is a web application for browsing and listing second-hand
          books. Users can publicly explore available books and view detailed
          information, while authenticated users can register, log in, and add
          new book listings.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title, author, or ISBN..."
              className="pl-10 h-12 rounded-full bg-background border-primary/20 shadow-sm"
            />
          </div>
          <Button size="lg" className="rounded-full h-12 px-8 font-semibold">
            Search Books
          </Button>
        </div>

        {/* <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" /> 5k+ Readers
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> 12k+ Books Listed
            </span>
          </div> */}
      </div>
    </section>
  );
}
