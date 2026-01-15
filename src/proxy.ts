import { getUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const user = await getUser();

  if (!user) return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
