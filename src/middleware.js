// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const res = NextResponse.next();
  // Use request.nextUrl.pathname which always has the correct path
  res.headers.set("x-pathname", request.nextUrl.pathname);
  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
