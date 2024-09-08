// サーバーサイド実行
'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Navigation from './navigation'
import type { Database } from '../../../lib/database.types'

// 認証状態の監視,クライアント作成
const SupabaseListener = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })

  // セッション取得しNavigationへ渡す
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // プロフィール取得
  let profile = null

  if ( session ) {
    const { data: currentProfile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single()

      // セッションのメアドとプロフのメアドを比較し，
      profile = currentProfile

      // 異なる場合(メールアドレスを変更した場合)，プロフィールを更新
      if (currentProfile && currentProfile.email !== session.user.email) {
        // メールアドレスを更新
        const { data: updatedProfile } = await supabase
          .from('profiles')
          .update({ email: session.user.email })
          .match({ id: session.user.id })
          .select('*')
          .single()
  
        profile = updatedProfile
      }
    }

    // 取得したプロフをnavigationへ渡す
  return <Navigation session={session} profile={profile}/>
}

export default SupabaseListener