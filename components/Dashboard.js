import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

// Import other sub components

export default function Dashboard({ session }) {

  return (
    <h1>Dashboard for {session.user.id}</h1>
  )
}