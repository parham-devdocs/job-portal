// middleware.ts (in root directory)
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    try {
        const isPublicPage = 
            request.nextUrl.pathname === "/login" || 
            request.nextUrl.pathname === "/register" || 
            request.nextUrl.pathname === "/";

        const token = request.cookies.get("token")?.value;

        // If no token AND trying to access protected page → redirect to login
        if (!token && !isPublicPage) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

    

        return NextResponse.next();
    } catch (error) {
        return NextResponse.error();
    }
}

// Run middleware on all routes except static files and API
export const config = {
    matcher: [
  "/",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};