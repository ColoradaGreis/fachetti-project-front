import s from './card.module.css'
// import image from '@/assets/landing2.jpg'

export default function Card ({ id, image, title }) {
  return (
    <div className={`${s.card}`}>
      <div className='d-flex justify-content-center align-items-center col'>
        <img src={image} alt='title' className={s.image} />
      </div>
      <div className='col p-2 text-center mb-3'>
        <h2 className={s.name}>{title}</h2>
      </div>
    </div>
  )
}
