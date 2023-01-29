import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/router"
import { useEffect } from 'react'

const Logout = () => {
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.signOut().then(
      router.push('/')
    )
  });

  return <></>
}

export default Logout