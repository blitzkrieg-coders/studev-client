import React from 'react';
import Search from '../users/Search';
import { Card } from 'react-bootstrap';
import background from '../../background.png';

const ImageBackground = () => {
  return (
    <Card className='text-white text-center'>
      <Card.Img height={250} src={background} alt='Card image' rounded />
      <Card.ImgOverlay>
        <Card.Title>Search Users</Card.Title>
        <Card.Text>
          <Search />
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ImageBackground;
