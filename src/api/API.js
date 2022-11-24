import axios from 'axios'

export const urlApi = axios.create({
  baseURL: 'https://fachetti-backend.herokuapp.com/'
})
export const localhost = axios.create({
  baseURL: 'https://localhost:3000/'
})
