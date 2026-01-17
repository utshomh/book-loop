import Link from "next/link";

import { Logo } from "@/components/common/logo";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
          {/* Brand */}
          <Logo />

          {/* Links Row */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-muted-foreground">
            <Link
              href="/books"
              className="hover:text-primary transition-colors"
            >
              Books
            </Link>
            <Link
              href="/categories"
              className="hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              Support
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Legal
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
