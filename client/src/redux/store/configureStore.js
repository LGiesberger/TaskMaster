import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;
