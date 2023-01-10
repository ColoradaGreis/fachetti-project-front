import axios from 'axios'
import { getToken } from '../public/utils'

const token = getToken() || ''
const tokenHeader = token ? `Bearer ${token}` : ''

export const urlApi = axios.create({
  baseURL: 'https://fachettiprojectback-production.up.railway.app/',
  headers: {
    authorization: tokenHeader
  }
})
// export const urlApi = axios.create({
//   baseURL: 'http://localhost:3002/',
//   headers: {
//     authorization: tokenHeader
//   }
// })
export const localhost = axios.create({
  baseURL: 'https://localhost:3000/'
})
