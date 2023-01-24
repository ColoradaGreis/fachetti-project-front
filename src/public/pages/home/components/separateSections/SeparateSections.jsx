import React from 'react'
import style from './style.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

/**
 * @param {string} text
 * @param {string} id
 * @returns {JSX.Element}
 */
function SeparateSections ({ text, id }) {
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

SeparateSections.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

SeparateSections.defaultProps = {
  text: 'SeparateSections',
  id: 'SeparateSections'
}

export default SeparateSections
