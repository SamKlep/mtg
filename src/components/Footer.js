import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Nav defaultActiveKey='/home' className='flex-column text-center'>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/history'>History</Nav.Link>
        <Nav.Link href='/cards'>Cards</Nav.Link>
      </Nav>
    </div>
  )
}

export default Footer
