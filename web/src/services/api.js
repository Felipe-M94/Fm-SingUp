import axios from 'axios'

import { API_URL } from '../config'

const api = axios.create({
  baseURL: API_URL,
  timeout: 29000,
})

export default api
