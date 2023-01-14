import add from './assets/add.png'
import style from './style.module.css'

export default function HeaderProducts ({ creating, setCreating, text }) {
  const handleChange = () => {
    setCreating({
      ...creating,
      status: !creating.status
    })
  }
  return (
    <div className={`row ${style.borderBottom}`}>
      <div className='col-12 px-0'>
        <h3 className='bold'>
          {`${text} ${creating.status ? creating.product : creating.category}s`}
        </h3>
      </div>
      <div className='col offset-1 '>
        <h5 className='pointer bold pointer underLineHover' onClick={handleChange}>
          <img src={add} alt='more' className={style.add} />
          {`${text} ${creating.status ? creating.category : creating.product}s`}
        </h5>
      </div>
    </div>
  )
}
