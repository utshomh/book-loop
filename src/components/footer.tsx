import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span>BookLoop</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The best marketplace for second-hand books. Buy, sell, and trade
              your favorite stories within your community.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Browse
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/books" className="hover:text-primary">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-primary">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BookLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
