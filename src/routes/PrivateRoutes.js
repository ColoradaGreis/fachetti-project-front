import { Routes, Route } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import { PrivateNameRoutes } from './routes.name'

export default function PrivateRoutes () {
  return (
    <Routes>
      <Route path={PrivateNameRoutes.ADMIN} element={<Admin />} />
    </Routes>
  )
}
