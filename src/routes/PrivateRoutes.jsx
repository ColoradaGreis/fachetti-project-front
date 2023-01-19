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
const ListCardsLazy = lazy(() => import('../private/pages/ListCards/ListCards'))

export default function PrivateRoutes () {
  return (
    <UserProvider>
      <NotFoundRoute>
        <Route element={<HeaderAdmin />}>
          <Route element={<NavAdmin />}>
            <Route index path={PrivateNameRoutes.CONSULTS} element={<ConsultLazy />} />
            <Route path={PrivateNameRoutes.PRODUCTS} element={<ProductLazy />} />
            <Route path={PrivateNameRoutes.PUBLICATIONS} element={<PublicationsLazy />} />
            <Route path={PrivateNameRoutes.SETTINGS} element={<SettingsLazy />} />

            <Route path={PrivateNameRoutes.EDIT_CATEGORIES} element={<ListCardsLazy />} />
            <Route path={PrivateNameRoutes.EDIT_PRODUCTS} element={<ListCardsLazy />} />
            <Route path={PrivateNameRoutes.EDIT_PUBLICATIONS} element={<ListCardsLazy />} />

            <Route path={PrivateNameRoutes.EDIT_CATEGORIES_FORM} element={<ProductLazy />} />
            <Route path={PrivateNameRoutes.EDIT_PRODUCTS_FORM} element={<ProductLazy />} />
            <Route path={PrivateNameRoutes.EDIT_PUBLICATIONS_FORM} element={<PublicationsLazy />} />
          </Route>
        </Route>
      </NotFoundRoute>
    </UserProvider>
  )
}
