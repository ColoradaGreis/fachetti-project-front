import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'

function App () {
  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
