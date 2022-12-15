import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Consults as data } from '../../../data'
import Body from './Body'

export default function Consults () {
  const [state, setState] = useState([])// [booleanos]

  const isRead = (id) => {
    if (id === null) return
    const index = data.findIndex(user => user.id === id)
    if (state[index]) return
    setState(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }
  useEffect(() => {
    const readState = data.map(user => user.read)
    setState(readState)
  }, [data])
  console.log(data)
  return (
    <>
      {
      data.map((user, index) => (
        <Accordion defaultActiveKey='0' key={index} onSelect={isRead}>
          <Accordion.Item eventKey={user.id}>
            <Accordion.Header>{user.name}</Accordion.Header>
            <Accordion.Body>
              <Body user={user} read={state[index]} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))
    }
    </>
  )
}
