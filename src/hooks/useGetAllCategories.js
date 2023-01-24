import { useEffect, useState } from 'react'
import { urlApi } from '$Api'
import { swalErrorOrSuccess } from '../private/utilities'
import { categoriesAdapter } from './adapters'

export default function useGetAllCategories (banned) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getCategories = async () => {
    try {
      const api = await urlApi.get(`/categories${banned ? '/banned' : ''}`)
      if (typeof api.data === 'string') throw new Error(api.data)
      const adapterData = categoriesAdapter(api.data)

      setState({
        data: adapterData,
        loading: false,
        error: null
      })
    } catch (error) {
      swalErrorOrSuccess(error.message, false)
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
