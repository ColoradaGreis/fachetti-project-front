import { urlApi } from '@/api'
import { useEffect, useRef, useState } from 'react'
import { swalErrorOrSuccess } from '../private/utilities'
import { questionsAdapter } from './adapters'

export default function useGetAllQuestions (answered = false) {
  const refPage = useRef(0)
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getQuestions = async () => {
    try {
      const api = await urlApi.get(`/questions?answered=${answered}&page=${refPage.current}`)
      if (typeof api.data === 'string') throw new Error(api.data)
      console.log(api)
      const adapterData = questionsAdapter(api.data[0])
      setState({
        data: (refPage.current) ? state.data.concat(adapterData) : adapterData,
        loading: false,
        error: null
      })
      refPage.current += 1
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
    refPage.current = 0
    getQuestions()
  }, [answered])

  return {
    ...state,
    getQuestions
  }
}
