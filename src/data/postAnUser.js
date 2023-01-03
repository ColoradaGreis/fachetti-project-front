import { urlApi } from '../api/API'

async function postAnUser ({ name, email, password }) {
  const api = await urlApi.get('/users')
  if (typeof api.data !== 'string') return
  const user = {
    name,
    email,
    password
  }
  await urlApi.post('/users', user)
}

export default postAnUser
