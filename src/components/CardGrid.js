import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'

const CardGrid = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://api.magicthegathering.io/v1/cards`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <p>Loading cards...</p>
  }

  return (
    <div>
      <Jumbotron className='text-center' fluid>
        <h1 className='display-4'>Cards</h1>
      </Jumbotron>
      <Container>
        <Row>
          <br />
          <Col>
            <section className='cards'>
              {data.cards.map((item, _id) => (
                <ListItem key={_id} item={item} />
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardGrid
