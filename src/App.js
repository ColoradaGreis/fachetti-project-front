import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Admin from './components/Admin/Admin'
import Clients from './components/Clients/Clients'
import Products from './components/Products/Products'
import CategoryProduct from './components/Products/CategoryProducts'
import Footer from './components/Footer/Footer'
import News from './components/News/News'

function App () {
  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <Route exact path={['/', '/about', '/contact', '/products', '/news', '/clients', '/works']} component={Nav} />
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/client' component={Clients} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:name' component={CategoryProduct} />
        <Route exact path='/news' component={News} />
      </Switch>
      <Route exact path={['/', '/home', '/about', '/contact', '/products', '/news', '/clients', '/works']} component={Footer} />
    </div>
  )
}

export default App
