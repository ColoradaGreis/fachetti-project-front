import toBannedIcon from '../../../../../assets/toBannedIcon.png'
import pencilIcon from '../../../../../assets/pencilIcon.png'
import noBannedIcon from '../../../../../assets/noBannedIcon.png'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { urlApi } from '@/api'

export default function ButtonsEdit ({ isBanned, id }) {
  const { pathname } = useLocation()
  const route = {
    isCategories: pathname.includes('categories'),
    isProducts: pathname.includes('products'),
    isPublications: pathname.includes('publications')
  }
  const url = route.isCategories ? `/categories/${id}` : route.isProducts ? `/products/${id}` : `/publications/${id}`
  console.log()
  const [banned, setBanned] = useState(isBanned)

  const handleBanned = async () => {
    const response = await urlApi.put(`${url}?banned=${!banned}`)
    console.log(response)
    setBanned(prev => !prev)
  }
  return (
    <div className='position-absolute container'>
      <div className='row d-flex justify-content-center align-items-center'>
        <img
          src={pencilIcon}
          alt='edit'
          className='col-4 pointer'
        />
        <img
          src={banned ? noBannedIcon : toBannedIcon}
          alt='banned'
          className='col-4 pointer'
          onClick={handleBanned}
        />
      </div>
    </div>
  )
}
