import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export const urlApi = axios.create({
  baseURL
})
// export const urlApi = axios.create({
//   baseURL: 'http://localhost:3002/',
//   headers: {
//     authorization: tokenHeader
//   }
// })
