import React, { useContext } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import UserContext from '../../context/user/userContext';
import '../../index.css';

const Navigation = () => {
  const userContext = useContext(UserContext);
  const { logged_user } = userContext;
  return (
    <Navbar style={{ backgroundColor: '#62b6cb' }}>
      <Container>
        <Navbar.Brand href='/' style={{ color: '#F1FAEE' }}>
          <i class='las la-book-reader'></i>Studev
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/' style={{ color: '#F1FAEE' }}>
            Home
          </Nav.Link>
          <Nav.Link href='/about' style={{ color: '#F1FAEE' }}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
