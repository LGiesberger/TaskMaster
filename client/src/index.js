import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import CreationPage from './components/CreationPage/CreationPage';
import EditPage from './components/EditPage/EditPage';
import Calendar from './components/Calendar/Calendar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={App} />
          <PrivateRoute exact path="/create" component={CreationPage} />
          <PrivateRoute exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/edit/:taskId" component={EditPage} />
          <PrivateRoute exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
