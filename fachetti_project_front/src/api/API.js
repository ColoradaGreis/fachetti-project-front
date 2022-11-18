import axios from 'axios'

const urlApi = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default urlApi
