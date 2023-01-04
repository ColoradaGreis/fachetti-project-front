import { useUserContext } from '@/context'
import style from './style.module.css'
import { CloudinaryWidget } from '../../../../components'
import { useEffect, useState } from 'react'
import { putUser } from '../../utils'

export default function ProfileImage () {
  const { userContextValue, setUserContextValue } = useUserContext()
  const [imageData, setImageData] = useState({
    secureUrl: userContextValue.profileImage,
    publicId: '',
    delete_token: ''
  })
  useEffect(() => {
    if (userContextValue.profileImage === imageData.secureUrl) return
    putUser(userContextValue.userId, { profileImage: imageData.secureUrl })
      .then(res => setUserContextValue(res))
      .catch(err => console.log(err))
  }, [imageData])
  return (
    <div className='position-relative'>
      <div className={style.icon}>
        <CloudinaryWidget profile setUrlImage={setImageData} />
      </div>
      <img src={userContextValue.profileImage} alt='profileImage' className={style.image} />
    </div>
  )
}
