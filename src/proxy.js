import { NextResponse } from "next/server";
import getPageRedirect from "./utils/getPageRedirect";
import { verifyToken } from "./lib/auth";

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

const PROTECTED_PATHS = ["/protected-files"];

function isProtectedPath(pathname) {
  return PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );
}


export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isDev = process.env.NODE_ENV === "development";
  const nonce = crypto.randomUUID();

  // uncomment if need

  // const cspHeader = buildCsp(nonce, isDev);

  if (isProtectedPath(pathname)) {
    const token = request.cookies.get("token")?.value;
    const payload = token ? await verifyToken(token) : null;

    if (!payload) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);


  // uncomment if need

  // requestHeaders.set("x-nonce", nonce);
  // requestHeaders.set("Content-Security-Policy", cspHeader);

  const redirectUrl = await getPageRedirect(pathname.replace(/^\//, ""));
  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // uncomment if need

  // response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("x-pathname", pathname);

  if (pathname === "/&") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};