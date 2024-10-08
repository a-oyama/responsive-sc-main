//サインアップ画面の左ナビ設定

'use client'

// 画像インポート
import {
    UserCircleIcon,
    EnvelopeIcon,
    KeyIcon,
    ArrowLeftOnRectangleIcon //アイコン群
  } from '@heroicons/react/24/outline'
  import { usePathname } from 'next/navigation'
  import Link from 'next/link'
  
  // セッティング用ナビゲーション
  const subNavigation = [
    {
      name: 'プロフィール',
      icon: UserCircleIcon,
      href: '/settings/profile',
    },
    {
      name: 'メールアドレス',
      icon: EnvelopeIcon,
      href: '/settings/email',
    },
    {
      name: 'パスワード',
      icon: KeyIcon,
      href: '/settings/password',
    },
    {
      name: 'ログアウト',
      icon: ArrowLeftOnRectangleIcon,
      href: '/settings/logout',
    },
  ]
  
  // レイアウト,usePathnameで現在表示ページのパス取得
  const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
  
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 text-sm space-y-1 font-bold flex flex-col">
          {subNavigation.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className={`${
                  item.href == pathname && 'bg-sky-100 text-sky-500'
                } hover:bg-sky-100 px-3 py-2 rounded-full`}
              >
                <item.icon className="inline-block w-5 h-5 mr-2" />
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="col-span-2">{children}</div>
      </div>
    )
  }
  
  export default SettingsLayout