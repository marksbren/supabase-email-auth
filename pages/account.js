import { useSession } from '@supabase/auth-helpers-react'
import Profile from '../components/Profile'
  
const Account = () => {
  const session = useSession()

  if (!session) {
    return (<div>Loading...</div>)
  }

  return (
    <Profile session={session} />
  )
}

export default Account