import React, { useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../../context/user/userContext';
import { Row, Col } from 'react-bootstrap';

const Users = () => {
  const userContext = useContext(UserContext);
  const { users } = userContext;
  return (
    <Row>
      {users.map((user) => (
        <Col>
          <UserItem key={user.id} user={user} />
          <br />
        </Col>
      ))}
    </Row>
  );
};

export default Users;
