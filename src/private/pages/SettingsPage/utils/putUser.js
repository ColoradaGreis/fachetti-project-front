import { udpateToken, getDecodedToken } from '@/public/utils'
import { urlApi } from '@/api'
const putUser = async (id, data) => {
  if (typeof data !== 'object') throw new Error('Data  must be an object')
  console.log(data)
  const response = await urlApi.put(`/users/${id}`, data)
  if (response.status === 200) {
    const { data } = response
    udpateToken(data)
    return getDecodedToken()
  }
  throw new Error('Error to update user')
}

export default putUser
