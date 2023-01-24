import { lazy, Suspense, useEffect } from 'react' // eslint-disable-line
import { Route, Routes, useLocation } from 'react-router-dom'
import Guard from './Guard'
import { Loading } from '$Public/components'
import { PrivateNameRoutes } from './routes.name'
import ReactGA from 'react-ga4'

const PublicRoutesLazy = lazy(() => import('./PublicRoutes'))
const PrivateRoutesLazy = lazy(() => import('./PrivateRoutes'))

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID)
const trackPage = page => {
  ReactGA.set({ page })
  ReactGA.send({ hitType: 'pageview', page })
}
export default function AppRoutes () {
  const { pathname: route } = useLocation()

  useEffect(() => {
    trackPage(route)
  }, [])
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/*' element={<PublicRoutesLazy />} />
        <Route element={<Guard />}>
          <Route path={`${PrivateNameRoutes.PRIVATE}/*`} element={<PrivateRoutesLazy />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
