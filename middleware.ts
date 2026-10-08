import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionToken } from '@/lib/token';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('cam_mem_session')?.value;

    if (!sessionCookie) {
      // Redirect to login page with return url
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const session = await verifySessionToken(sessionCookie);
    if (!session) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      loginUrl.searchParams.set('error', 'session_expired');
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete('cam_mem_session');
      return response;
    }

    // Role check: Only ADMIN role can access /admin
    if (session.role !== 'ADMIN') {
      const unauthorizedUrl = new URL('/login', request.url);
      unauthorizedUrl.searchParams.set('error', 'unauthorized_role');
      return NextResponse.redirect(unauthorizedUrl);
    }
  }

  // Security response headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
