import { Route } from 'react-router-dom'
import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home'
import Nav from '../components/Nav/Nav'
import News from '../components/News/News'
import CategoryProduct from '../components/Products/CategoryProducts'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import { PublicNameRoutes } from './routes.name'
import NotFoundRoute from './NotFoundRoute'

export default function PublicRoutes () {
  return (
    <>
      <Nav />

      <NotFoundRoute>

        <Route index path={PublicNameRoutes.HOME} element={<Home />} />
        <Route path={PublicNameRoutes.CLIENTS} element={<Clients />} />
        <Route path={PublicNameRoutes.PRODUCTS} element={<Products />} />
        <Route path='/products/:name' element={<CategoryProduct />} />
        <Route path={PublicNameRoutes.NEWS} element={<News />} />
        <Route path={PublicNameRoutes.CONTACT} element={<Contact />} />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </NotFoundRoute>
      <Footer />
    </>
  )
}
