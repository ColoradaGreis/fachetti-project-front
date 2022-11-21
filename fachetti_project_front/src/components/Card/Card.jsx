import s from './card.module.css'
import image from '../../images/product1.png'

export default function Card () {

    return (

    <div className={`card ${s.card}`}>
            <h3 className={s.name}>Nombre del producto</h3>
            <img src={image} alt="image" className={s.image} />
    </div>
)}