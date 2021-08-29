import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { GET_USERS, GET_USER } from '../types';
import userReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    users: [],
    loggedIn: {},
    user: {},
  };
  const getUser = async (username) => {
    const res = await axios.get(
      `https://localhost:5001/api/users/details/${username}`
    );
    // this.setState({ users: res.data.items, loading: false });
    // setUsers(res.data.items);
    // setLoading(false);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  const getUsers = async (language) => {
    const res = await axios.get(
      `https://localhost:5001/api/users/search?language=${language}`
    );
    // this.setState({ users: res.data.items, loading: false });
    // setUsers(res.data.items);
    // setLoading(false);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        loggedIn: state.loggedIn,
        user: state.user,
        getUser,
        getUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
