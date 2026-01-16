import Link from "next/link";
import { PlusCircle } from "lucide-react";

import Logo from "@/components/logo";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserDropdown } from "@/components/user-dropdown";

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav className="border-b bg-background w-full sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
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
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
