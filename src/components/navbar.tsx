import Link from "next/link";
import { BookOpen, Menu, PlusCircle } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { getUser, SessionPayload } from "@/lib/session";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default async function Navbar() {
  const user = await getUser();

  return (
    <nav className="border-b bg-background w-full sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">BookLoop</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {user ? (
            <>
              <Link href="/dashboard/add-book" className="hidden md:block">
                <Button variant="outline" size="sm" className="gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add a Book
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9 cursor-pointer border">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/my-books">My Listings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <form action={logout}>
                    <button className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-red-600">
                      Logout
                    </button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="md:hidden">
                <MobileMenu user={{ user }} />
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ user }: { user: SessionPayload }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <Link href="/dashboard/add-book">
            <Button variant="outline" className="w-full justify-start gap-2">
              <PlusCircle className="h-4 w-4" />
              Add a Book
            </Button>
          </Link>
          <Link href="/dashboard" className="text-sm font-medium px-2">
            Dashboard
          </Link>
          <Link href="/dashboard/my-books" className="text-sm font-medium px-2">
            My Listings
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
