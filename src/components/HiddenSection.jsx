import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const HiddenSection = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button variant="warning" onClick={() => setShow(!show)}>
        {show ? 'Nascondi' : 'Mostra'} contenuto
      </Button>
      {show && (
        <Card className="mt-2">
          <Card.Img variant="top" src="https://placedog.net/400" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default HiddenSection
