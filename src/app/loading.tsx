import { Loader2, BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">
      <BookOpen className="h-16 w-16 text-primary animate-pulse" />

      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-primary">
          Opening the archives...
        </h2>
        <p className="text-muted-foreground animate-pulse">
          Browsing the shelves of BookLoop
        </p>
      </div>

      <Loader2 className="h-16 w-16 text-accent animate-spin" />
    </div>
  );
}
