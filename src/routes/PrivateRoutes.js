import { Route } from 'react-router-dom'
import NavAdmin from '../components/NavAdmin/NavAdmin'
import Admin from '../components/Admin/Admin'
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin'
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
