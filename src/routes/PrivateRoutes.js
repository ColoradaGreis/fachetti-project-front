import { Route } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin'
import NotFoundRoute from './NotFoundRoute'
import { PrivateNameRoutes } from './routes.name'

export default function PrivateRoutes () {
  return (
    <>
      <HeaderAdmin />
      <NotFoundRoute>
        <Route path={PrivateNameRoutes.ADMIN} element={<Admin />} />
      </NotFoundRoute>
    </>
  )
}
