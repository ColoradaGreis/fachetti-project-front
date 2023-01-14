import { createContext, useContext, useEffect, useState } from 'react'
import { getDecodedToken } from '../public/utils'

export const userContext = createContext()

export const UserProvider = ({ children }) => {
  const [userContextValue, setUserContextValue] = useState('')
  useEffect(() => {
    setUserContextValue(() => getDecodedToken())
  }, [])
  return <userContext.Provider value={{ userContextValue, setUserContextValue }}>{children}</userContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(userContext)
  return context
}
