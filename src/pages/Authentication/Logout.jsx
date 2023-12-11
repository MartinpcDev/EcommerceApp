import { useEffect } from 'react'
import { logout } from '../../services/userServices'

export const Logout = () => {
  useEffect(() => {
    logout()
    window.location = '/'
  }, [])

  return null
}
