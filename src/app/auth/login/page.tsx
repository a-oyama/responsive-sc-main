import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Login from '@/app/components/login'
import type { Database } from '../../../../lib/database.types'


// ログインページ
const LoginPage = async () => {
    // supabaseクライアント作成
    const supabase = createServerComponentClient<Database>({
        cookies,
    })

      // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession()

    // セッション存在している場合，toppageにリダイレクト
    if (session) {
        redirect('/')
      }
    // 未ログインは,ログイン画面表示
      return <Login />

  }
  
  export default LoginPage