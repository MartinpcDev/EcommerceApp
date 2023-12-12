import apiClient from '../utils/api-client'

export const checkoutAPI = () => {
  return apiClient.post('/order/checkout')
}
