import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /resources to /login
  if (pathname === '/resources') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect /community to /login
  if (pathname === '/community') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/resources', '/community'],
};
