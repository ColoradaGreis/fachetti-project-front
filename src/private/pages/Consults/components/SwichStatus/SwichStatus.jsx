import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { subjectManager } from '../../services/manager-status'

export default function SwichStatus () {
  const subject = subjectManager.getSubject()
  const [state, setState] = useState(subject)
  const handleChange = (e) => {
    subjectManager.setSubject(e.target.checked)
    setState(e.target.checked)
  }
  useEffect(() => {
    subject.subscribe((value) => {
      setState(value)
    })
  }, [])
  return (
    <Form>
      <Form.Check
        type='switch'
        id='custom-switch'
        label={state ? 'Preguntas respondidas' : 'Preguntas sin responder'}
        onChange={handleChange}
        checked={state}
      />
    </Form>
  )
}
