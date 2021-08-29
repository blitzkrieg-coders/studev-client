import React, { Fragment } from 'react';
import ImageBackground from '../layout/ImageBackground';
import Users from '../users/Users';
import User from '../users/User';

const Home = () => {
  return (
    <Fragment>
      <br />
      <ImageBackground />
      <br />
      <h2>Trending Devs</h2>
      <Users />
      <br />
      <User />
    </Fragment>
  );
};
export default Home;
