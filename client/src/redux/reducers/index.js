import ongoingReducer from './ongoingReducer';
import completedReducer from './completedReducer';
import taskReducer from './taskReducer';
import dateReducer from './dateReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  taskReducer,
  completedReducer,
  ongoingReducer,
  dateReducer,
});

export default reducers;
