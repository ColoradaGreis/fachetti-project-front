import { useEffect, useState } from 'react'
import { urlApi } from '$Api'
// import { useParams } from 'react-router'
/**
 *
 * @param {string} category
 * @param {boolean} banned
 * @returns [array, boolean, string]
 * @description Hook que obtiene todos los productos de una categoria if banned is true, get banned products
 * @example
 * const { data, loading, error } = useGetAllProducts('category')
 */

export default function useGetAllProducts (category, banned) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getProducts = async () => {
    try {
      const api = await urlApi.get(`/products/categories/${category}${banned ? '/banned' : ''}`)
      if (typeof api.data === 'string') throw new Error(api.data)
      setState({
        data: api.data,
        loading: false,
        error: null
      })
    } catch (error) {
      setState({
        data: [],
        loading: false,
        error: error.message
      })
    }
  }
  useEffect(() => {
    getProducts()
  }, []) // eslint-disable-line

  return {
    ...state
  }
}
