import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../routes/home';
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
          </div>
        </div>
    </Router>
  );
}

export default App;
