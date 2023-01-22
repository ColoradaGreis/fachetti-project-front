/* eslint-disable react/jsx-closing-tag-location */
import { useUserContext } from '../../../context'
import s from './card.module.css'
import { ButtonsEdit } from './components'
// import { Link } from 'react-router-dom'

// export default function Card ({ id, image, title, type }) {
//   return (
//     <div className={`${type === 'big' ? s.cardBig : type === 'small' ? s.cardTwo : s.card}`}>
//       <div className={`d-flex justify-content-center align-items-center col ${s.div}`}>
//         <img src={image} alt='title' className={s.image} />
//       </div>
//       <div className=' p-2 text-center mb-3'>
//         <h2 className={s.name}>{title}</h2>
export default function Card ({ id, image, title, isBanned, type }) {
  const user = useUserContext() // si existe es porque esta en la rutas de admin

  return (
    <div className={`${type === 'big' ? s.cardBig : type === 'small' ? s.cardTwo : s.card}`}>
      <div className={`d-flex justify-content-center align-items-center col position-relative ${s.div}`}>
        <img src={image} alt='title' className={`img-fluid ${s.image} ${user && 'opacity-50 img-fluid'}`} />
        {user && <ButtonsEdit id={id} isBanned={isBanned} />}
      </div>
      {/* {route
        ? <Link to={route}>
          <div className=' p-2 text-center mb-3'>
            <h2 className={s.name}>{title}</h2>
          </div>
        </Link>
        : <div className=' p-2 text-center mb-3'>
          <h2 className={s.name}>{title}</h2>
        </div>} */}
      <div className=' p-sm-2 text-center mb-sm-3'>
        <h2 className={s.name}>{title}</h2>
      </div>
    </div>
  )
}
