import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Nav from '../components/Nav/Nav'
import News from '../components/News/News'
import CategoryProduct from '../components/Products/CategoryProducts'
import Products from '../components/Products/Products'
import PrivateRoutes from './PrivateRoutes'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route exact path={['/', '/about', '/contact', '/products', '/news', '/clients', '/works']} component={Nav} />
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path='/client' component={Clients} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:name' component={CategoryProduct} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin'>
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        </Route>
      </Switch>
      <Route exact path={['/', '/home', '/about', '/contact', '/products', '/news', '/clients', '/works']} component={Footer} />
    </BrowserRouter>
  )
}
