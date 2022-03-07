import { IMAGE_API_URL, UPLOAD_SONG_API_URL, USER_API_URL } from '../constants/auth.constant'
import axiosClient from './axiosClient'

export const callAPI = (method, url, headers, params, body, image, song) => {
  const configValue = {
    method: method.toLowerCase(),
    url,
    headers,
    params,
    data: body,
  }

  if (url.startsWith('/v1/users') || url.startsWith('/v1/auth') || url.startsWith('/v1/permission')) {
    configValue.baseURL = USER_API_URL
  }

  if (url.startsWith('/v1/images')) {
    configValue.baseURL = IMAGE_API_URL
    configValue.headers = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    }
  }

  if (url.startsWith('/v1/upload-song')) {
    configValue.baseURL = UPLOAD_SONG_API_URL
    configValue.headers = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    }
  }

  return axiosClient(configValue)
}
