import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, useSessionContext } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  )
}
export default MyApp