import s from './card.module.css'

export default function Card ({ id, title, description, isBanned, isImportant, image }) {
  return (
    <div className={`${s.card}`}>
      <div className='col'>
        <img src={image} alt={title} className={s.image} />
      </div>
      <div className='col p-2 text-center'>
        <h2 className={s.name}>Nombre del producto</h2>
      </div>
    </div>
  )
}
