import { useEffect, useState } from 'react'
import { Accordion as Acordion, Card } from 'react-bootstrap'
import { CustonToggle, AccordionBody } from '../'
import { useGetAllQuestions } from '@/hooks'
import { Loading } from '@/public/components'
import { subjectManager } from '../../services/manager-status'
import { useTranslation } from 'react-i18next'

export default function Accordion () {
  const { t } = useTranslation('private')
  const answered = subjectManager.getSubject()
  const [asnweredState, setAnsweredState] = useState(false)
  const { data, loading, error, getQuestions } = useGetAllQuestions(asnweredState)
  const [state, setState] = useState([])// [booleanos]

  useEffect(() => {
    answered.subscribe((value) => {
      setAnsweredState(value)
    })
  }, [])
  useEffect(() => {
    const readState = data.map(user => user.isRead)
    setState(readState)
  }, [data])

  return (
    <>
      <div className='row px-0 mx-0 justify-content-between text-center'>
        <p className='col-3 my-1 px-0'>{t('consults.accordion.name')}</p>
        <p className='col-1 my-1 px-0'>{t('consults.accordion.date')}</p>
        <p className='col-1 my-1 px-0 me-3'>{t('consults.accordion.status')}</p>
      </div>

      {loading && <Loading />}
      {error && <p>Error</p>}
      {data &&
      data.map((user, index) => (
        <Acordion as='div' key={index}>
          <Card className='position-relative w-100 '>
            <Card.Header className='bkgGray'>
              <CustonToggle
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
                <AccordionBody user={user} />
              </Card.Body>
            </Acordion.Collapse>
          </Card>
        </Acordion>
      ))}
      <button onClick={getQuestions}>Next</button>
    </>
  )
}
