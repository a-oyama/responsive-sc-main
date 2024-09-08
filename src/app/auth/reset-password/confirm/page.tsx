// メール変更用メールのURLをクリックすると，パスワード変更ページに誘導

import Password from '@/app/components/password'

// パスワード再設定ページ
const ResetPasswordConfirmPage = () => {
  return (
    <div className="max-w-[400px] mx-auto">
      {/* パスワード変更 */}
      <Password />
    </div>
  )
}

export default ResetPasswordConfirmPage