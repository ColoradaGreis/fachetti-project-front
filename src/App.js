import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Admin from './components/Admin/Admin'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <Route exact path={['/', '/landing']} component={Nav} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/landing' component={Landing} />
      </Switch>
      <Route exact path={['/', '/landing']} component={Footer} />
    </div>
  )
}

export default App
