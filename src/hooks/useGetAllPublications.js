import { useEffect, useState } from 'react'
import { urlApi } from '$Api'

export default function useGetPublications () {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getPublications = async () => {
    try {
      const api = await urlApi.get('/publications')
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
    getPublications()
  }, []) // eslint-disable-line

  return {
    ...state
  }
}
