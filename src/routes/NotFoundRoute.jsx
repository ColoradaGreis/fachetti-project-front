import { Route, Routes } from 'react-router-dom'

function NotFoundRoute ({ children }) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  )
}
export default NotFoundRoute
