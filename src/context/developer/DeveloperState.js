import React, { useReducer } from 'react';
import axios from 'axios';
import DeveloperContext from './developerContext';
import DeveloperReducer from './developerReducer';
import { SEARCH_USERS, CLEAR_USERS, GET_USER } from '../types';
import developerReducer from './developerReducer';

const DeveloperState = (props) => {
  const initialState = {
    developers: [
      {
        login: 'ernesto',
        id: 210907,
        node_id: 'MDQ6VXNlcjIxMDkwNw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/210907?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernesto',
        html_url: 'https://github.com/ernesto',
        followers_url: 'https://api.github.com/users/ernesto/followers',
        following_url:
          'https://api.github.com/users/ernesto/following{/other_user}',
        gists_url: 'https://api.github.com/users/ernesto/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernesto/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ernesto/subscriptions',
        organizations_url: 'https://api.github.com/users/ernesto/orgs',
        repos_url: 'https://api.github.com/users/ernesto/repos',
        events_url: 'https://api.github.com/users/ernesto/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernesto/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernesto-jimenez',
        id: 1005,
        node_id: 'MDQ6VXNlcjEwMDU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1005?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernesto-jimenez',
        html_url: 'https://github.com/ernesto-jimenez',
        followers_url: 'https://api.github.com/users/ernesto-jimenez/followers',
        following_url:
          'https://api.github.com/users/ernesto-jimenez/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ernesto-jimenez/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernesto-jimenez/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernesto-jimenez/subscriptions',
        organizations_url: 'https://api.github.com/users/ernesto-jimenez/orgs',
        repos_url: 'https://api.github.com/users/ernesto-jimenez/repos',
        events_url:
          'https://api.github.com/users/ernesto-jimenez/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernesto-jimenez/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernestognw',
        id: 33379285,
        node_id: 'MDQ6VXNlcjMzMzc5Mjg1',
        avatar_url: 'https://avatars.githubusercontent.com/u/33379285?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernestognw',
        html_url: 'https://github.com/ernestognw',
        followers_url: 'https://api.github.com/users/ernestognw/followers',
        following_url:
          'https://api.github.com/users/ernestognw/following{/other_user}',
        gists_url: 'https://api.github.com/users/ernestognw/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernestognw/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernestognw/subscriptions',
        organizations_url: 'https://api.github.com/users/ernestognw/orgs',
        repos_url: 'https://api.github.com/users/ernestognw/repos',
        events_url: 'https://api.github.com/users/ernestognw/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernestognw/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernesto-g',
        id: 3535690,
        node_id: 'MDQ6VXNlcjM1MzU2OTA=',
        avatar_url: 'https://avatars.githubusercontent.com/u/3535690?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernesto-g',
        html_url: 'https://github.com/ernesto-g',
        followers_url: 'https://api.github.com/users/ernesto-g/followers',
        following_url:
          'https://api.github.com/users/ernesto-g/following{/other_user}',
        gists_url: 'https://api.github.com/users/ernesto-g/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernesto-g/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernesto-g/subscriptions',
        organizations_url: 'https://api.github.com/users/ernesto-g/orgs',
        repos_url: 'https://api.github.com/users/ernesto-g/repos',
        events_url: 'https://api.github.com/users/ernesto-g/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernesto-g/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernestosbarbosa',
        id: 3911474,
        node_id: 'MDQ6VXNlcjM5MTE0NzQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/3911474?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernestosbarbosa',
        html_url: 'https://github.com/ernestosbarbosa',
        followers_url: 'https://api.github.com/users/ernestosbarbosa/followers',
        following_url:
          'https://api.github.com/users/ernestosbarbosa/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ernestosbarbosa/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernestosbarbosa/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernestosbarbosa/subscriptions',
        organizations_url: 'https://api.github.com/users/ernestosbarbosa/orgs',
        repos_url: 'https://api.github.com/users/ernestosbarbosa/repos',
        events_url:
          'https://api.github.com/users/ernestosbarbosa/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernestosbarbosa/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ErnestOrt',
        id: 12517403,
        node_id: 'MDQ6VXNlcjEyNTE3NDAz',
        avatar_url: 'https://avatars.githubusercontent.com/u/12517403?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ErnestOrt',
        html_url: 'https://github.com/ErnestOrt',
        followers_url: 'https://api.github.com/users/ErnestOrt/followers',
        following_url:
          'https://api.github.com/users/ErnestOrt/following{/other_user}',
        gists_url: 'https://api.github.com/users/ErnestOrt/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ErnestOrt/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ErnestOrt/subscriptions',
        organizations_url: 'https://api.github.com/users/ErnestOrt/orgs',
        repos_url: 'https://api.github.com/users/ErnestOrt/repos',
        events_url: 'https://api.github.com/users/ErnestOrt/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ErnestOrt/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernestomedinam',
        id: 28765343,
        node_id: 'MDQ6VXNlcjI4NzY1MzQz',
        avatar_url: 'https://avatars.githubusercontent.com/u/28765343?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernestomedinam',
        html_url: 'https://github.com/ernestomedinam',
        followers_url: 'https://api.github.com/users/ernestomedinam/followers',
        following_url:
          'https://api.github.com/users/ernestomedinam/following{/other_user}',
        gists_url:
          'https://api.github.com/users/ernestomedinam/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernestomedinam/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernestomedinam/subscriptions',
        organizations_url: 'https://api.github.com/users/ernestomedinam/orgs',
        repos_url: 'https://api.github.com/users/ernestomedinam/repos',
        events_url:
          'https://api.github.com/users/ernestomedinam/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernestomedinam/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'erseco',
        id: 1876752,
        node_id: 'MDQ6VXNlcjE4NzY3NTI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1876752?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/erseco',
        html_url: 'https://github.com/erseco',
        followers_url: 'https://api.github.com/users/erseco/followers',
        following_url:
          'https://api.github.com/users/erseco/following{/other_user}',
        gists_url: 'https://api.github.com/users/erseco/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/erseco/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/erseco/subscriptions',
        organizations_url: 'https://api.github.com/users/erseco/orgs',
        repos_url: 'https://api.github.com/users/erseco/repos',
        events_url: 'https://api.github.com/users/erseco/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/erseco/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
      {
        login: 'ernestopmaria',
        id: 58423237,
        node_id: 'MDQ6VXNlcjU4NDIzMjM3',
        avatar_url: 'https://avatars.githubusercontent.com/u/58423237?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ernestopmaria',
        html_url: 'https://github.com/ernestopmaria',
        followers_url: 'https://api.github.com/users/ernestopmaria/followers',
        following_url:
          'https://api.github.com/users/ernestopmaria/following{/other_user}',
        gists_url: 'https://api.github.com/users/ernestopmaria/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/ernestopmaria/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/ernestopmaria/subscriptions',
        organizations_url: 'https://api.github.com/users/ernestopmaria/orgs',
        repos_url: 'https://api.github.com/users/ernestopmaria/repos',
        events_url:
          'https://api.github.com/users/ernestopmaria/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/ernestopmaria/received_events',
        type: 'User',
        site_admin: false,
        score: 1.0,
      },
    ],
  };
  const [state, dispatch] = useReducer(developerReducer, initialState);
  return (
    <DeveloperContext.Provider value={{ developers: state.developers }}>
      {props.children}
    </DeveloperContext.Provider>
  );
};

export default DeveloperState;
