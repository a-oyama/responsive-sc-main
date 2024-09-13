import { notFound } from 'next/navigation'
//import { createClient } from '../../../../utils/supabase-server'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import BlogEdit from '../../../components/blog/blog-edit'

type PageProps = {
  params: {
    blogId: string
  }
}

// ブログ編集ページ
const BlogEditPage = async ({ params }: PageProps) => {
  const supabase = createClientComponentClient()

  // ブログ詳細取得
  const { data: blog } = await supabase.from('blogs').select().eq('id', params.blogId).single()

  // ブログが存在しない場合
  if (!blog) return notFound()

  return <BlogEdit blog={blog} />
}

export default BlogEditPage