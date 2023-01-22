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
          : <div key={data.id} className='justify-content-center shadow-lg p-3 mb-5 rounded w-100'>
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
