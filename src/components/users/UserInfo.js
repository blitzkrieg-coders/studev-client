import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { Card, Image, Button } from 'react-bootstrap';

const UserInfo = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { avatarUrl, gitHubLogin } = user;
  return (
    <Card>
      <Card.Body>
        <Image height={100} width={100} src={avatarUrl} roundedCircle />
        <h1>{gitHubLogin}</h1>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
