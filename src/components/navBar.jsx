import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/PlayList2.png'
import TemporaryProfileImg1 from '../assets/LickyShplit.gif'
import TemporaryProfileImg2 from '../assets/WarDuck.jpg'

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
            <Navbar.Brand style={{color: '#FB1514'}}>Play-List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="color-nav" style={{color: "#FB1514"}}>Home</Nav.Link>
              <Nav.Link href="/catalogue" className="color-nav" style={{color: "#FB1514"}}>Catalogue</Nav.Link>
            </Nav>
            <div className="d-flex flex-grow-1">
              <Form className="d-flex flex-grow-1">
                  <Form.Control
                    type="search"
                    placeholder="Search for games here"
                    className="me-2"
                    aria-label="Search"
                  />
              </Form>
            </div>
            <Nav.Link href="/profile" className="color-nav" style={{color: "#FB1514"}}>
              Profile
              <img src={TemporaryProfileImg2} alt={"Profile Style"} style={{margin: "0px 9px", width:"50px", height:"50px", borderRadius: "50px"}}/>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
