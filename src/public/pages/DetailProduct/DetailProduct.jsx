import s from './style.module.css'

import { useParams } from 'react-router-dom'
import { useGetDetailProduct } from '@/hooks'
import { swallError } from '../../utils/sweetAlerts'

import { Loading } from '../../components'
import { OtherProducts } from './components'

const DetailProduct = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetDetailProduct(id)

  return (
    <div className='container-fluid justify-content-center my-5'>

      {
      loading
        ? <Loading />
        : error
          ? swallError('Producto no encontrado') //eslint-disable-line
          : <section key={data.id} className='justify-content-center shadow-lg p-3 mb-5 rounded w-100'>
            <div className='row d-sm-flex justify-content-center align-items-center'>
              <div className='col-sm-4  d-flex justify-content-center align-self-center'>

                <img className='img-fluid' src={data.image} />
              </div>
              <div className='col-sm-8'>

                <h1 key={data.id} className={s.title}>{data.name}</h1>
                <h3 className={s.h3}>{data.category}</h3>
                <p className={s.text}>{data.description}</p>
              </div>

            </div>

            </section> //eslint-disable-line

      }
      <section>
        <div>
          <h1>OTROS PRODUCTOS</h1>
        </div>
        <div>
          <OtherProducts />
        </div>
      </section>

    </div>
  )
}

export default DetailProduct
