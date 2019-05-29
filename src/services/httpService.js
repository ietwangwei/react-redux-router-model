import axios from 'axios'
import httpInspect from './httpInspect'

export default function (options) {
  const promise = axios({
    header: httpInspect.setConfig(options.config),
    method: options.method,
    url: options.url,
    params: options.params,
    data: options.data
  })
  
  return new Promise((resolve, reject) => {
    promise.then(res => {
      httpInspect.responseHandler(res, resolve)
    }, err => {
      httpInspect.errorHandler(err, reject)
    })
  })
}
