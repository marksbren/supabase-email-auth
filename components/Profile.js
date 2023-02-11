import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

// Import the new component
import Avatar from './Avatar'

export default function Profile({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  console.log(user)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1>Account</h1>
          <form>
            {/* Add to the body */}
            <Avatar
              uid={user.id}
              url={avatar_url}
              size={150}
              onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ username, website, avatar_url: url })
              }}
            />
            {/* ... */}
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="text" class="form-control" value={session.user.email} disabled />
            </div>
            <div class="form-group">
              <label for="username" >Username</label>
              <input
                class="form-control" 
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div  class="form-group">
              <label for="website">Website</label>
              <input
                class="form-control" 
                id="website"
                type="website"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Save'}
            </button>
            <button className="btn btn-secondary" onClick={() => supabase.auth.signOut()}>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
    
  )
}