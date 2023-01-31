import { urlApi } from '$Api'
import { swalErrorOrSuccess } from '@/private/utilities'
// import { useParams } from 'react-router'

export const usePutContact = async (url, data) => {
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
    console.log(error)
    swalErrorOrSuccess(error.response.data[0].msg, false)
    res.message = error.response.data[0].msg
  }
  return res
}
