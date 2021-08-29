import React, { useContext, useState } from 'react';
import UserContext from '../../context/user/userContext';
import { Container, Form, Button } from 'react-bootstrap';

const Search = () => {
  const userContext = useContext(UserContext);
  const [text, setText] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    if (text !== '') {
      userContext.getUsers(text);
    }
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Container>
      <Form onSubmit={onSubmit} className='d-flex'>
        <Form.Control
          size='lg'
          type='search'
          placeholder='Python, Java, C++'
          className='mr-2'
          onChange={onChange}
        />
        <Button variant='primary'>Search</Button>
      </Form>
    </Container>
  );
};
export default Search;
