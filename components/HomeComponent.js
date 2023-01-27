import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

// Import other sub components

export default function HomeComponent({ session }) {

  return (
    <h1>Logged out homepage</h1>
  )
}