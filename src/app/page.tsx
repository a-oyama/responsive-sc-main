//　メインページ

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Link } from 'react-router-dom';
import { cookies } from "next/headers"
import type { Database } from "../../lib/database.types"

import './App.css'

import ChatPage from "./components/chatpage"



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
   {session ? <div>ログイン済</div> : <div>未ログイン</div>}
</div>

{/* Calendar */}
<p>カレンダー部</p>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
<p>カレンダー部</p>





</div>












 )
}

export default Home