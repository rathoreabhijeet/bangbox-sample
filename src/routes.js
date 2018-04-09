import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import Gallery from './components/Gallery/Gallery';
import Bio from './components/Bio/Bio';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="gallery" component={Gallery} />
    <Route path="bio" component={Bio} />
  </Route>
);
