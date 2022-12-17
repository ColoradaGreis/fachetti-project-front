import { urlApi } from '@/api'

const postForms = async (url, data) => {
  const res = {
    ok: false,
    message: ''
  }
  try {
    const response = await urlApi.post(url, data)
    if (response.status === 201) {
      res.ok = true
      res.message = 'creado con éxito'
    }
  } catch (error) {
    res.message = error.response.data.message
    console.log(error)
  }
  return res
}

export default postForms
