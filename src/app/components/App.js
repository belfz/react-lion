import React from 'react';
import Root from './Root';
import {Router, Route} from 'react-router';

//stateless component
export default () => {
  return (
      <Router>
        <Route path="/" component={Root} />
      </Router>
  );
}