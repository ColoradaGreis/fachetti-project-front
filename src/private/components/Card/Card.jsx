import style from './style.module.css'
import close from './Recurso 62@300x.png'
import { CloudinaryWidget } from '../'
import { useEffect, useState } from 'react'
import { deleteCloudinaryImage } from '../../utilities'

export default function Card ({ handleChange, setValues, values }) {
  const [urlImage, setUrlImage] = useState({
    secureUrl: undefined,
    publicId: undefined,
    delete_token: undefined
  })
  // Eliminar imagen
  const destroyImage = () => {
    deleteCloudinaryImage(urlImage.delete_token)
    setUrlImage({
      secureUrl: undefined,
      publicId: undefined,
      delete_token: undefined
    })
  }
  useEffect(() => { setValues({ ...values, image: urlImage.secureUrl }) }, [urlImage])
  return (
    <div className={`container p-5 ${style.cardShadow}`}>

      <div className='row justify-content-center position-relative'>

        {
                    urlImage.secureUrl
                      ? (
                        <>
                          <img src={urlImage.secureUrl} alt='...' className={` w-100 h-100 ${style.cardImg}`} />
                          <img src={close} alt='Close image' className={`${style.close}`} onClick={destroyImage} />
                        </>
                        )
                      : (
                        <div className={`w-100 bkgWhite d-flex align-items-center justify-content-center ${style.notImage}`}>
                          <CloudinaryWidget setUrlImage={setUrlImage} />
                        </div>
                        )
                  }

      </div>

      <div className='row'>
        <div className='col-12 mt-3 px-0'>
          <textarea
            maxLength={70}
            name='name'
            id='name'
            placeholder='Nombre del producto..'
            className='w-100 textArea'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
