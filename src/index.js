import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import SiteContent from './components/SiteContent';
import Card from './components/cards/Card';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SiteContent} />
      <Route path="books" component={SiteContent} />
      <Route path="courses" component={SiteContent} />
      <Route path="onsite-tranning" component={SiteContent} />
      <Route path="post/:id" component={Card} />
      <Route path="signup" component={SiteContent} />
      <Route path="signin" component={SiteContent} />
    </Route>
  </Router>,
  document.getElementById('root')
);
