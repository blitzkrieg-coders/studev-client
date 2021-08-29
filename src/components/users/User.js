import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import UserInfo from './UserInfo';
import UserAnalytics from './UserAnalytics';
import UserData from './UserData';
import { Container } from 'react-bootstrap';

const User = ({ match }) => {
  const userContext = useContext(UserContext);
  const { getUser, user } = userContext;
  useEffect(() => {
    getUser(match.params.login);
  }, []);
  return (
    <Container>
      <br />
      <h2>Info</h2>
      <UserInfo user={user} />
      <br />
      <h2>Analytics</h2>
      <UserAnalytics user={user} />
      <br />
      <h2>Data</h2>
      <UserData user={user} />
    </Container>
  );
};
export default User;
