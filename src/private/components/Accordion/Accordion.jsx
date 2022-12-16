import { useEffect, useState } from 'react'
import { Accordion as Acordion, Card } from 'react-bootstrap'
import { CustomToggle, Body } from './'
import { Consults as data } from '../../../data'
import { parseDate } from '../../utilities'

export default function Accordion () {
  console.log(data[0].date.getDate())
  console.log(data)
  const [state, setState] = useState([])// [booleanos]

  useEffect(() => {
    const readState = data.map(user => user.read)

    setState(readState)
  }, [data])
  return (
    <>
      {
      data.map((user, index) => (
        <Acordion as='div' key={index}>
          <Card className='position-relative'>
            <Card.Header>
              <CustomToggle
                eventKey={user.id}
                name={user.name}
                date={parseDate(user.date)}
                read={state[index]}
                index={index}
                setState={setState}
                state={state}
              />
            </Card.Header>
            <Acordion.Collapse eventKey={user.id}>
              <Card.Body className='noPointer'>
                <Body user={user} />
              </Card.Body>
            </Acordion.Collapse>
          </Card>
        </Acordion>
      ))
    }
    </>
  )
}
