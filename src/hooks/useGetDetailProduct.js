import { useEffect, useState } from 'react'
import { urlApi } from '$Api'
// import { useParams } from 'react-router'

export default function useGetDetailProduct (id) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getProduct = async () => {
    try {
      const api = await urlApi.get(`/products/${id}`)
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
    getProduct()
  }, []) // eslint-disable-line

  return {
    ...state
  }
}
