import { urlApi } from '@/api'
import { swalErrorOrSuccess } from './sweetAlerts'

export const postForms = async (url, data) => {
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

export const putForms = async (url, data, id) => {
  const res = {
    ok: false,
    message: ''
  }
  try {
    const response = await urlApi.put(`${url}/${id}`, data)
    if (response.status === 200) {
      res.ok = true
      res.message = 'actualizado con éxito'
    }
  } catch (error) {
    console.log(error)
    swalErrorOrSuccess(error.response.data[0].msg, false)
    res.message = error.response.data[0].msg
  }
  return res
}
