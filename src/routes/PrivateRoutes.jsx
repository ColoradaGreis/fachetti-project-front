import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { NavAdmin, HeaderAdmin } from '$Private/components'
import NotFoundRoute from './NotFoundRoute'
import { PrivateNameRoutes } from './routes.name'
import { UserProvider } from '../context'

const ConsultLazy = lazy(() => import('../private/pages/Consults/Consults'))
const ProductLazy = lazy(() => import('../private/pages/Products/Products'))
const PublicationsLazy = lazy(() => import('../private/pages/Publications/Publications'))
const SettingsLazy = lazy(() => import('../private/pages/SettingsPage/Settings'))

export default function PrivateRoutes () {
  return (
    <UserProvider>
      <NotFoundRoute>
        <Route element={<HeaderAdmin />}>
          <Route element={<NavAdmin />}>
            <Route index path={PrivateNameRoutes.CONSULTS} element={<ConsultLazy />} />
            <Route index path={PrivateNameRoutes.PRODUCTS} element={<ProductLazy />} />
            <Route index path={PrivateNameRoutes.PUBLICATIONS} element={<PublicationsLazy />} />
            <Route index path={PrivateNameRoutes.SETTINGS} element={<SettingsLazy />} />
          </Route>
        </Route>
      </NotFoundRoute>
    </UserProvider>
  )
}
