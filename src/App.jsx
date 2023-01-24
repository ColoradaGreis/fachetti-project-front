import { AppRoutes } from './routes'
import { fakerDataToDB } from './data'
import { useEffect } from 'react'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilitiesConfigurator } from './utils'

function App () {
  useEffect(() => {
    fakerDataToDB()
  }, [])

  return (
    <div className='container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilitiesConfigurator />
        <AppRoutes />
      </SnackbarProvider>
    </div>
  )
}

export default App
