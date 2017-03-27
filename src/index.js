import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Router} from './components/router';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
