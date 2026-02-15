import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and internal paths
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Check if pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // If missing locale, rewrite it to /en/... so that [lang] picks it up
  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }

  // If the path starts with /en, redirect to / (canonical) to avoid duplicate content
  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    const pathWithoutLocale = pathname.replace(`/${defaultLocale}`, "");
    const newPath = pathWithoutLocale === "" ? "/" : pathWithoutLocale;
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any file with an extension (e.g. .svg, .png, .jpg, .jpeg, .gif, .webp)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
