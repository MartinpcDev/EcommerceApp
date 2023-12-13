import apiClient from '../utils/api-client'

export const getSuggestionsAPI = (search) => {
  return apiClient.get(`/products/suggestions?search=${search}`)
}
