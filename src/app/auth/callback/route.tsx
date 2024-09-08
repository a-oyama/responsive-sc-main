import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { Database } from '../../../../lib/database.types'

// サインアップ後のリダイレクト先

// GET関数作成
export async function GET(request: NextRequest) {
    // URL取得
    const requestUrl = new URL(request.url)
    // 上のURLから認証コードを取得
    const code = requestUrl.searchParams.get('code')

    // codeが存在する場合，認証する
    if (code) {
        // Supabaseのクライアントインスタンスを作成
        const supabase = createRouteHandlerClient<Database>({ cookies })
        // 認証コードをセッショントークンに交換
        await supabase.auth.exchangeCodeForSession(code)
      }
    
      // トップページにリダイレクト
      return NextResponse.redirect(requestUrl.origin)
    }