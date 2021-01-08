import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {
  return (
    <div>
      <Jumbotron className='text-center jumbo-main' fluid></Jumbotron>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1>Welcome Wizards and Spirit Invokers</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Container>
              <h1>History</h1>
              <p>
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
                volutpat condimentum velit.{' '}
              </p>
              <LinkContainer to='/history'>
                <Button>Learn More</Button>
              </LinkContainer>
            </Container>
          </Col>
          <Col>
            <Container>
              <h1>Cards</h1>
              <p>
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
                iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
                quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque
                volutpat condimentum velit.{' '}
              </p>
              <LinkContainer to='/cards'>
                <Button>Learn More</Button>
              </LinkContainer>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
