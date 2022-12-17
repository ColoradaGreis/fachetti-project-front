import { urlApi } from '@/api'
import { useState } from 'react'
import jwtDecode from 'jwt-decode'

export default function Consults () {
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await urlApi.post('users/login', state)
    console.log(response)
    const user = jwtDecode(response.data, { payload: true })
    console.log(user)
  }
  return (
    <>
      {/* <Accordion /> */}
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' onChange={handleChange} />
        <input type='password' name='password' onChange={handleChange} />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}
