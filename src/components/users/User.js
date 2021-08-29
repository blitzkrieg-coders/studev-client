import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import UserInfo from './UserInfo';
import UserAnalytics from './UserAnalytics';
import { Container } from 'react-bootstrap';

const User = ({ match }) => {
  const userContext = useContext(UserContext);
  const { getUser, user } = userContext;
  const { gitHubLogin } = user;
  useEffect(() => {
    getUser(match.params.login);
  }, []);
  return (
    <Container>
      <h1>{gitHubLogin}</h1>
      <UserInfo />
      <UserAnalytics />
    </Container>
  );
};
export default User;
