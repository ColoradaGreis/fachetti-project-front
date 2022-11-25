import axios from 'axios'

const urlApi = axios.create({
  baseURL: 'https://fachetti-backend.herokuapp.com'
})

export default urlApi
