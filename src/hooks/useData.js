import { useEffect, useState } from 'react'
import apiClient from '../utils/api-client'

export const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    apiClient.get(endpoint, customConfig)
      .then(res => {
        setData(res.data)
        setIsloading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsloading(false)
      })
  }, deps || [])

  return { data, error, isloading }
}
