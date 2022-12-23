import { useEffect, useState } from 'react'
import { Accordion as Acordion, Card } from 'react-bootstrap'
import { CustomToggle, Body } from './'
import { useGetAllQuestions } from '../../../hooks'
import { Loading } from '../../../public/components'
import { parseDate } from '../../utilities'

export default function Accordion ({ answered }) {
  const { data, loading, error, getQuestions } = useGetAllQuestions(answered)
  console.log(data)
  const [state, setState] = useState([])// [booleanos]
  useEffect(() => {
    const readState = data.map(user => user.isRead)
    setState(readState)
  }, [data])

  // TODO: Ver tema paginado del back como manejarlo
  // TODO: Ver tema de la fecha deberia ser mas corta

  return (
    <>
      {loading && <Loading />}
      {error && <p>Error</p>}
      {data &&
      data.map((user, index) => (
        <Acordion as='div' key={index}>
          <Card className='position-relative w-100 '>
            <Card.Header className='bkgGray'>
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
      ))}
      <button onClick={getQuestions}>Next</button>
    </>
  )
}
