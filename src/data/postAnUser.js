import { urlApi } from '../api/API'

async function postAnUser (user) {
  const api = await urlApi.get('/users')
  if (typeof api.data !== 'string') return
  await urlApi.post('/users', user)
}

export default postAnUser
