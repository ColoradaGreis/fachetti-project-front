import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Guard from './Guard'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRoutes />} />
        <Route element={<Guard />}>
          <Route path='/private/*' element={<PrivateRoutes />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}
