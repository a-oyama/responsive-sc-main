'use client'

import Link from 'next/link'
import type { Session } from '@supabase/auth-helpers-nextjs'
import useStore from '../../../store'
import Image from 'next/image'
import { useEffect } from 'react'
import React from 'react'
import type { Database } from '../../../lib/database.types'
type ProfileType = Database['public']['Tables']['profiles']['Row']


// ナビゲーション (引数にprofile追加)
const Navigation = ({ 
  session,
  profile 
}: {
  session: Session | null
  profile: ProfileType | null
 }) => {
  //セットユーザーを利用し,状態管理に格納
  const { setUser } = useStore()

  // 状態管理にユーザー情報を保存
  useEffect(() => {
    setUser({
      id: session ? session.user.id : '',
      email: session ? session.user.email! : '',
      name: session && profile ? profile.name : '',
      introduce: session && profile ? profile.introduce : '',
      avatar_url: session && profile ? profile.avatar_url : '',
    })
  }, [session, setUser, profile])


  // ヘッダー部
  return (
    <header>
      <nav>
         <ul>
           <li>
              <div className="logo">
              <Link href="/">
                 <h3>らくらくスケジュール</h3>
              </Link>
              </div>
           </li>
         </ul>
      </nav>

{/* セッション存在する場合，プロフィールを表示 / ない場合はログイン・サインアップのみ */}
          {session ? (
            <nav>
              <ul>
                <li>
                    <Link href="/settings/profile">
                      プロフィール編集
                    <div className="relative w-10 h-10">
                    <Image
                        src={profile && profile.avatar_url ? profile.avatar_url : '/default.png'}
                        className="rounded-full object-cover"
                        alt="avatar"
                        fill
                     />
                    </div>
                    </Link>
              </li>
              {/* <li>プロフィール編集</li> */}
            </ul>
          </nav>
          /* else => セッションが存在しない場合 */
          ) : (
            <nav>
              <ul>
                <li>
                   <Link href="/auth/login">ログイン</Link>
                </li>
                <li>
                   <Link href="/auth/signup">サインアップ</Link>
                </li>
              </ul>
            </nav>
          )}
    </header>
  )
}

export default Navigation