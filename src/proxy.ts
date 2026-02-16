import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // SAFETY CHECK: Skip all files with extensions (images, fonts, etc.) and internal paths
  if (
    pathname.includes(".") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Check if pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Detect Facebook crawler (and other social media bots)
  const userAgent = request.headers.get("user-agent") || "";
  const isSocialBot =
    /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot/i.test(
      userAgent,
    );

  if (pathnameIsMissingLocale) {
    // For social media bots, rewrite instead of redirect
    if (isSocialBot) {
      return NextResponse.rewrite(
        new URL(`/${defaultLocale}${pathname}`, request.url),
      );
    }

    // For regular users, redirect as before
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
