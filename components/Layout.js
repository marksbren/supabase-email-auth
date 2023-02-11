// components/layout.js
import { useSessionContext } from '@supabase/auth-helpers-react'

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  const { isLoading, session, error } = useSessionContext();
  
  if(isLoading){return null}

  return (
    <>
      <Navbar session={session}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}