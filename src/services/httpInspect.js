export default {
  setConfig (config) {
    return {}
  },
  responseHandler (res, resolve) {
    resolve(res.data)
  },
  errorHandler (err, reject) {
    reject(err)
  }
}
