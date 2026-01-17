import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { UserDropdown } from "@/components/layout/user-dropdown";

export async function Navbar() {
  const session = await getSession();

  return (
    <nav className="border-b bg-background w-full sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-start">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link
            href="/books"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Books
          </Link>
          <Link
            href="/faq"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Support
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          {session ? (
            <>
              <Link href="/dashboard/add-book" className="hidden md:block">
                <Button variant="outline" size="sm" className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add a Book
                </Button>
              </Link>
              <UserDropdown session={session} />
              <ThemeToggle />
              <div className="md:hidden">
                <MobileMenu session={session} />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>

              <ThemeToggle />
              <div className="md:hidden">
                <MobileMenu session={session} />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
