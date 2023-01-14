import { urlApi } from '../../api/API'
import { getAllCategories, getAllProducts, getProductById } from './productsSlice'

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

export const getCategories = () => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get('categories')
      console.log(response)
      return dispatch(getAllCategories(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getProductsByCategories = (name) => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get(`products/categories/${name}`)
      return dispatch(getAllProducts(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}
