import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import '../../index.css';

const Navigation = () => {
  return (
    <Navbar style={{ backgroundColor: '#E63946' }}>
      <Container>
        <Navbar.Brand href='/' style={{ color: 'white' }}>
          Studev
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/' style={{ color: 'white' }}>
            Home
          </Nav.Link>
          <Nav.Link href='/about' style={{ color: 'white' }}>
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item>
            <Image
              width={50}
              height={50}
              src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F4baa703abd480435fad4079d1538519c%2Ftumblr_pc19zy18kB1wckczgo7_250.png&f=1&nofb=1'
              roundedCircle
            />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
