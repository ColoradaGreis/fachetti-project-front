import { urlApi } from '@/api'
import { useEffect, useRef, useState } from 'react'
import { swalErrorOrSuccess } from '../private/utilities'
import { questionsAdapter } from './adapters'

export default function useGetAllQuestions (answered = false) {
  const refPage = useRef(0)
  const [lastPage, setLastPage] = useState(false)
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  const getQuestions = async () => {
    try {
      const api = await urlApi.get(`/questions?answered=${answered}&page=${refPage.current}`)
      if (typeof api.data.data === 'string') throw new Error(api.data)
      const adapterData = questionsAdapter(api.data.data)
      setState({
        data: (refPage.current) ? state.data.concat(adapterData) : adapterData,
        loading: false,
        error: null
      })
      refPage.current += 1
      if (refPage.current === api.data.totalPages) setLastPage(true)
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
    setLastPage(false)
    getQuestions()
  }, [answered])

  return {
    ...state,
    getQuestions,
    lastPage
  }
}
