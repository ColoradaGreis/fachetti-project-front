import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailProduct } from '../../../hooks'
import Loading from '../Loading/Loading'
import s from './DetailProduct.module.css'
import { OtherProducts } from '.'

const DetailProduct = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetDetailProduct(id)
  console.log(id)
  console.log(data)

  return (
    <div className='container-fluid justify-content-center my-5'>

      {
      loading
        ? <Loading />
        : error
          ? alert(error) //eslint-disable-line
          : <div key={data.id} className='container justify-content-center shadow-lg p-3 mb-5 rounded'>
            <div className='row'>
              <div className='col-4  d-flex justify-content-center'>

                <img src={data.image} />
              </div>
              <div className='col-6'>

                <h1 key={data.id} className={s.title}>{data.name}</h1>
                <h3 className={s.h3}>{data.category}</h3>
                <br />
                <p>{data.description}</p>
              </div>

            </div>

            </div> //eslint-disable-line

      }
      <div>
        <div>

          <h1 className={s.title}>OTROS PRODUCTOS</h1>
        </div>
        <div>
          <OtherProducts />
        </div>
      </div>

    </div>
  )
}

export default DetailProduct
