import style from './style.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function SeparateSections ({ text }) {
  return (
    <>
      <Container as='section' className={`${style.container} bkgBlue3`} fluid>
        <Row className='h-100 align-items-end px-sm-2 px-md-5 pb-md-2 '>
          <Col>
            <h2 className='white bold fs-3 fst-italic text-uppercase'>{text}</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}
