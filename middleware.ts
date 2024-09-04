// https://supabase.com/docs/guides/auth/auth-helpers/nextjs?queryGroups=language&language=ts
// 公式ドキュ通りに作業進める

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from './lib/database.types'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({ req, res }) //クライアント作成
    await supabase.auth.getSession() //セッション情報取得
    return res
  }

  // Refresh session if expired - required for Server Components
  // await supabase.auth.getSession()

  // Ensure the middleware is only called for relevant paths.
//export const config = {
//    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
 //     '/((?!_next/static|_next/image|favicon.ico).*)',
 //   ],
 // }