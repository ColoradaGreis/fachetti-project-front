import { Route } from 'react-router-dom'
import NavAdmin from '../components/Admin/components/NavAdmin/NavAdmin'
import Admin from '../components/Admin/components/Admin'
import HeaderAdmin from '../components/Admin/components/HeaderAdmin/HeaderAdmin'
import NotFoundRoute from './NotFoundRoute'
// import { PrivateNameRoutes } from './routes.name'

export default function PrivateRoutes () {
  return (
    <>
      <HeaderAdmin />
      <NotFoundRoute>
        <Route element={<NavAdmin />}>
          <Route index path='/home' element={<Admin />} />
          <Route index path='/edit' element={<Admin />} />
        </Route>
      </NotFoundRoute>
    </>
  )
}
