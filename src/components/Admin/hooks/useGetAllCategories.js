import { useEffect, useState } from 'react'
import { urlApi } from '../../../api/API'

export default function useGetAllCategories () {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null
  })

  const getCategories = async () => {
    try {
      setState({ ...state, loading: true })
      const api = await urlApi.get('/categories')
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
    getCategories()
  }, []) // eslint-disable-line

  return {
    ...state
  }
}
