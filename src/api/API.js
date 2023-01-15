import axios from 'axios'

export const urlApi = axios.create({
  baseURL: 'https://fachettiprojectback-production.up.railway.app/'
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
