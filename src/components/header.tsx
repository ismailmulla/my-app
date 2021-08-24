import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap' 
const Header = () => {
    return (
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
<Container>
    <Navbar.Brand href="#home">Typescript</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">contact</Nav.Link>
        <Nav.Link href="#link">List</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default Header
