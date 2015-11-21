/*eslint-disable */
//React must be imported anyway to render the JSX below.
import React from 'react';
/*eslint-enable */
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import Root from './app/components/Root';

let routerConfig = () => {
  return (
      <Router>
        <Route path="/" component={Root} />
      </Router>
  );
};

ReactDOM.render(routerConfig(), document.getElementById('app'));
