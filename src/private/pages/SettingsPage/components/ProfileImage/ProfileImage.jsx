import { useUserContext } from '@/context'
import style from './style.module.css'
import { CloudinaryWidget } from '../../../../components'
import { useEffect, useState } from 'react'
import { udpateToken, getDecodedToken } from '@/public/utils'
import { urlApi } from '@/api'

export default function ProfileImage () {
  const { userContextValue, setUserContextValue } = useUserContext()
  const [imageData, setImageData] = useState({
    secureUrl: userContextValue.profileImage,
    publicId: '',
    delete_token: ''
  })
  useEffect(() => {
    if (userContextValue.profileImage === imageData.secureUrl) return
    urlApi.put(`/users/${userContextValue.userId}`, { profileImage: imageData.secureUrl })
      .then(res => {
        udpateToken(res.data)
        setUserContextValue(getDecodedToken())
      })
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
