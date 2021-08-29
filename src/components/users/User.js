import React, { useEffect } from 'react';
import UserInfo from './UserInfo';
import UserAnalytics from './UserAnalytics';
import { Container } from 'react-bootstrap';

const User = () => {
  return (
    <Container>
      <UserInfo />
      <UserAnalytics />
    </Container>
  );
};
export default User;
