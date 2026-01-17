import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-end gap-2 font-bold text-xl">
      <BookOpen className="h-6 w-6 text-primary" />
      <span>BookLoop</span>
    </Link>
  );
}
