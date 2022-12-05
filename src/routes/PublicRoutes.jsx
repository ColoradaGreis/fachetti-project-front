import { Route } from 'react-router-dom'
import { PublicNameRoutes } from './routes.name'
import NotFoundRoute from './NotFoundRoute'
import { Home, Clients, Products, News, Contact, Footer, Nav } from '$Public/components'

export default function PublicRoutes () {
  return (
    <>
      <Nav />

      <NotFoundRoute>

        <Route index path={PublicNameRoutes.HOME} element={<Home />} />
        <Route path={PublicNameRoutes.CLIENTS} element={<Clients />} />
        <Route path={PublicNameRoutes.PRODUCTS} element={<Products />} />
        {/* <Route path='/products/:name' element={<CategoryProduct />} /> */}
        <Route path={PublicNameRoutes.NEWS} element={<News />} />
        <Route path={PublicNameRoutes.CONTACT} element={<Contact />} />
      </NotFoundRoute>
      <Footer />
    </>
  )
}
