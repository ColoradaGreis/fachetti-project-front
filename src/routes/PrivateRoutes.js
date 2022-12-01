import React from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const user = true

  return user ? children : <Redirect to='/' />
}

export default PrivateRoute
