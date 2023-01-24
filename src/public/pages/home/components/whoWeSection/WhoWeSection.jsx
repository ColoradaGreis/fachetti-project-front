import style from './style.module.css'
import { SeparateSections } from '../'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { exportImages } from './assets'
import { useTranslation } from 'react-i18next'

export default function WhoWeSection () {
  const { t } = useTranslation('public')
  return (
    <>
      <SeparateSections text={t('home.whoWeAre')} />

      <Container fluid className='p-4'>
        <Row className='gap-4 justify-content-center align-items-center'>

          <Col xs={12} md={5} lg={5}>
            <Card className={`p-4 ${style.card} `}>
              <Card.Img variant='top' src={exportImages.image400} />
            </Card>
          </Col>

          <Col xs={12} md={5} lg={4}>
            <Card className={`p-3 ${style.card} `}>
              <Card.Body>
                <Card.Text className={style.text}>
                  Desde <strong>1932</strong> enfocados en la fabricación de <strong>utensilios profesionales</strong> para el chef y el <strong>equipamiento integral de cocinas industriales</strong> sobre plano.<br /><br />

                  Contamos con el sevicio de <strong>VISITA DE ARQUITECTO</strong> para proyectar mesadas, estantes y equipos a la medida de cada proyecto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  )
}
