import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const tier = url.searchParams.get("tier");

  if (
    tier === "beginner" ||
    tier === "intermediate" ||
    tier === "advanced"
  ) {
    url.searchParams.delete("tier");

    const res = NextResponse.redirect(url);
    res.cookies.set("tier", tier, {
      path: "/",
    });

    return res;
  }

  return NextResponse.next();
}