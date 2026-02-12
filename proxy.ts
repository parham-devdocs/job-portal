// middleware.ts (root directory)

import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    try {
        console.log("===== MIDDLEWARE START =====");

        const pathname = request.nextUrl.pathname;
        console.log("Pathname:", pathname);

        const isPublicPage =
            pathname === "/login" ||
            pathname === "/register";

        console.log("Is Public Page:", isPublicPage);

        const token = request.cookies.get("token")?.value;
        console.log("Token:", token);

        if (!token && !isPublicPage) {
            console.log("No token & not public → Redirecting to /login");
            return NextResponse.redirect(new URL("/login", request.url));
        }

        if (token && isPublicPage) {
            console.log("Token exists & public page → Redirecting to /");
            return NextResponse.redirect(new URL("/", request.url));
        }

        console.log("Allowing request to continue");
        console.log("===== MIDDLEWARE END =====");

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware Error:", error);
        return NextResponse.error();
    }
}

export const config = {
    matcher: [
        "/",
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
