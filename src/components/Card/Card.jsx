import s from './card.module.css'

export default function Card ({ id, title, description, isBanned, isImportant, image }) {
  return (
    <div className={`${s.card}`}>
      <div className='col'>
        <img src={image} alt={title} className={s.image} />
      </div>
      <div className='col p-2 d-flex flex-column justify-content-start align-items-start'>
        <h4 className={s.name}>{title}</h4>
        <span className='fs-6'>$ 999</span>
        <div>{description}</div>
      </div>
    </div>
  )
}
