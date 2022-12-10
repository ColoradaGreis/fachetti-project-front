import { CloudinaryWidget } from '../CloudinaryWidget'
import style from './style.module.css'
import { useFormik } from 'formik'
import { useGetAllCategories } from '../../../hooks'
import close from './Recurso 62@300x.png'
import flechas from '@/assets/flechas.png'

export default function FormCreateProduct ({ urlImage, setUrlImage }) {
  const { data, loading, error } = useGetAllCategories()
  const {values, handleChange} = useFormik({ // eslint-disable-line
    initialValues: {
      name: '',
      image: urlImage.secureUrl || '',
      details: '',
      categoryId: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })
  const cancelImage = () => {
    setUrlImage({
      secureUrl: undefined,
      publicId: undefined
    })
  }
  console.log(values)
  return (
    <form className='row h-100 justify-content-center'>

      {/* ---------------------------Card------------------------ */}
      <div className='col-6 col-lg-5'>
        <div className={`container p-5 ${style.cardShadow}`}>

          <div className='row justify-content-center position-relative'>

            {
                    urlImage.secureUrl
                      ? (
                        <>
                          <img src={urlImage.secureUrl} alt='...' className={` w-100 h-100 ${style.cardImg}`} />
                          <img src={close} alt='Close image' className={`${style.close}`} onClick={cancelImage} />
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
      </div>
      {/* --------------------------Fin-Card------------------------ */}
      {/* --------------------------Details------------------------ */}
      <div className={`col-5 offset-1 bkgWhite px-5 py-5 ${style.detailsContainer}`}>
        <div className='row'>
          <div className='col-12'>
            <h2 className='bold'>Texto Detalle:</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <textarea
              maxLength={200}
              name='details'
              id='details'
              placeholder='Escribe aqui el detalle del producto..'
              className='w-100 textArea'
              onChange={handleChange}
            />
          </div>
        </div>

      </div>
      {/* --------------------------Fin-Details------------------------ */}

      <div className='row mt-5'>
        <div className='col-6'>
          <label htmlFor='categoryId' className='form-label bold pointer'>
            <img src={flechas} alt='arrows' className={style.flechas} /> <span> SELECCIONAR UNA CATEGORÍA</span>
          </label>
          {
          (!loading && !error) && (
            <div className='offset-1 col-10 mt-3'>
              <select
                name='categoryId'
                id='categoryId'
                className='w-100'
                onChange={handleChange}
              >
                <option hidden defaultValue>Seleccionar</option>
                {
                  data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          )
        }
        </div>
      </div>
    </form>
  )
}
