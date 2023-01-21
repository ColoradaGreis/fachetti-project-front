import style from './style.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function SeparateSections ({ text, id }) {
  return (
    <Container as='section' className={`${style.container} bkgBlue3`} fluid id={id}>
      <Row className='h-100 align-items-end px-sm-2 px-md-5 pb-md-2 '>
        <Col>
          <h2 className='white bold fs-3 fst-italic text-uppercase user-select-none'>{text}</h2>
        </Col>
      </Row>
    </Container>
  )
}
