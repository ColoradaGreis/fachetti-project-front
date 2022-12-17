import style from './style.module.css'
import close from '@/assets/crossIcon.png'
import { CloudinaryWidget } from '../'
import { useEffect, useState } from 'react'
import { deleteCloudinaryImage } from '../../utilities'
import { useTranslation } from 'react-i18next'

export default function Card ({ handleChange, setValues, values, title, handleBlur, touched, errors }) {
  const { t } = useTranslation('private')
  const [urlImage, setUrlImage] = useState({
    secureUrl: values.image || undefined,
    publicId: undefined,
    delete_token: undefined
  })
  const [pressed, setPressed] = useState(false)
  // Eliminar imagen
  const destroyImage = () => {
    if (urlImage.delete_token) deleteCloudinaryImage(urlImage.delete_token)
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
                    values.image
                      ? (
                        <>
                          <img src={values.image} alt='...' className={` w-100 h-100 ${style.cardImg}`} />
                          <img src={close} alt='Close image' className={`${style.close}`} onClick={destroyImage} />
                        </>
                        )
                      : (
                        <div
                          name='image'
                          onBlur={handleBlur}
                          className={`w-100 bkgWhite d-flex align-items-center justify-content-center position-relative ${style.notImage}`}
                        >
                          <CloudinaryWidget setUrlImage={setUrlImage} setPressed={setPressed} />
                          {
                            pressed && errors.image
                              ? <span className='errorText position-absolute bottom-0'>{errors.image}</span>
                              : null
                          }
                        </div>
                        )
                  }

      </div>

      <div className='row position-relative'>
        <div className='col-12 mt-3 px-0'>
          <textarea
            maxLength={70}
            name={title ? 'title' : 'name'}
            id={title ? 'title' : 'name'}
            placeholder={t('utils.title')}
            className='w-100 textArea'
            onChange={handleChange}
            value={title ? values.title : values.name}
            onBlur={handleBlur}
          />
        </div>
        {
                    !title && touched.name && errors.name
                      ? <span className='errorText position-absolute bottom-0'>{errors.name}</span>
                      : null
        }
        {
                    title && touched.title && errors.title
                      ? <span className='errorText position-absolute bottom-0'>{errors.title}</span>
                      : null
        }
      </div>
    </div>
  )
}
