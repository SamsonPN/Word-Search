import { configureStore } from '@reduxjs/toolkit';
import gridReducer from '../reducers/gridSlice';
import solverReducer from '../reducers/solverSlice';

export default configureStore({
  reducer: {
    grid: gridReducer,
    solver: solverReducer
  },
});
