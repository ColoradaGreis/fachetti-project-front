import { urlApi } from '@/api'
import { useEffect, useRef, useState } from 'react'
import { questionsAdapter } from './adapters'

export default function useGetAllQuestions (answered = false) {
  const refPage = useRef(0)
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })

  // TODO: Cuando se pide las answered a la pag 1 no me trae la data del back debo poner la pag 0 para que funcione en postman hay un ejemplo

  const getQuestions = async () => {
    try {
      const api = await urlApi.get(`/questions?answered=${answered}&page=${refPage.current}`)
      if (typeof api.data === 'string') throw new Error(api.data)
      const adapterData = questionsAdapter(api.data[0])
      setState({
        data: (refPage.current) ? state.data.concat(adapterData) : adapterData,
        loading: false,
        error: null
      })
      refPage.current += 1
    } catch (error) {
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
