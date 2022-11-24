import { urlApi } from '../../api/API'
import { getAllProducts, getProductById } from './productsSlice'

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get('products')
      console.log(response.data)
      return dispatch(getAllProducts(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getProductId = (id) => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get(`products/${id}`)
      return dispatch(getProductById(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}
