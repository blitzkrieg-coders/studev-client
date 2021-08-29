import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { Container, NavDropdown, Image } from 'react-bootstrap';

const ProfileMenu = () => {
  const userContext = useContext(UserContext);
  const { loggedUser } = userContext;
  const { avatar_url } = loggedUser;
  return (
    <Container>
      {!avatar_url ? (
        <NavDropdown
          title={<span style={{ color: '#F1FAEE' }}>Log In</span>}
          id='basic-nav-dropdown'
        >
          <NavDropdown.Item href='#action/3.1'>
            Log In with Github <i class='lab la-github'></i>
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown
          title={
            <Image height={35} width={35} src={avatar_url} roundedCircle />
          }
          id='basic-nav-dropdown'
        >
          <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Log Out</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
        </NavDropdown>
      )}
    </Container>
  );
};

export default ProfileMenu;
