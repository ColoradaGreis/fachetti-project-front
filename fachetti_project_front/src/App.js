import Home from './components/Home/Home'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div clasName='container ms-0'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
