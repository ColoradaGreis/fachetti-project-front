import axios from 'axios'

export const urlApi = axios.create({
  baseURL: 'https://fachettiprojectback-production.up.railway.app/'
})
export const localhost = axios.create({
  baseURL: 'https://localhost:3000/'
})
