import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Middleware executing for path:", pathname);

  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = defaultLocale;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  console.log("Redirecting to:", newUrl.toString());
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg|.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.webp).*)",
  ],
};
