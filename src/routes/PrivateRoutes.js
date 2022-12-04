import { Route } from 'react-router-dom'
import { NavAdmin, HeaderAdmin, Admin } from '../private'
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
