import { Accordion } from '../../components'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

export default function Consults () {
  const [state, setState] = useState(false)
  const handleChange = (e) => {
    setState(e.target.checked)
  }
  return (
    <>
      <Form>
        <Form.Check
          type='switch'
          id='custom-switch'
          label={state ? 'Preguntas respondidas' : 'Preguntas sin responder'}
          onChange={handleChange}
        />
      </Form>
      <div className='container-fluid px-0'>
        <Accordion answered={state} />
      </div>
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
