import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ApolloClient, createHttpLink} from '@apollo/client';

import Home from './pages/Home';
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import Video from './pages/Video';

import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri:'/graphql',
});

const client = new ApolloClient({
  link: httpLink
});

function App() {
  return (
    <div className="App">
      <ApolloClient client={client}>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/video'} component={Video} />
              <Route exact path={'/merch'} component={Merch} />
              <Route exact path={'/contact'} component={Contact} />
            </Switch>
          </div>
        </Router>
      </ApolloClient>
    </div>
  );
}

export default App;
