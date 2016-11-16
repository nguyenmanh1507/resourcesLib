import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import SiteContent from './components/SiteContent';
import SiteContentDetail from './components/SiteContentDetail';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SiteContent} />
      <Route path="books" component={SiteContent} />
      <Route path="courses" component={SiteContent} />
      <Route path="onsite-tranning" component={SiteContent} />
      <Route path="post/:id" component={SiteContentDetail} />
      <Route path="signup" component={SiteContent} />
      <Route path="signin" component={SiteContent} />
    </Route>
  </Router>,
  document.getElementById('root')
);
