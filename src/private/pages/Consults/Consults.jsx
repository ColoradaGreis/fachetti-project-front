import { Accordion, SwichStatus } from './components'
import { useTranslation } from 'react-i18next'

export default function Consults () {
  const { t } = useTranslation('private')
  return (
    <div className='container-fluid px-0 mx-0 '>

      <div className='row'>
        <div className='col-12'>
          <h2 className='text-uppercase'>{t('consults.title')}</h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-8'>
          mensajes sin leer
        </div>
        <div className='col-4'>
          Mensajes Leidos
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          Detalles
        </div>
      </div>

      <div className='row container-fluid px-0 py-0'>
        <div className='col-12'>
          <Accordion />
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <SwichStatus />
        </div>
      </div>

    </div>
  )
}

// const [state, setState] = useState({
//   email: '',
//   password: ''
// })
// const handleChange = (e) => {
//   setState({
//     ...state,
//     [e.target.name]: e.target.value
//   })
// }
// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const response = await urlApi.post('users/login', state)
//   console.log(response)
//   const user = jwtDecode(response.data, { payload: true })
//   console.log(user)
// }
// return (
//   <>
//
//     <form onSubmit={handleSubmit}>
//       <input type='email' name='email' onChange={handleChange} />
//       <input type='password' name='password' onChange={handleChange} />
//       <button type='submit'>Send</button>
//     </form>
//   </>
// )
