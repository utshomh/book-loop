import Link from "next/link";
import { Menu, PlusCircle } from "lucide-react";

import { SessionPayload } from "@/lib/session";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu({}: { session: SessionPayload }) {
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
