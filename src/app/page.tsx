//　メインページ
import { Suspense } from 'react'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import type { Database } from "../../lib/database.types"
import './App.css'
import Loading from './loading'

import BlogNewButton from "./components/blog/blog-new-button"
import BlogList from './components/blog/blog-list'



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
<div className="text-right text-xl">
   {session ? <div>ログイン済</div> : <div>未ログイン</div>}
</div>

<div className="">
<BlogNewButton />
</div>

<Suspense fallback={<Loading />}>
        {/* @ts-ignore*/}
        <BlogList />
      </Suspense>

</div>












 )
}

export default Home