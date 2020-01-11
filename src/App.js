import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Landing from './screens/Landing/Landing';
import Brands from './screens/Brands/Brands';
import Contact from './screens/Contact/Contact';

const App = () => {
  return (
    <Router basename='/handmade-audio2'>
      <Navbar />
      <Switch>
        <Route path='/brands'>
          <Brands />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
