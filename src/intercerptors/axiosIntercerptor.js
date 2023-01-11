import { urlApi } from '@/api'
import { getToken } from '../public/utils'
import { SnackbarUtilities, getValidationError } from '../utils'

const axiosInterceptor = () => {
  const udpateHeader = (req) => {
    const token = getToken() || ''
    const newHeader = {
      ...req.headers,
      Authorization: `Bearer ${token}`
    }
    req.headers = newHeader
    return req
  }
  urlApi.interceptors.request.use(req => {
    return udpateHeader(req)
  })
  urlApi.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err)
    // if (err.response.status === 401) {
    //   SnackbarUtilities.error('Sessão expirada, faça login novamente')
    //   setTimeout(() => {
    //     window.location.href = '/login'
    //   }, 2000)
    // }
    SnackbarUtilities.error(getValidationError(err.code) || 'Error inesperado')
    return Promise.reject(err)
  })
}

export default axiosInterceptor
