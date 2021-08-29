import React, { useContext } from 'react';
import { Table, Spinner } from 'react-bootstrap';

const UserData = ({ user: { repositoriesStats } }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Language</th>
          <th>Repositories</th>
          <th>Commits</th>
        </tr>
      </thead>
      <tbody>
        {repositoriesStats ? (
          repositoriesStats.map((repository) => (
            <tr>
              <td>{repository.language}</td>
              <td>{repository.amount}</td>
              <td>{repository.commits}</td>
            </tr>
          ))
        ) : (
          <span className='mx-auto'>
            <Spinner animation='border' variant='info' />
          </span>
        )}
      </tbody>
    </Table>
  );
};

export default UserData;
