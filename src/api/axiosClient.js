require('dotenv').config()

import axios from 'axios'
import { MUSIC_API_URL } from '../constants/auth.constant'

const axiosClient = axios.create({
  baseURL: MUSIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return { data: response.data, status: response.status }
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
