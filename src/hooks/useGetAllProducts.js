import { useEffect, useState } from 'react'
import { urlApi } from '$Api'
// import { useParams } from 'react-router'

export default function useGetAllProducts (category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getProducts = async () => {
    try {
      const api = await urlApi.get(`/products/categories/${category}`)
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
