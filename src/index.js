import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
