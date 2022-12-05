import { Route } from 'react-router-dom'
import { NavAdmin, HeaderAdmin } from '$Private/components'
import { Consults, Products, Publications } from '$Private/pages'
import NotFoundRoute from './NotFoundRoute'
import { PrivateNameRoutes } from './routes.name'

export default function PrivateRoutes () {
  return (
    <>
      <HeaderAdmin />
      <NotFoundRoute>
        <Route element={<NavAdmin />}>
          <Route index path={PrivateNameRoutes.CONSULTS} element={<Consults />} />
          <Route index path={PrivateNameRoutes.PRODUCTS} element={<Products />} />
          <Route index path={PrivateNameRoutes.PUBLICATIONS} element={<Publications />} />
        </Route>
      </NotFoundRoute>
    </>
  )
}
