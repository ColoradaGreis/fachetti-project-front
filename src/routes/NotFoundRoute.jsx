import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../public/components'

function NotFoundRoute ({ children }) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default NotFoundRoute
