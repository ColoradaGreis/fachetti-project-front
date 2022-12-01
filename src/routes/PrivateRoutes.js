import { Route } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import NotFoundRoute from './NotFoundRoute'
import { PrivateNameRoutes } from './routes.name'

export default function PrivateRoutes () {
  return (
    <NotFoundRoute>
      <Route path={PrivateNameRoutes.ADMIN} element={<Admin />} />
    </NotFoundRoute>
  )
}
