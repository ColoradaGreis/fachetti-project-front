import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './config/i18next-config'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import { axiosIntercerptor } from './intercerptors'
import { BrowserRouter } from 'react-router-dom'

axiosIntercerptor()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

)
