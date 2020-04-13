import React from 'react';
import { Counter } from '../../reducers/counter/Counter';
import Grid from '../Grid/Grid';
import './App.scss';
import '../../reducers/counter/Counter.module.scss';

function App() {
  return (
    <div id="App">
        <Counter />
        <Grid />
    </div>
  );
}

export default App;
