"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-0.5 transition-colors hover:text-primary text-sm border-b-2 rounded-b",
        isActive
          ? "text-foreground border-primary font-bold"
          : "text-muted-foreground border-transparent font-medium"
      )}
    >
      {children}
    </Link>
  );
}
