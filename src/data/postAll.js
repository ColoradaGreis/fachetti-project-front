import { urlApi } from '../api/API'

const postAll = async (url, array) => {
  const promiseArray = array.map((value) => {
    return urlApi.post(url, value)
  })
  console.log(promiseArray)
  await Promise.all(promiseArray)
}

export default postAll
