import axios from 'axios'

import { API_URL } from '../config'

const api = axios.create({
  baseURL: API_URL,
  timeout: 29000,
})

// function getToken() {
//   try {
//     const valueLocalStorage = localStorage.getItem(`persist:${KEY}`)
//     const { token } = JSON.parse(JSON.parse(valueLocalStorage).auth)
//     return token
//   } catch (error) {
//     return null
//   }
// }

// api.interceptors.request.use(async config => {
//   const token = getToken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// api.interceptors.response.use(async config => {
//   return config
// })

export async function signUp({ name, lastname, email, password }) {
  return api.post('/auth/register', { name, lastname, email, password })
}

export default api
