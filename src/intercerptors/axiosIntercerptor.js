import { urlApi } from '@/api'
import { getToken } from '../public/utils'

const axiosInterceptor = () => {
  const udpateHeader = (req) => {
    const token = getToken() || ''
    const newHeader = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    req.headers = newHeader
    return req
  }
  urlApi.interceptors.request.use(req => {
    console.log(req, 'req')
    return udpateHeader(req)
  })
}

export default axiosInterceptor
