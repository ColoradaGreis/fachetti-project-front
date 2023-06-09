import toBannedIcon from '@/assets/toBannedIcon.png'
import pencilIcon from '@/assets/pencilIcon.png'
import noBannedIcon from '@/assets/noBannedIcon.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { urlApi } from '@/api'

export default function ButtonsEdit ({ isBanned, id }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const route = {
    isCategories: pathname.includes('categories'),
    isProducts: pathname.includes('products'),
    isPublications: pathname.includes('publications')
  }
  const url = route.isCategories ? `/categories/banned/${id}` : route.isProducts ? `/products/banned/${id}` : `/publications/banned/${id}`
  const [banned, setBanned] = useState(isBanned)

  const handleBanned = async () => {
    await urlApi.put(`${url}?banned=${!banned}`)
    setBanned(prev => !prev)
  }

  const handlePut = () => {
    if (route.isCategories) {
      navigate(`/admin/put/categories/${id}`)
    } else if (route.isProducts) {
      navigate(`/admin/put/products/${id}`)
    } else if (route.isPublications) {
      navigate(`/admin/put/publications/${id}`)
    }
  }

  return (
    <div className='position-absolute container'>
      <div className='row d-flex justify-content-center align-items-center'>
        <img
          src={pencilIcon}
          alt='edit'
          className='col-4 pointer opacity'
          onClick={handlePut}
        />
        <img
          src={banned ? noBannedIcon : toBannedIcon}
          alt='banned'
          className='col-4 pointer opacity'
          onClick={handleBanned}
        />
      </div>
    </div>
  )
}
