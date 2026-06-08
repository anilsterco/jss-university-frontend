import { NextResponse } from "next/server";
import getPageRedirect from "./utils/getPageRedirect";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/phd-application-form") {
    const nonce = crypto.randomUUID();

    const isDev = process.env.NODE_ENV === "development"; 

    const cspHeader = `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com ${isDev ? "'unsafe-eval'" : ""};
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
      img-src 'self' data: blob: https:;
      media-src 'self' https:;
      font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:;
      connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https:;
      frame-src 'self'
        https://www.youtube.com https://youtube.com
        https://www.google.com https://www.gstatic.com
        https://maps.google.com https://www.google.com/maps/
        https://www.googletagmanager.com;
      frame-ancestors 'none';
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set("Content-Security-Policy", cspHeader);
    requestHeaders.set("x-pathname", pathname);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.headers.set("Content-Security-Policy", cspHeader);
    response.headers.set("x-pathname", pathname);

    return response;
  }

  const redirectUrl = await getPageRedirect(
    pathname.replace(/^\//, "")
  );

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};