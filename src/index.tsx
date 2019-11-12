import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import 'react-dates/initialize'
import 'bootstrap/dist/js/bootstrap.js';
import Country from './components/country-list/country-list'

import './assets/styles/styles.scss';

ReactDOM.render (
    <App
    />,
  document.getElementById("root")
);
