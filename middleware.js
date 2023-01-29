import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
const securedPaths = ['/account']
const inaccessibleWhenLoggedIn = ['/a']


export async function middleware(req) {
  console.log(req.nextUrl.pathname)
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next()
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareSupabaseClient({ req, res })
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Create redirect (both to homepage for secured and inaccesible paths)
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'

  if (securedPaths.includes(req.nextUrl.pathname)){
    if (session?.user.email?.endsWith('@gmail.com')) {
      // Authentication successful, forward request to protected route.
      return res
    }
    // preserve redirect
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
  }

  if (inaccessibleWhenLoggedIn.includes(req.nextUrl.pathname)){
    if (!session) {
      // if no session avaible.
      return res
    }
  }

  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ['/account','/a'],
}