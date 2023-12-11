import apiClient from '../utils/api-client'

export const addToCartAPI = (id, quantity) => {
  return apiClient.post(`/cart/${id}`, { quantity })
}

export const getCartAPI = () => {
  return apiClient.get('/cart')
}

export const removeFromCartAPI = (id) => {
  return apiClient.patch(`/cart/remove/${id}`)
}
