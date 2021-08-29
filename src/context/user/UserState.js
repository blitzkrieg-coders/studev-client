import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { SEARCH_USERS, CLEAR_USERS, GET_USER } from '../types';
import userReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    users: [],
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
      payload: res.data.items,
    });
  };
  const getUsers = async (language) => {
    const res = await axios.get(
      `https://localhost:5001/api/users/details/${username}`
    );
    // this.setState({ users: res.data.items, loading: false });
    // setUsers(res.data.items);
    // setLoading(false);
    dispatch({
      type: GET_USERS,
      payload: res.data.items,
    });
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        loggedUser: state.loggedUser,
        user: state.user,
        getUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
