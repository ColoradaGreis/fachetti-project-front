import { useEffect, useState } from 'react'
import { Accordion as Acordion, Card } from 'react-bootstrap'
import { CustomToggle, Body } from './'
import { useGetAllQuestions } from '../../../hooks'
import { Loading } from '../../../public/components'

export default function Accordion ({ answered }) {
  const { data, loading, error } = useGetAllQuestions(answered)
  const [state, setState] = useState([])// [booleanos]
  console.log(data)
  useEffect(() => {
    const readState = data.map(user => user.isRead)
    setState(readState)
  }, [data])

  // TODO: falta el telefono en las respuestas del back
  // TODO: Ver tema paginado del back como manejarlo
  // TODO: Ver tema de la fecha deberia ser mas corta

  return (
    <>
      {loading && <Loading />}
      {error && <p>Error</p>}
      {data &&
      data.map((user, index) => (
        <Acordion as='div' key={index}>
          <Card className='position-relative'>
            <Card.Header>
              <CustomToggle
                eventKey={user.id}
                name={user.name}
                date={user.date}
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
      ))}
    </>
  )
}
