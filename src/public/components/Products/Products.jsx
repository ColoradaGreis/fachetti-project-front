import React from 'react'
// import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import s from './Product.module.css'
import { useGetAllCategories } from '../../../hooks'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'

export default function Products () {
  const { data, loading, error } = useGetAllCategories()
  console.log(data)

  return (
    <div>
      <h1 className={s.h1Products}>PRODUCTOS</h1>
      <h3 className={s.h3Products}>Nuestros productos</h3>
      <div className='d-flex p-5'>

        {
        loading
          ? <Loading />
          : error
            ? alert(error) //eslint-disable-line
            : data.map(e =>
              <Link key={e.id} to={`/${e.name}`}>
                <Card
                  key={e.id}
                  id={e.id}
                  title={e.name}
                  image={e.image}
                />
              </Link>
            )

        }
      </div>
    </div>
  )
}

// export default function Products () {
//   const categories = useSelector(state => state.categories)

//   return (
//     <div>
//       <h1 className={s.h1Products}>PRODUCTOS</h1>
//       <h3 className={s.h3Products}>Nuestro productos</h3>
//       {
//         Array.isArray(categories) && categories.map(c => (
//           <Navigate key={c.id} link={c.name}>
//             <Card
//               key={c.id}
//               id={c.id}
//               title={c.name}
//               image={c.image}
//             />
//           </Navigate>
//         ))
//             }
//     </div>
//   )
// }
