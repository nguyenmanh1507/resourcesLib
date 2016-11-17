import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLoger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './App';
import SiteContentPage from './pages/SiteContentPage';
import SiteContentDetail from './components/SiteContentDetail';

const loggerMiddleware = createLoger();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SiteContentPage} />
        <Route path="books" component={SiteContentPage} />
        <Route path="courses" component={SiteContentPage} />
        <Route path="onsite-tranning" component={SiteContentPage} />
        <Route path="post/:id" component={SiteContentDetail} />
        <Route path="signup" component={SiteContentPage} />
        <Route path="signin" component={SiteContentPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
