import { useSessionContext } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import HomeComponent from '../components/HomeComponent'

const Home = () => {
  const { isLoading, session, error } = useSessionContext();

  if(isLoading){
    return null
  }

  return (
    <div className="container">
      {!session ? (
        <HomeComponent session={session} />
      ) : (
        <Dashboard session={session} />
      )}
    </div>
  )
}

export default Home