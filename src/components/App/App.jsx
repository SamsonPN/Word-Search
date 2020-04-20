import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../routes/home';
import Maker from '../../routes/maker';
import Solver from '../../routes/solver';
import Navbar from './navbar';
import './App.scss';

function App() {
  return (
    <Router>
        <div id="App">
          <Navbar />
          <div className="routes">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/maker">
              <Maker />
            </Route>
            <Route exact path="/solver">
              <Solver />
            </Route>
          </div>
        </div>
    </Router>
  );
}

export default App;
