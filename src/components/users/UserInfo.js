import React, { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import { Card, Image, Button } from 'react-bootstrap';

const UserInfo = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  return (
    <Card>
      <Card.Body>
        <Image height={100} width={100} src={avatar_url} roundedCircle />
        <h1>{login}</h1>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default UserInfo;
