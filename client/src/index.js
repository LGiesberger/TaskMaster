import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './redux/store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreationPage from './components/CreationPage/CreationPage';
import EditPage from './components/EditPage/EditPage';
import CalendarPage from './components/Calendar/Calendar';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/create" component={CreationPage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/edit/:taskId" component={EditPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
