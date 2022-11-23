import s from './card.module.css'
import image from '../../assets/images/product1.png'

export default function Card () {
  return (
    <div className={`${s.card}`}>
      <div className='col'>
        <img src={image} alt='image' className={s.image} />
      </div>
      <div className='col p-2 d-flex flex-column justify-content-start align-items-start'>
        <h4 className={s.name}>Nombre del producto</h4>
        <span className='fs-6'>$ 999</span>
      </div>
    </div>
  )
}
