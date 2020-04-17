import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../routes/home';
import Header from './header';
import './App.scss';

function App() {
  return (
    <Router>
      <div id="App">
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
