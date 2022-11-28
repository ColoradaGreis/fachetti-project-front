import s from './card.module.css'
import image from '../../assets/images/product1.png'

export default function Card () {
  return (
    <div className={`${s.card}`}>
      <div className='col'>
        <img src={image} alt='image' className={s.image} />
      </div>
      <div className='col p-2 text-center'>
        <h2 className={s.name}>Nombre del producto</h2>
      </div>
    </div>
  )
}
