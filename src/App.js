import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import HiddenSection from './components/HiddenSection'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <Container>
      <h1 className="text-center mt-3">Testing a React App</h1>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <HiddenSection />
          <FetchComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default App
