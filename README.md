# CHILL MUSIC API

@Copyright by Andres Nguyen

    try {
      const { data, status } = await callAPI(req.method, req.url, req.headers, req.params, req.body, req.image)
      res.status(status || OK).json(data)
    } catch (error) {
      res.status(error?.response?.status || INTERNAL_SERVER).json({
        message: error.message,
      })
    }
