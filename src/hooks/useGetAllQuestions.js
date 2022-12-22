import { urlApi } from '@/api'
import { useEffect, useState } from 'react'

export default function useGetAllQuestions (answered = false) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getQuestions = async () => {
    try {
      const api = await urlApi.get(`/questions?answered=${answered}`)
      if (typeof api.data === 'string') throw new Error(api.data)
      setState({
        data: api.data[0],
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
    getQuestions()
  }, [answered]) // eslint-disable-line

  return {
    ...state
  }
}
