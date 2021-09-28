import ongoingReducer from './ongoingReducer';
import completedReducer from './completedReducer';
import taskReducer from './taskReducer';
import dateReducer from './dateReducer';
import calendarReducer from './calendarReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  taskReducer,
  completedReducer,
  ongoingReducer,
  dateReducer,
  calendarReducer,
});

export default reducers;
