import ongoingReducer from './ongoingReducer';
import completedReducer from './completedReducer';
import taskReducer from './taskReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  taskReducer,
  completedReducer,
  ongoingReducer,
});

export default reducers;
