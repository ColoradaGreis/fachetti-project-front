import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailProduct } from '../../../hooks'
import Loading from '../Loading/Loading'
import s from './DetailProduct.module.css'

function DetailProduct () {
  const { id } = useParams()
  const { data, loading, error } = useGetDetailProduct(id)
  console.log('la data del detail', data)

  return (
    <div className='justify-content-center bkgWhite'>
      <div className='justify-content-center mx-5 p-5 gap-5 w-100  '>

        {
      loading
        ? <Loading />
        : error
          ? alert(error) //eslint-disable-line
          : <div key={data.id} className='container shadow-lg p-3 mb-5 bg-body rounded bkgGray'>
            <div className='row h-100'>
              <div className='col-6'>

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
      </div>
    </div>
  )
}

export default DetailProduct
