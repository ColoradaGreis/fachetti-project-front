import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Guard = () => {
  const user = true

  return user ? <Outlet /> : <Navigate replace to='/' />
}

export default Guard
