import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Spanish pages live under /es/*. They are rewritten to the same page with
// ?lang=es so every page keeps reading the language from searchParams.
// The x-lang request header lets the root layout set <html lang>.
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const isEs = pathname === "/es" || pathname.startsWith("/es/");

  // Legacy ?lang=xx URLs -> permanent redirect to the path-based URL.
  if (searchParams.has("lang")) {
    const url = request.nextUrl.clone();
    const lang = url.searchParams.get("lang");
    url.searchParams.delete("lang");
    if (lang === "es" && !isEs) {
      url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
    }
    return NextResponse.redirect(url, 308);
  }

  const headers = new Headers(request.headers);

  if (isEs) {
    headers.set("x-lang", "es");
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/es" ? "/" : pathname.slice(3);
    url.searchParams.set("lang", "es");
    return NextResponse.rewrite(url, { request: { headers } });
  }

  headers.set("x-lang", "en");
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    // Pages only: skip API, Next internals, metadata routes and files with an extension.
    "/((?!api|_next/static|_next/image|icon|apple-icon|opengraph-image|twitter-image|manifest|sitemap|robots|llms|.*\\..*).*)",
  ],
};
