import { urlApi } from '@/api'
const getCountMessages = async () => {
  try {
    const response = await urlApi.get('questions?readed=false')
    return response.data.totalData
  } catch (error) {
    return 0
  }
}

export default getCountMessages
