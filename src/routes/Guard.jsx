import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getToken } from '@/public/utils'

const Guard = () => {
  const user = getToken()

  return user ? <Outlet /> : <Navigate replace to='/' />
}

export default Guard
