import { NextResponse } from 'next/server';

// This is the required export for Next.js 16+
export default function proxy(req) {
  const token = req.cookies.get('admin_token')?.value;
  const { pathname } = req.nextUrl;

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    if (!token) {
      // If no token, redirect to the login page
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

// This tells Next.js to only run this code for admin pages
export const config = {
  matcher: ['/admin/:path*'],
};