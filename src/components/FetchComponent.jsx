import { useState, useEffect } from 'react'
import { Form, ListGroup } from 'react-bootstrap'

const FetchComponent = () => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (response.ok) {
        const users = await response.json()
        // console.log(users)
        setData(users)
      } else {
        throw new Error('errore nel recupero utenti')
      }
    } catch (error) {
      console.log('errore!', error)
    }
  }

  return (
    <ListGroup className="mt-5">
      <Form.Control
        placeholder="Cerca per nome..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {data
        .filter((user) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((user) => (
          <ListGroup.Item key={user.id} data-testid="listgroup-item">
            {user.name} - {user.email}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default FetchComponent
