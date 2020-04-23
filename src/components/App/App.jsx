import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from '../../routes/Home';
import Maker from '../../routes/Maker';
import Solver from '../../routes/Solver';
import Puzzle from '../../routes/Puzzle';
import Results from '../../routes/Results';
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

            <Route exact path="/puzzle">
              <Puzzle />
            </Route>

            <Route exact path="/results">
              <Results />
            </Route>
            
          </div>
        </div>

    </Router>
  );
}

export default App;
