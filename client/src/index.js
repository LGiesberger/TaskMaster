import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store/configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreationPage from './components/CreationPage/CreationPage';
import EditPage from './components/EditPage/EditPage';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/create" component={CreationPage} />
          <Route exact path="/" component={App} />
          <Route exact path="/edit/:taskId" component={EditPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
