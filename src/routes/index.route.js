import { IMAGE_API_URL, MUSIC_API_URL, UPLOAD_SONG_API_URL, USER_API_URL } from '../constants/auth.constant';
const { createProxyMiddleware } = require('http-proxy-middleware');
const httpProxy = require('express-http-proxy')

const userServiceProxy = httpProxy(USER_API_URL)
const musicServiceProxy = httpProxy(MUSIC_API_URL)

function route(app) {
  app.use('/v1/images', createProxyMiddleware({ target: IMAGE_API_URL, changeOrigin: true }));
  app.use('/v1/upload-song', createProxyMiddleware({ target: UPLOAD_SONG_API_URL, changeOrigin: true }));

  app.use((req, res, next) => {
    try {
      const url = req.url
      if (
        url.startsWith('/v1/users') ||
        url.startsWith('/v1/auth') ||
  
        url.startsWith('/v1/permission')
      ) {
        return userServiceProxy(req, res, next)
      }
  
      return musicServiceProxy(req, res, next)
    } catch (error) {
      next(error)
    }
  })
}

export default route
