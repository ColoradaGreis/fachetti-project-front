import { lazy, Suspense } from 'react' // eslint-disable-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Guard from './Guard'
import { Loading } from '$Public/components'
import { PrivateNameRoutes } from './routes.name'

const PublicRoutesLazy = lazy(() => import('./PublicRoutes'))
const PrivateRoutesLazy = lazy(() => import('./PrivateRoutes'))

export default function AppRoutes () {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRoutesLazy />} />
          <Route element={<Guard />}>
            <Route path={`${PrivateNameRoutes.PRIVATE}/*`} element={<PrivateRoutesLazy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}