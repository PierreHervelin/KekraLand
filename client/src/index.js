import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'material-icons/iconfont/material-icons.css';
import App from './App';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

