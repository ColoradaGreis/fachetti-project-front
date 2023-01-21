import { AppRoutes } from './routes'
import { fakerDataToDB } from './data'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilitiesConfigurator } from './utils'

const googleAnalyticsId = import.meta.env.VITE_GA_TRACKING_ID || ''

function App () {
  useEffect(() => {
    ReactGA.initialize(googleAnalyticsId)
    fakerDataToDB()
  }, [])

  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App position-relative '>
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilitiesConfigurator />
        <AppRoutes />
      </SnackbarProvider>
    </div>
  )
}

export default App
