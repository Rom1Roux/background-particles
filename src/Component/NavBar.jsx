import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
  state = {}
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' style={{zIndex: '100'}}>
        <Navbar.Brand href='#/'>Particules BackGround</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#simple'>Simple</Nav.Link>
            <Nav.Link href='#snow'>Snow</Nav.Link>
            <Nav.Link href='#night-sky'>Night Sky</Nav.Link>
            <Nav.Link href='#polygon'>Polygon</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
