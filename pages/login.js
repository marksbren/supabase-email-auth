import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
  
const Login = () => {
  const supabase = useSupabaseClient()

  return (  
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
    </div>
  )
}

export default Login