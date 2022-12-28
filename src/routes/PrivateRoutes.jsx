import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { NavAdmin, HeaderAdmin } from '$Private/components'
// import { Consults, Products, Publications } from '$Private/pages'
import NotFoundRoute from './NotFoundRoute'
import { PrivateNameRoutes } from './routes.name'

const ConsultLazy = lazy(() => import('../private/pages/Consults/Consults'))
const ProductLazy = lazy(() => import('../private/pages/Products/Products'))
const PublicationsLazy = lazy(() => import('../private/pages/Publications/Publications'))

export default function PrivateRoutes () {
  return (
    <>
      <HeaderAdmin />
      <NotFoundRoute>
        <Route element={<NavAdmin />}>
          <Route index path={PrivateNameRoutes.CONSULTS} element={<ConsultLazy />} />
          <Route index path={PrivateNameRoutes.PRODUCTS} element={<ProductLazy />} />
          <Route index path={PrivateNameRoutes.PUBLICATIONS} element={<PublicationsLazy />} />
        </Route>
      </NotFoundRoute>
    </>
  )
}
