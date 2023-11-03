import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'

const FetchComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (response.ok) {
        const users = await response.json()
        console.log(users)
        setData(users)
      } else {
        throw new Error('errore nel recupero utenti')
      }
    } catch (error) {
      console.log('errore!', error)
    }
  }

  return (
    <ListGroup>
      {data.map((user) => (
        <ListGroup.Item key={user.id}>
          {user.name} - {user.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default FetchComponent
