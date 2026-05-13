// middleware.js
import { NextResponse } from "next/server";
import { BASE_URL } from "./config/config";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const fullUrl = request.nextUrl.href;



  // Skip static files — anything with a file extension
  const isStaticFile = /\.[a-zA-Z0-9]+$/.test(pathname);
  if (isStaticFile) {
    return NextResponse.next();
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(`${BASE_URL}redirection/${fullUrl}`, { // ✅ encode it
      signal: controller.signal,
      cache: "no-store",
    });
  

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();

      if (data?.status) {
        return NextResponse.redirect(new URL(data.data, request.url));
      }
    }
  } catch (err) {
    console.error("Redirect API error:", err?.message);
  }

  // Generate a random nonce for this request
  const nonce = crypto.randomUUID();

  // 'unsafe-eval' is only needed for Next.js in development mode
  const isDev = process.env.NODE_ENV === "development";

  // Note: 'strict-dynamic' is omitted so host allowlists apply; required for
  // react-google-recaptcha (gstatic/www.google.com) and Google Maps embeds.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://www.google.com https://www.gstatic.com ${isDev ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
    img-src 'self' data: blob: https:;
    media-src 'self' https:;
    font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:;
    connect-src 'self' https:;
    frame-src 'self'
      https://www.youtube.com https://youtube.com
      https://www.google.com https://www.gstatic.com
      https://maps.google.com https://www.google.com/maps/;
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
