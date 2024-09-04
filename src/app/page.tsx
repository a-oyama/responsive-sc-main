import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

import type { Database } from "../../lib/database.types"

// メインページ
const Home = async () => {
   //クッキー使用しsupabaseクライアント作成
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  // セッション取得(ログイン済 : 未ログイン)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div className="text-center text-xl">
    {session ? <div>ログイン済</div> : <div>未ログイン</div>}
  </div>
  )
}

export default Home