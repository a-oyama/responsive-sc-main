// プロフィールページ
// セッション情報取得し，未認証はログインページに戻る

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import Profile from '@/app/components/profile'

import type { Database } from '../../../../lib/database.types'

// supabaseセッション情報取得
const ProfilePage = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // 未認証の場合,ログインページにリダイレクト
  if (!session) {
    redirect('/auth/login')
  }
  // 認証はプロフィールページ
  return <Profile />
}

export default ProfilePage