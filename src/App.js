import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Landing from './screens/Landing/Landing';
import Brands from './screens/Brands/Brands';
import Contact from './screens/Contact/Contact';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path='/brands'>
          <Brands />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
