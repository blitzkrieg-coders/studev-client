import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <Container>
      <Form className='d-flex'>
        <Form.Control
          size='lg'
          type='search'
          placeholder='Python, Java, C++'
          className='mr-2'
        />
        <Button variant='primary'>Search</Button>
      </Form>
    </Container>
  );
};
export default Search;
