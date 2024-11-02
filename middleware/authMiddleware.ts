import { NextResponse } from 'next/server';
import store from '@/store/store';
import { RootState } from '@/types/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function authMiddleware(req: any) {
  const state: RootState = store.getState();

  if (!state.user.isAuthenticated && req.nextUrl.pathname !== '/login') {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
