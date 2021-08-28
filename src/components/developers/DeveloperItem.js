import React from 'react';
import { Container, Image, Card } from 'react-bootstrap';

const DeveloperItem = ({ developer: { login, avatar_url, html_url } }) => {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Image
          className='d-block mx-auto'
          height={50}
          width={50}
          src={avatar_url}
          roundedCircle
        />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Card.Text>{html_url}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DeveloperItem;
