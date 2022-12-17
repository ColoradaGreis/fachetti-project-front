import { AppRoutes } from './routes'
import { fakerDataToDB } from './data'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    fakerDataToDB()
  }, [])
  return (
    <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
      <AppRoutes />
    </div>
  )
}

export default App
