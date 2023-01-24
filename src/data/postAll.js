import { urlApi } from '../api/API'

const postAll = async (url, array) => {
  const promiseArray = array.map((value) => {
    return urlApi.post(url, value)
  })
  console.log(promiseArray)
  await Promise.allSettled(promiseArray)
}

export default postAll
