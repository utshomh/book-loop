import { getSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session) {
      const loginUrl = new URL("/login", request.nextUrl.origin);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Session verification failed:", error);
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/books/add"],
};
