import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Dashboard from '../components/Dashboard'
import HomeComponent from '../components/HomeComponent'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (  
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <HomeComponent session={session} />
      ) : (
        <Dashboard session={session} />
      )}
    </div>
  )
}

export default Home