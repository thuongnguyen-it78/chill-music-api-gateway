require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const DATABASE_URL = process.env.DATABASE_URL
export const PORT = process.env.PORT || 3008

export const USER_API_URL = isProduction ? process.env.USER_API_URL : 'http://localhost:3002'
export const MUSIC_API_URL = isProduction ? process.env.MUSIC_API_URL : 'http://localhost:3001'
export const IMAGE_API_URL = isProduction
  ? process.env.IMAGE_API_URL
  : 'http://localhost:3003'
export const UPLOAD_SONG_API_URL = isProduction
  ? process.env.UPLOAD_SONG_API_URL
  : 'http://localhost:3004'
