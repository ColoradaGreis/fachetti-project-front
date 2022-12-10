import { useEffect, useRef } from 'react'
import { cloudinaryKeys } from '../../utilities'
import addPhoto from '@/assets/addPhoto.png'
import style from './style.module.css'

export default function CloudinaryWidget ({ setUrlImage }) {
  const cloudirayRef = useRef(null)
  const widgetRef = useRef(null)

  useEffect(() => {
    cloudirayRef.current = window.cloudinary
    console.log(cloudirayRef.current)
    widgetRef.current = cloudirayRef.current.createUploadWidget({
      cloud_name: cloudinaryKeys.cloud_name,
      api_key: cloudinaryKeys.api_key,
      api_secret: cloudinaryKeys.api_secret,
      uploadPreset: cloudinaryKeys.preset_name,
      sources: ['local', 'url', 'camera', 'image_search'],
      maxImageFileSize: 5000000,
      maxFiles: 1
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is the image info: ', result.info)
        setUrlImage(prev => ({
          ...prev,
          secureUrl: result.info.secure_url,
          publicId: result.info.public_id,
          delete_token: result.info.delete_token
        }))
      }
    })
  }, [])
  return (
    <div onClick={() => widgetRef.current.open()} className='pointer'>
      <img src={addPhoto} alt='Icon add photo' className={style.icon} />
    </div>
  )
}
