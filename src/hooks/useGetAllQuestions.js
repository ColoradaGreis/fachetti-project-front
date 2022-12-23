import { urlApi } from '@/api'
import { useEffect, useRef, useState } from 'react'

export default function useGetAllQuestions (answered = false) {
  const refPage = useRef(1)
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
      refPage.current += 1
      setState({
        data: (!answered) ? state.data.concat(api.data[0]) : api.data[0],
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
    refPage.current = 1
    getQuestions()
  }, [answered])

  return {
    ...state,
    getQuestions
  }
}
