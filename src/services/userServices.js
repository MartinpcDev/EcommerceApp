import { jwtDecode } from 'jwt-decode'
import apiClient from '../utils/api-client'

const tokenName = 'token'

export const signup = async (user, profile) => {
  const body = new FormData()
  body.append('name', user.name)
  body.append('email', user.email)
  body.append('password', user.password)
  body.append('deliveryAddress', user.deliveryAddress)
  body.append('profilePic', profile)

  const { data } = await apiClient.post('/user/signup', body)
  window.localStorage.setItem(tokenName, data.token)
}

export const login = async (user) => {
  const { data } = await apiClient.post('/user/login', user)
  window.localStorage.setItem(tokenName, data.token)
}

export const logout = () => {
  window.localStorage.removeItem(tokenName)
}

export const getUser = () => {
  try {
    const jwt = window.localStorage.getItem(tokenName)
    return jwtDecode(jwt)
  } catch (error) {
    return null
  }
}

export const getJwt = () => {
  return window.localStorage.getItem(tokenName)
}
