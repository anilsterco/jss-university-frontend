import { NextResponse } from "next/server";
import getPageRedirect from "./utils/getPageRedirect";

function buildCsp(nonce, isDev) {
  return `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'
      https://www.google.com
      https://www.gstatic.com
      https://www.recaptcha.net
      https://www.googletagmanager.com
      https://www.google-analytics.com
      ${isDev ? "'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline'
      https://fonts.googleapis.com
      https://cdn.jsdelivr.net;
    img-src 'self' data: blob: https:;
    media-src 'self' https:;
    font-src 'self'
      https://fonts.gstatic.com
      https://cdn.jsdelivr.net
      data:;
    connect-src 'self'
      https://www.google-analytics.com
      https://analytics.google.com
      https://stats.g.doubleclick.net
      https://www.gstatic.com
      https://www.recaptcha.net
      https:;
    frame-src 'self'
      https://www.youtube.com
      https://youtube.com
      https://www.google.com
      https://www.gstatic.com
      https://www.recaptcha.net
      https://maps.google.com
      https://www.google.com/maps/
      https://maps.googleapis.com
      https://www.googletagmanager.com;
    frame-ancestors 'self';
    object-src 'none';
    base-uri 'self';
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isDev = process.env.NODE_ENV === "development";
  const nonce = crypto.randomUUID();
  const cspHeader = buildCsp(nonce, isDev);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  const redirectUrl = await getPageRedirect(pathname.replace(/^\//, ""));
  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("x-pathname", pathname);

  if (pathname === "/&") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};