import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Router} from './components/router';

import todoApp from './reducers';
const store = createStore(todoApp);


const render = () => {
  ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
