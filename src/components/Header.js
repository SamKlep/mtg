import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='white' expand='lg'>
        <Navbar.Brand href='/'>MtG</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/history'>History</Nav.Link>
            <Nav.Link href='/cards'>Cards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
