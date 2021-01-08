import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Button, Image, ListGroup } from 'react-bootstrap'

const ListItemScreen = ({ match }) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    const fetchFungus = async () => {
      const { data } = await axios.get(
        `https://api.magicthegathering.io/v1/cards/${match.params.id}`
      )

      console.log(data)
      setItem(data.card)
    }

    fetchFungus()
    // eslint-disable-next-line
  }, [match])

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link className=' my-5 mx-auto' to='/'>
              <Button variant='primary'>Go Back</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{item.name}</h1>
            <Image src={item.imageUrl} />
          </Col>
          <Col lg={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>{item.type}</ListGroup.Item>
              <ListGroup.Item>{item.setName}</ListGroup.Item>
              <ListGroup.Item>{item.number}</ListGroup.Item>
              <ListGroup.Item>{item.text}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ListItemScreen
