//　メインページ

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

import type { Database } from "../../lib/database.types"

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

    <div>
  <div className="text-center text-xl">
   {/* セッション取得している or ない */}
    {session ? <div>ログイン済</div> : <div>未ログイン</div>}
  </div>





  <div className="text-center">テストページ1</div>
  <div className="text-center">テストページ2</div>
  <div className="text-center">テストページ3</div>




  
  </div>
  )
}

export default Home