import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import DeveloperState from './context/developer/DeveloperState';

function App() {
  return (
    <DeveloperState>
      <Router>
        <div className='App'>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </DeveloperState>
  );
}

export default App;