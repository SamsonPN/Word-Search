import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice';
import gridReducer from '../reducers/gridSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    grid: gridReducer
  },
});
