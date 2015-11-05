/*eslint-disable */
//React must be imported anyway to render the JSX below.
import React from 'react';
/*eslint-enable */
import Debug from 'debug';
import ReactDOM from 'react-dom';
import AppRoot from '../../app/components/AppRoot.js';

var attachElement = document.getElementById('app');

Debug.enable('myApp*');
ReactDOM.render(<AppRoot />, attachElement);