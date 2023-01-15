import { useLocation, useParams } from 'react-router-dom'
import { Card } from '../../../public/components'
import { PrivateNameRoutes } from '../../../routes'
import { useGetAllCategories, useGetAllProducts, useGetAllPublications } from '../../../hooks'

const admin = `/${PrivateNameRoutes.PRIVATE}`

export default function ListCards () {
  const { pathname } = useLocation()
  const routes = {
    isCategories: pathname === `${admin}${PrivateNameRoutes.EDIT_CATEGORIES}`,
    isProducts: pathname.includes('products'),
    isPublications: pathname === `${admin}${PrivateNameRoutes.EDIT_PUBLICATIONS}`
  }

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center gap-4'>
        {routes.isCategories && <RenderCategories />}
        {routes.isProducts && <RenderProducts />}
        {routes.isPublications && <RenderPublications />}
      </div>
    </div>
  )
}

export const RenderCategories = () => {
  const { data, loading } = useGetAllCategories(true)
  if (loading) return <p>Loading...</p>
  return data.map((category) => (
    <div className='col-4' key={category.id}>
      <Card
        id={category.id}
        image={category.image}
        title={category.name}
        isBanned={category.isBanned}
        route={`${admin}/all/products/${category.name}`}
      />
    </div>
  ))
}

export const RenderProducts = () => {
  const { categoryName } = useParams()
  const { data, loading } = useGetAllProducts(categoryName, true)
  if (loading) return <p>Loading...</p>
  return data.map((product) => (
    <div className='col-4' key={product.id}>
      <Card
        id={product.id}
        image={product.image}
        title={product.name}
        isBanned={product.isBanned}
      />
    </div>
  ))
}

export const RenderPublications = () => {
  const { data, loading } = useGetAllPublications(true)
  if (loading) return <p>Loading...</p>
  return data.map((publication) => (
    <div className='col-4' key={publication.id}>
      <Card
        id={publication.id}
        image={publication.image}
        title={publication.title}
        isBanned={publication.isBanned}
      />
    </div>
  ))
}
