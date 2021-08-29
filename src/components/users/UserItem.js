import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Card } from 'react-bootstrap';

const UserItem = ({ user: { gitHubLogin, avatarUrl, repositoriesAmount } }) => {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <br />
        <Image
          className='mx-auto'
          height={75}
          width={75}
          src={avatarUrl}
          roundedCircle
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/user/${gitHubLogin}`}>{gitHubLogin}</Link>
          </Card.Title>
          <Card.Text>
            <strong>Repositories: </strong>
            {repositoriesAmount}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserItem;
