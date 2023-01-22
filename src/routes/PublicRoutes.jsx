import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { PublicNameRoutes } from './routes.name'
import NotFoundRoute from './NotFoundRoute'
import { Nav } from '../public/components'

const HomeLazy = lazy(() => import('../public/pages/home/Home'))
const LoginAdminLazy = lazy(() => import('../public/pages/LoginAdmin/LoginAdmin'))
const CategoriesLazy = lazy(() => import('../public/pages/categories/Categories'))
const ProductsLazy = lazy(() => import('../public/pages/productsByCategory/ProductsByCategory'))
const DetailsLazy = lazy(() => import('../public/pages/DetailProduct/DetailProduct'))
const NewsLazy = lazy(() => import('../public/pages/News/News'))
const ContactLazy = lazy(() => import('../public/pages/Contact/Contact'))

export default function PublicRoutes () {
  return (
    <>
      <NotFoundRoute>
        <Route element={<Nav />}>
          <Route index path={PublicNameRoutes.HOME} element={<HomeLazy />} />
          <Route path={PublicNameRoutes.CATEGORIES} element={<CategoriesLazy />} />
          <Route path={PublicNameRoutes.PRODUCTS} element={<ProductsLazy />} />
          <Route path={PublicNameRoutes.DETAIL} element={<DetailsLazy />} />
          <Route path={PublicNameRoutes.NEWS} element={<NewsLazy />} />
          <Route path={PublicNameRoutes.CONTACT} element={<ContactLazy />} />
          <Route path={PublicNameRoutes.LOGIN} element={<LoginAdminLazy />} />
        </Route>
      </NotFoundRoute>
    </>
  )
}

/**
 * Modifique las rutas para que el notFound no muestre la nav
 * Ahora la nav tiene un Outlet que muestra su componente hijo y debajo el footer
 * Organize la carpeta Pages para que sea mas facil de entender los componentes
 * Ahora el componente Categories renderiza todas las categorias y el componente categiriesByCategory renderiza los productos de una categoria
 * Todos los componentes en la carpeta pages tienen lazy loading
 * Los componentes dentro de components son globales, se utilizan en mas de una pagina
 */
