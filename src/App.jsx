import { AppRoutes } from './routes'
import { fakerDataToDB } from './data'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const googleAnalyticsId = import.meta.env.VITE_GA_TRACKING_ID || 'G-JM8S1JKYFR'

function App () {
  useEffect(() => {
    ReactGA.initialize(googleAnalyticsId)
    fakerDataToDB()
  }, [])

  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <AppRoutes />
    </div>
  )
}

export default App
