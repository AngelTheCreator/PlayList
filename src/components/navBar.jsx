import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/PlayList2.png'

export default function Bar() {
  return (
    <div className='navBar'>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              style={{color: "#FB1514"}}    
              alt= "PlayList Logo"
              src={Logo}
              width="60px"
              height="50px"
              className="d-inline-block align-top"
          />
            </Navbar.Brand>
            <Navbar.Brand style={{color: '#FB1514'}}>PlayList</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="color-nav" style={{color: "#FB1514"}}>Home</Nav.Link>
              <Nav.Link href="/test" className="color-nav" style={{color: "#FB1514"}}>Catalogue</Nav.Link>
            </Nav>
            <Form className="d-flex flex-grow-1">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
