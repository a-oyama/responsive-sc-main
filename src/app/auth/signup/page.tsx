import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Signup from '@/app/components/signup'
import type { Database } from '../../../../lib/database.types'

// サインアップページ，supabaseclを取得
const SignupPage = async () => {
    const supabase = createServerComponentClient<Database>({
       cookies,
})

  // セッション情報取得
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // 認証している場合，トップページへ
  if (session) {
    redirect('/')
  }

  // 未ログインはサインアップページへ
  return <Signup />

}

export default SignupPage