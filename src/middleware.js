// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // Generate a random nonce for this request
  const nonce = crypto.randomUUID();

  // 'unsafe-eval' is only needed for Next.js in development mode
  const isDev = process.env.NODE_ENV === "development";

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDev ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
    img-src 'self' data: blob: https:;
    media-src 'self' https:;
    font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:;
    connect-src 'self' https:;
    frame-src 'self' https://www.youtube.com https://youtube.com;
    frame-ancestors 'none';
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  // Clone headers and add CSP & Nonce for Next.js to pick up in Server Components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  // Set response headers for the browser
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: [
    // Apply Middleware to all routes except API, static assets, internal Next.js files
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
