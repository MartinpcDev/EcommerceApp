import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar'
import { Routing } from './routing/Routing'
import { getUser } from './services/userServices'

export const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    try {
      const jwtUser = getUser()
      if (Date.now() >= jwtUser.exp * 1000) {
        window.localStorage.removeItem('token')
        window.location.reload()
      } else {
        setUser(jwtUser)
      }
    } catch (error) {}
  }, [])
  return (
    <div className='grid grid-rows-[80px] auto-rows-auto font-montserrat'>
      <NavBar user={user} />
      <main className=''>
        <Routing />
      </main>
    </div>
  )
}
