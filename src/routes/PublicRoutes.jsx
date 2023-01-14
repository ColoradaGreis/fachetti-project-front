import { Route } from 'react-router-dom'
import { PublicNameRoutes } from './routes.name'
import NotFoundRoute from './NotFoundRoute'
import { Home, Clients, Products, News, Contact, Footer, Nav, CategoryProducts, DetailProduct } from '../public/components'
import { LoginAdmin } from '../public/pages'

export default function PublicRoutes () {
  return (
    <>
      <Nav />

      <NotFoundRoute>

        <Route index path={PublicNameRoutes.HOME} element={<Home />} />
        <Route path={PublicNameRoutes.CLIENTS} element={<Clients />} />
        <Route path={PublicNameRoutes.CATEGORIES} element={<Products />} />
        <Route path={PublicNameRoutes.PRODUCTS} element={<CategoryProducts />} />
        <Route path={PublicNameRoutes.DETAIL} element={<DetailProduct />} />
        <Route path={PublicNameRoutes.NEWS} element={<News />} />
        <Route path={PublicNameRoutes.CONTACT} element={<Contact />} />
        <Route path={PublicNameRoutes.LOGIN} element={<LoginAdmin />} />
      </NotFoundRoute>
      <Footer />
    </>
  )
}
