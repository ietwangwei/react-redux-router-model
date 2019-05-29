import httpService from './httpService'
import urls from './constUrls'

export const users = {
  login (data) {
    return httpService({
      method: 'post',
      url: urls.user.login,
      data: data
    })
  }
}
