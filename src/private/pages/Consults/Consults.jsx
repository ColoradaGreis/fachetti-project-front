import { Accordion } from '../../components'

export default function Consults () {
  return (
    <>
      <Accordion answered={false} />
    </>
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
