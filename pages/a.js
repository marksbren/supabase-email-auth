import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
  
const Login = () => {
  const supabase = useSupabaseClient()
  const session = useSession()
  const router = useRouter();
  const [startingForm, setStartingForm] = useState("sign_up");

  useEffect(() => {
    if(router.asPath.includes("auth-sign-in")){
      setStartingForm("sign_in")
    } 
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (  
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Auth 
            supabaseClient={supabase} 
            view={startingForm}
            appearance={{ theme: ThemeSupa }} 
          />
        </div>
      </div>
    </div>
  )
}

export default Login