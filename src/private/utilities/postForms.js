import { urlApi } from '@/api'
import { swalErrorOrSuccess } from './sweetAlerts'

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
    swalErrorOrSuccess(error.response.data.message, false)
    res.message = error.response.data.message
  }
  return res
}

export default postForms
