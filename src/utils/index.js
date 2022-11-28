import { urlApi } from '../api/API'

export const register = (values) => {
  return urlApi.post('questions', {
    username: values.username,
    description: values.message,
    email: values.email,
    phone: values.phone
  }).then(res => {
    if (res.statusText !== 'OK') throw new Error('Api response not OK')
    return res.data
  })
}
