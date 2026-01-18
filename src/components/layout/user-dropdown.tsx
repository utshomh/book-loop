"use client";

import Link from "next/link";
import { toast } from "sonner";
import { redirect } from "next/navigation";

import { logout } from "@/app/actions/auth";
import { SessionPayload } from "@/lib/session";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserDropdown({
  session: { user },
}: {
  session: SessionPayload;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9 cursor-pointer border-2 hover:border-primary transition-colors duration-300">
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            logout().then(() => {
              toast.success("Logged out successfully!");
              redirect("/login");
            });
          }}
        >
          <button className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-red-600">
            Logout
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
