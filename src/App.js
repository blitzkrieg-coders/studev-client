import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import UserState from './context/user/UserState';
import Register2 from './components/users/Register2';

function App() {
  return (
    <UserState>
      <Router>
        <div className='App'>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route exact path ='/register' 
                  component = {Register2} //Pass in user state login
                  props = {true}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
