"use client";

import Link from "next/link";
import { Menu, PlusCircle } from "lucide-react";

import { SessionPayload } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileMenu({ session }: { session: SessionPayload | null }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="hover:bg-accent">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 p-6 flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-2">
          <Link
            href="/books"
            className="flex items-center px-4 rounded-md text-lg font-medium transition-colors hover:bg-secondary active:bg-secondary/80"
          >
            Books
          </Link>
          <Link
            href="/faq"
            className="flex items-center px-4 rounded-md text-lg font-medium transition-colors hover:bg-secondary active:bg-secondary/80"
          >
            Support
          </Link>
        </nav>

        <Separator className="my-2" />

        <div className="flex flex-col gap-4">
          {!session ? (
            <div className="flex flex-col gap-2">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full h-11 text-base">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full h-11 text-base">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <Link href="/dashboard/add-book" className="w-full">
              <Button className="w-full h-11 gap-2 text-base shadow-sm">
                <PlusCircle className="h-4 w-4" />
                Add a Book
              </Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
